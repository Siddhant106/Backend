// IP address of local address :-  127.0.0.1

const http = require('http');

const server = http.createServer((req, res) => {
    // res.end("Hello Coders");

    if(req.url === "/"){
        res.end("Hello Coders");
    }
    else if (req.url === '/contact'){
        res.end("This is our contact page");
    }
    else if(req.url === '/about'){
        res.end("This is our about page");
    }
    else {
        res.end("Error: Page not found");
    }
});

server.listen(4000, () => {
    console.log("I'm listening at port number 4000!")
});