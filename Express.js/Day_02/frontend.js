// Default get method
const response1 = await fetch("htpp://kjnews.com");
// OR
const response2 = await fetch("https://api.example.com/data", {
    method: "GET",
    headers: {
        'Content-Type': 'application/json'
    },
    // body: JSOM.stringify({name: 'John', age: 30})    //Optional in GET --> because Get is used for fetching the data not for giving the data
});

// Post method
const response = await fetch("https://api.example.com/data", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSOM.stringify({name: 'John', age: 30})
});

// Patch method
const response3 = await fetch("https://api.example.com/data", {
    method: "PATCH",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({age: 30})         // JSON.stringify() --> '{"age":30}'
});

