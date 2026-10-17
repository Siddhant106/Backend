const express = require("express");
const app = express();
const bcrypt = require("bcrypt"); 
const main = require("./database");
const User = require("./Models/users");
const validateUser = require("./utils/validateUser");


app.use(express.json());


app.post("/register", async (req, res) => {
    
    try{
        // Don't do DB call instead of it , Validate here while API calling :- API Validation 
        validateUser(req.body);

        // Converting password into Hash
        req.body.password = await bcrypt.hash(req.body.password, 10);

        await User.create(req.body);
        res.send("User Registered Successfully");
    }
    catch(err) {
        res.send("Error: " + err.message);
    }
});


app.post("/login", async (req, res) => {
    try{
        // Validate Email, Password
        const person = await User.findById(req.body._id);

        if(!(req.body.emailId === person.emailId))
                throw new Error("Invalid Credentials");

        const isAllowed = await bcrypt.compare(req.body.password, person.password);

        if(!isAllowed){
            throw new Error("Invalid Credentials");
        }

        res.send("Login Successfully");
    }
    catch(err){
        res.send("Error: " + err);
    }
})


app.get("/info", async (req, res) => {
    try{
        const result = await User.find({});
        res.send(result);
    }
    catch(err) {
        res.send("Error" + err.message);
    }
});


app.get("/user/:id", async (req, res) => {
    try{
        // Authenticate the user

        const result = await User.findById(req.params.id);
        res.send(result);
    }
    catch(err) {
        res.send("Error" + err.message);
    }
})


app.delete("/user/:id", async (req, res) => {
    try{
        await User.findByIdAndDelete(req.params.id);
        res.send("Deleted Successfully");
    }
    catch(err){
        res.send("Error" + err.message);
    }
})


app.patch("/user", async (req, res) => {
    try{
        const {_id, ...update} = req.body;
        await User.findByIdAndUpdate(_id, update, {"runValidators": true});     // runValidators: enable Validator function
        res.send('Update Successfully');
    }
    catch(err){
        res.send("Error" + err.message);
    }
})



main()
    .then(async () => {
        console.log("Connected to Databse")
        app.listen(3000, () => {
            console.log("Listening at port number 3000");
        })
    })
    .catch((err) => console.log(err));