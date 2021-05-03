let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log(secretMessage);


// Use an array method to remove the last string of the array secretMessage.
removeLastElement = secretMessage.pop();
console.log(removeLastElement);

// You can check your work by logging the .length of the array.
console.log(secretMessage.length);


// Use an array method to add the words to and Program as separate strings to the end of the secretMessage array.
console.log(secretMessage.push("to","Program"));

// Change the word easily to the word right by accessing the index and replacing it.

secretMessage[7] = "right";
console.log(secretMessage);


// Use an array method to remove the first string of the array.
secretMessage.shift();
console.log(secretMessage);

// Use an array method to add the string Programming to the beginning of the array.
secretMessage.unshift("Programming");
console.log(secretMessage);


// Use an array method to remove the strings get, right, the, first, time,, and replace them with the single string know,.

secretMessage.splice(6,5, "know");
console.log(secretMessage);


// On one line, use console.log() and .join() to print the secret message as a sentence.

console.log(secretMessage.join());

// ARRAY METHODS

const items = [
    { name: "bike",      price: 100  },
    { name: "TV",        price: 200  },
    { name: "Album",     price: 10   },
    { name: "Book",      price: 5   },
    { name: "Phone",     price: 500  },
    { name: "Computer",  price: 1000 },
    { name: "Keyboard",  price: 25   },
];


// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
const filterItems = items.filter((item) => {
    return item.price <= 100;
})
console.log(filterItems);

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
const itemsNames = items.map((item) => {
    return item.name;
})
console.log(itemsNames);

// The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

const foundItems = items.find((item) => {
    return item.price === 100;
})
console.log(foundItems);

// The forEach() method executes a provided function once for each array element.
items.forEach((item) => {
    console.log(item.name)
    
})


// The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

const hasInexpensiveItems =  items.some((item) => {
    return item.price <= 100
})

console.log(hasInexpensiveItems);

// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

const gotInexpensiveItems =  items.every((item) => {
    return item.price <= 200
})

console.log(gotInexpensiveItems);