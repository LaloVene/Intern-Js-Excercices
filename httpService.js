// Use Express to create server
const express = require('express');
const app = express();

// Use port 3000
app.listen(3000, () => console.log("listening at 3000"));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

// Check if it is a palindrome
function palindrome(str) {
    var re = /[\W_]/g; // Remove any unwanted character
    var lowCaseStr = str.toLowerCase().replace(re, ''); // Trasnform the string
    var reverseStr = lowCaseStr.split('').reverse().join(''); // Split it and reverse it
    return reverseStr === lowCaseStr; // Check if it is the same
}

// Create Post service
app.post('/api', (request, response) => {
    console.log(request.body); // Check the request

    // Respond with JSON
    response.json({ 
        "palindrome": palindrome(request.body.phrase)
    })
})
