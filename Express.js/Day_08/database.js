const mongoose = require('mongoose');

async function main() {
    await mongoose.connect("mongodb+srv://shuklasiddhant302_db_user:radhavallabh@cluster0.mufhgka.mongodb.net/Instagram");
}


module.exports = main;