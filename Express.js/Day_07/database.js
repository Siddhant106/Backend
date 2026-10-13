const mongoose = require('mongoose');

async function main() {
    await mongoose.connect("url");
}


module.exports = main;