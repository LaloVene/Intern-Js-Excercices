/* #### Exercise 1 #### */

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

/* ############################################################################### */

/* #### Exercise 2 #### */

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

/* ############################################################################### */

/* #### Exercise 3 #### */