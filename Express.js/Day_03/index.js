const express = require("express");
const app = express();


// app.use(route, RH, [RH, RH], RH, RH);

// app.use("/user", 
// [(req, res, next) => {               // These callback funtions are known as ROUTE HANDLER (RH)
//     console.log("First");
//     // res.send("Hello Ji");
//     next();
// }, 
// (req, res, next) => {
//     console.log("Second");
//     res.send("Hello I'm second");
//     // next();          // Gives Error :- 404 not found user
// }]
// );

// OR

// Middleware :- Middleware woh request hoti hain jo respond nhi krti hain next() call karke control aage pass kar deti hain
// app.use("/user", 
// (req, res, next) => {
//     console.log("First");
//     next();
// });

// // Middleware
// app.use("/user",
// (req, res, next) => {
//     console.log("Second");
//     // res.send("Hello I'm second");
//     next();
// });

// // Middleware
// app.use("/user", 
// (req, res, next) => {
//     console.log("Third");
//     next();
// });

// // Request Handler
// app.use("/user", 
// (req, res) => {
//     console.log("Fourth");
//     res.send("I'm Foruth");
// });



// UseCase:- MAintain logs through middleware
app.use("/user", (req, res, next) => {
    console.log(`${Date.now()} ${req.method} ${req.url}`)
    next();
});

app.get("/user", (req, res) => {
    // console.log(`${Date.now()} ${req.method} ${req.url}`)
    res.send("Info about user");
});

app.post("/user", (req, res) => {
    // console.log(`${Date.now()} ${req.method} ${req.url}`)
    res.send("Info saved");
});

app.delete("/user", (req, res) => {
    // console.log(`${Date.now()} ${req.method} ${req.url}`)
    res.send("Info deleted");
});
// Request: Log ko maintain karna hota hai
// Timing:- Kis type ki request thi, URL


app.listen(3000, () => {
    console.log("Listening at port number 3000");
});