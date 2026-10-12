const express = require("express");
const app = express();
const main = require("./database");
const User = require("./Models/user");


app.use(express.json());

// CRUD Operation: Create, Read, Update, Delete

app.get("/info", async (req, res) => {
    const ans = await User.find({});
    res.send(ans);
});


app.post("/info", async (req, res) => {
    // const ans = new User(req.body);
    // await ans.save();

    try{
        await User.create(req.body);
        res.status(200).send("Successfully Saved");
    }
    catch(err){
        res.status(404).send(err);
    }
})


app.delete("/info", async (req, res) => {
    await User.deleteOne({name: "Vishal"});
    res.send('Deleted Successfully');
})


app.put("/info", async (req, res) => {
    const ans = await User.updateOne({name: 'Shivam'}, {age: 43, city: "Mumbai"});
    res.send('Updates Successfully');
})

main()
    .then(async () => {
        console.log("Connected to Databse")
        app.listen(3000, () => {
            console.log("Listening at port number 3000");
        })
        
        
        const ans1 = await User.find({name: "Dhokla"});
        console.log(ans1);
    })
    .catch((err) => console.log(err));