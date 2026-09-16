const express = require('express');
const app = express();

app.use('/about/:id/:user', (req, res) => {
    console.log(req.params);
    res.send({ name: "Rohit", age: 21, "money":6000 });
});

/*
^\/abou?t$  :-
    ^ → path ki starting
    \/ → actual /
    abou?t → abot ya about
    $ → path ka end
*/

/*
/abou?t :-  Yahan u optional hai → abot, about
/abou+t  :-  u one or more times → about, abouut, abouuut...
/abou*t  :-  any character can come inplace of u → abot, about, abouut, abouuut, abouugfiuyt...
*/ 

// app.use("/about", (req, res) => {
//     res.send({ name: "Rohit", age: 21, "money":6000 });
// });

// app.use("/contact", (req, res) => {
//     res.send("I'm your contact page");
// });

// app.use("/details", (req, res) => {
//     res.send("I'm your details page");
// });

// app.use("/", (req, res) => {
//     res.send("I'm your home page");
// });

app.listen(4000, () => {
    console.log("Listening at port 4000");
});

