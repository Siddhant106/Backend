const express = require('express');
const app = express();


const bookStore = [
    {id: 1, name: "Harry Potter", author: "DevFlux"},
    {id: 2, name: "Friends", author: "Vikas"},
    {id: 3, name: "Homies", author: "Don't Know"},
    {id: 4, name: "Khooni Dil", author: "Mahesh"},
    {id: 5, name: "Prem Kahani", author: "Laila"},
    {id: 6, name: "Until the Decade", author: "Ramesh"},
    {id: 7, name: "Crimson", author: "Vikas"}
]

app.use(express.json());

app.get("/book", (req, res) => {        // We cannot use app.use instead of app.get because use function only matches root string and go inside the function
    console.log(req.query);
    const book = bookStore.filter(info => info.author === req.query.author);
    res.send(book);
    // res.send(bookStore);
});

app.get("/book/:id", (req, res) => {
    // console.log(req.params);         // gives id in the form string
    const id = parseInt(req.params.id);
    const book = bookStore.find(info => info.id === id);
    res.send(book);
})

app.post("/book", (req, res) => {
    bookStore.push(req.body);
    res.send("Data saved successfuly");
})

app.patch("/book", (req, res) => {
    res.send("Patch updated");
    const book = bookStore.find(info => info.id === req.body.id);

    if(req.body.author)
        book.author = req.body.author;
    if(req.body.name)
        book.name = req.body.name;
    console.log(req.body);
});

app.put("/book", (req, res) => {
    const book = bookStore.find(info => info.id === req.body.id);

    book.author = req.body.author;
    book.name = req.body.name;

    res.send("Changes updated successfully");
});

app.delete("/book/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = bookStore.findIndex(info => info.id === id);
    bookStore.splice(index, 1);

    res.send("Successfully Deleted");
})




// app.use('/user', (req, res) => {
//     res.send("HELLLOOOOO");
// });


// get, push, patch, put, delete

// Parsing :-
// app.use(express.json());        // Parser : express.json()  -->  converts json into js object
// middleware : JSON format data --> JS Object
            // string-format      |        
            // or text based      |   Object
            // format             |  
            // string, number     |   
            // null, object,      |
            // array              |
            // NOT AlLOWED:       |
            // function,undefined |
            // TWO FORMATS:[],{}  | 

// app.get('/user', (req, res) => {
//     // console.log(req);
//     res.send({name: "Rohit"});
// });

// app.post("/user", (req, res) => {
//     // console.log("Data saved successfully");
//     console.log(req.body);
//     res.send("Data saved successfully");
// })



app.listen(5000, () => {
    console.log("Listening at port 5000");
});