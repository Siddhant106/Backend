const mongoose = require('mongoose');

async function main() {
    await mongoose.connect("url");

    // Creating Schema: Structure
/*    const userSchema = new Schema ({
        name: String,
        age: Number,
        city: String,
        gender: String
    });
*/

    // Creation of Model    -->    Creation of Connection (creation of Table)     -->    Creation of Class (Make Object or Instance) 
//    const User = mongoose.model("users", userSchema);


    // Creating a Document or Creating a Object:
//    const user1 = new User({name: "Mukesh", age: 39, city: "Delhi", gender: "Male"});
//    await user1.save();            // Save the data in the database

    // Insert or Create Document in a single step:
//    await User.create({name: "Dhokla", city: "Uganda", age: 40});


    // Insert multiple documents:
//    await User.insertMany([{name: "Ipsita", age: 21}, {age: 24, gender: "Female"}]);


    // Find Query:  To get all data
//    const ans1 = await User.find({});
//    console.log(ans1);

    // Find by particular field
//    const ans2 = await User.find({name: "Dhokla"});
//    console.log(ans2);

}

/*
main()
    .then(() => console.log("Connected to Databse"))
    .catch((err) => console.log(err));
*/


module.exports = main;