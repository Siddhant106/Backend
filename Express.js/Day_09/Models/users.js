const mongoose = require('mongoose');
const { Schema } = mongoose;


const userSchema = new Schema ({
    firstName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 25
    },
    lastName: {
        type: String
    },
    age: {
        type: Number,
        min: 18,
        max: 80,
        required: true
    },
    gender: {
        type: String,
        // enum: ["Male", "Female", "Other"],
        validate(value){
            if(!["Male", "Female", "Other"].includes(value))
                    throw new Error("Invalid Gender");
        }       // These functions cannot check while Updation So we can check it in patch section
    },
    emailId: {
        type: String,
        required: true,
        unique: true,
        trim: true,     //  trim    -->    "anil@gmail.com"   !=   "     anil@gmail.com    "
        lowercase: true,
        immutable: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    photo: {
        type: String,
        default: "Link"
    }
}, {timestamps: true});

const User = mongoose.model("users", userSchema);

module.exports = User;