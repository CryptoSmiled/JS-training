console.log("hey");
//alert("kk");

//variables

var b = 'Smile';

console.log(b);

//var age = prompt('how old are you');
document.getElementById('text').innerHTML = b;

//numbers

var num1 = 60;
num1++;
num1--; //increment/decrement by 1
num1 += 10; //increment by any number
num1 = 11 % 3; //% remainder
console.log(num1);

/* functions
1. create afunction
2. call the function
*/

function hi(yourname) {

    var result = 'Hello ' + yourname; // string concatenation
    console.log(result);
}
//var name = prompt('what is your name');
hi(name);

function summ(a, b) {
    console.log(a + b);
    // var eq = a + b;

}

summ(5, 7);
summ('hello ', 'Dimka');

//loops

var n = 0;
/*
while (n < 10) {
    n += 1.7;
    console.log(n);
} */

for (let g = 1; g <= 10; g++) {
    console.log(g);
}

//data types

let age = 10; //number
let names = 'bob'; //string
let flname = { first: 'Dima', Last: 'Dolgov' }; //Object
let lol = true; //boolean
let list = [10, 20, 35, 'apple']; //array
let random; //undefined
let nothing = null; //value null

console.log(list);

//strings

let frut = 'banana';
let morefruits = 'Banana \nApple'; // \n - new line

console.log(morefruits.length); //how long
console.log(morefruits.indexOf('a')); //idexes where it finds first match
console.log(morefruits.slice(3, 9));
console.log(morefruits.replace('ana ', 'ned'));
console.log(morefruits.toUpperCase());
console.log(morefruits.charAt(2));
console.log(morefruits[2]);
console.log(morefruits.split('a')); //split by character


let fruits = ['banana', 'apple', 'orange'];
//let fruits = new Array('banana', 'apple', 'orange'); //smae thing
console.log(fruits[0]);
fruits[0] = 'pear'
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//array common methods

console.log('to string ', fruits.toString());
console.log(fruits.join(', '));
console.log(fruits.pop(), fruits); // .pop shows and removes last element
console.log(fruits.push('melon'), fruits); // adds an item
console.log(fruits[2]);
fruits[3] = 'plum'; //same as push
fruits[fruits.length] = 'berry'; //same as push
console.log(fruits);
fruits.shift(); //removes first element
console.log(fruits);
fruits.unshift('kiwi'); //adds 1st item
console.log(fruits);

let vegi = ['tomato', 'potato'];
let everything = fruits.concat(vegi);
console.log(everything);
console.log(everything.slice(2, 6));
console.log(everything.reverse());
console.log(everything.sort());

let position = [1, 3, 6, 2, 10, 105, 11];
console.log(position.sort());
console.log(position.sort(function(a, b) { return a - b })); // a-b assending; b-a dessending

let emptyarray = new Array();
for (let k = 1.1; k <= 10.5; k++) {
    emptyarray.push(k);
}
console.log(emptyarray);

//objects

let student = {
    first: 'Dima',
    last: 'Dolgov',
    age: 20,
    hight: 180,
    studentinfo: function() {
        return this.first + '\n' + this.last + '\n' +
            'age is ' + this.age;
    }
};

console.log(student.last);
student.last = 'dodo'
console.log(student.last);
student.age++;
console.log(student.age);
console.log(student.studentinfo());

//conditionals, control flow

/*var yo = prompt('age');
if ((yo >= 18) && (yo <= 35)) {
    status = 'target';
} else {
    status = 'not a target';
}
console.log(status); */

//weekday vs weekend


/*let day = prompt('day');
let weekday = ['mon', 'tue', 'wed', 'thu', 'fri'];
let weekend = ['sat', 'sun'];


if (weekday.includes(day)) {
    result = `${day} is a Weekday`;
} else {
    newFunction()
}

console.log(result);

function newFunction() {
    if (weekend.includes(day)) {
        result = `${day} is a Weekend`;
    } else { result = "Wrong Entry" }
}*/

switch (6) {
    case 7:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    default:
        text = 'weekday';
}

console.log(text);