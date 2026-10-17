// Validator library: Validates all the strings such as email, password, name etc.
const validator = require("validator");

function validateUser(data) {
    
    const mandatoryField = ["firstName", "emailId", "age", "password"];

    const IsAllowed = mandatoryField.every((keys) => Object.keys(data).includes(keys)); 

    if(!IsAllowed)
        throw new Error("Feild Missing");

    // Password validation
    // Firstname: minLength = 3 && maxLength: 20
    // Email validation

    if(!validator.isEmail(data.emailId))
        throw new Error("Invalid Email Id");

    if(!validator.isStrongPassword(data.password))
        throw new Error("Weak Password");

    if(!(data.firstName.length >= 3 && data.firstName.length <= 20))
        throw new Error("Name should be in range of 3 to 20 characters");

    
};

module.exports = validateUser;