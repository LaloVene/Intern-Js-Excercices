#### Exercise 1

Code a `count()` function in Javascript.

This function should return an integer in the following fashion:

```js
function outer(){ // outer function
    let x = -1; // variable that will be kept in memmory
    function inner() { // inner function
        x++;
        return x;
    }
    return inner;
}

const count = outer(); // storing the outer function

console.log(count()); // outputs 0
console.log(count()); // outputs 1
console.log(count()); // outputs 2

/*
This is a closure, it´s a function whitin a function, where the inner function
reference a variable that was declare in the outer function. This works because
the varibles in the outer function are kept in memory even after the function
is not anymore in the stack and the inner function has acces to the state of the
variables at the moment it was created, so each time we call the function the
variable can increase its value.
*/
```

In other words, the function should 'remember' how many times it has been invoked.

Global variables are forbidden. Provide a brief explanation of how your solution works.

#### Exercise 2

Sample API in Javascript.

Create an HTTP service (you are free to use libraries available in NPM) with a single route `POST /palindrome`.

The request to `POST /palindrome` should accept a JSON payload with the following shape:

```js
{
  "phrase": string
}
```

Your service should return JSON response, with a `palindrome` boolean value indicating if the phrase is a palindrome or not ([Wikipedia](https://es.wikipedia.org/wiki/Pal%C3%ADndromo)):

```js
{
  "palindrome": boolean
}
```

**Note**: The code to determine if the phrase is a palindrome should be written by you (not using a library).

Client Side
```js
async function api(word) { // Async function to use fetch
  const fetch = require("node-fetch");
  const options = { // Use fetch as POST
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  }

  const data = { // Phrase to make a Post with
    "phrase": word
  };

  const response = await fetch('http://localhost:3000/api', options); // Do a Post in the server
  const json = await response.json(); // Transform response to Json
  console.log(json); // Print Response
}

// Test
var word = "hannah";
api(word); // true
```
Server Side
```js
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
```

#### Exercise 3

Counter in React or Vue

Create a button click counter:

- It should have a 'Count' button.
- It should have a text with the number of times the button has been clicked.
- The text should be inmmediately updated everytime the user clicks on the button.
