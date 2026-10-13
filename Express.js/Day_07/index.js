const express = require("express");
const app = express();
const main = require("./databse");
const User = require("./Models/users");


app.use(express.json());


app.post("/register", async (req, res) => {
    
    try{
        // Don't do DB call instead of it Validate here while API calling :- API Validation 
        const mandatoryField = ["firstName", "emailId", "age", "password"];

        const IsAllowed = mandatoryField.every((keys) => Object.keys(req.body).includes(keys)); 

        if(!IsAllowed){
            throw new Error("Feild Missing");
        }

        await User.create(req.body);
        res.send("User Registered Successfully");
    }
    catch(err) {
        res.send("Error" + err.message);
    }
});


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