// Bcrypt library

const bcrypt = require("bcrypt");

const password = "Rohit@123";


// Generates new hashcode every time even for a same password also 
async function Hashing() {
    // Hash code + Salt
    const salt = await bcrypt.genSalt(10);
    const hashpass = await bcrypt.hash(password, salt);     // Slow Process   -->  We have to wait

    const ans = await bcrypt.compare("Rohit", hashpass);
    
    console.log(ans);
    console.log(salt);
    console.log(hashpass);
}

// Salt:     $2b$10$YaNtBUSiXmiROGjwnBrN3u
// Hashcode: $2b$10$YaNtBUSiXmiROGjwnBrN3u0a6lv9NUsFInhHq1tNfsYDoU1qG8P26
//                                Same   |

Hashing();