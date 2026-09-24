const express = require("express");
const { Auth } = require("./Middleware/auth");
const app = express();

// CRUD: Create Read Update Delete
app.use(express.json());
// Database: Array
const foodMenu = [
    { id: 1, food: "Noodles", category: "veg", prices: 200 },
    { id: 2, food: "Pizza", category: "veg", prices: 250 },
    { id: 3, food: "Burger", category: "non-veg", prices: 180 },
    { id: 4, food: "Pasta", category: "veg", prices: 220 },
    { id: 5, food: "Sandwich", category: "veg", prices: 150 },
    { id: 6, food: "Salad", category: "veg", prices: 120 },
    { id: 7, food: "Paneer Tikka", category: "veg", prices: 260 },
    { id: 8, food: "Chicken Curry", category: "non-veg", prices: 300 },
    { id: 9, food: "Dal Fry", category: "veg", prices: 140 },
    { id: 10, food: "Biryani", category: "non-veg", prices: 280 },
    { id: 11, food: "Tacos", category: "veg", prices: 200 },
    { id: 12, food: "Sushi", category: "non-veg", prices: 350 },
    { id: 13, food: "Ice Cream", category: "veg", prices: 100 },
    { id: 14, food: "Soup", category: "veg", prices: 130 },
    { id: 15, food: "Steak", category: "non-veg", prices: 400 },
    { id: 16, food: "Dosa", category: "veg", prices: 160 },
    { id: 17, food: "Idli", category: "veg", prices: 120 },
    { id: 18, food: "Fish Fry", category: "non-veg", prices: 320 },
    { id: 19, food: "Kebab", category: "non-veg", prices: 280 },
    { id: 20, food: "Chole Bhature", category: "veg", prices: 200 },
];

const AddToCart = [];
// user ko jo bhi food add krna cart me add kar dega

// Anyone can see the Menu
app.get("/food", (req, res) => {
    res.status(200).send(foodMenu);
});

// Authenticate admin here
// app.use("/admin", Auth);

// Add item into food menu
app.post("/admin", Auth, (req, res) => {
    foodMenu.push(req.body);
    res.status(200).send("Item added successfully");
});

app.delete("/admin/:id", Auth, (req, res) => {
    const id =parseInt(req.params.id);
    const index = foodMenu.findIndex(item => item.id === id);

    if(index === -1){
        res.status(404).send("Item not found");
    } else{ 
        foodMenu.splice(index, 1);
        res.status(200).send("Successfully Deleted");
    }
});

app.patch("/admin", Auth, (req, res) => {
    const id = req.body.id;
    const foodData = foodMenu.find(item => item.id === id);

    if(foodData){
        if(req.body.food){
            foodData.food = req.body.food;
        } 
        if(req.body.category){
            foodData.category = req.body.category;
        }
        if(req.body.prices){
            foodData.prices = req.body.prices;
        }
        res.status(200).send("Successfully Updated");
    } else {
        res.status(404).send("Item not exist");
    }
});


// User adding to cart:
app.get("/user", (req, res) => {
    if(AddToCart.length == 0){
        res.status(404).send("Cart is Empty");
    } else {
        res.status(200).send(AddToCart);
    }
});

app.post("/user/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const foodItem = foodMenu.find(item => item.id === id);
    if(foodItem){
        AddToCart.push(foodItem);
        res.status(200).send("Item added successfully");
    } else{
        res.status(404).send("Item out of stock");
    }
});

app.delete("/user/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = AddToCart.findIndex(item => item.id === id);

    if(index != -1){
        AddToCart.splice(index, 1);
        res.status(200).send("Deleted Successfully");
    } else {
        res.status(404).send("Item is not present");
    }
});

// Error Handling
app.get("/dummy", (req, res) => {
    try{
        JSON.parse({"name": "Mohit"});
        // JSON.parse("Invalid Json");
        res.send("Hello");
    } catch(err) {
        res.send("Some Error Occured " + err);
    }
});
// We cannot ue JSON.parse() because express.json() request body ko safe aur automatic tarike se parse karta hai.
// JSON.parse() ek saath JSON ko parse krta hai

app.listen(3000, () => {
    console.log("Listening at port number 3000");
}); 