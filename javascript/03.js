console.log("hii, This is day 3 of javascript series");

//LOOPS
//(1)for loop

//calculate sum of 1 to n
let sum = 0;
let n = 4;
for(let i = 1; i <= n; i++){
    sum = sum + i;
}
console.log("sum =",sum);
console.log("loop has ended");

//print number from 1 to 10
for(let i = 1;i <= 5 ; i++){
    console.log("i =", i);
}


//(2)while loop
let str = "javascript";
let i = 0;

while (i < str.length) {
    console.log(str[i]);
    i++;
}

console.log("Done");


//(3)do-while loop
// let i = 0;
// let word = "javascript";
// do{
//     console.log(word[i]);
//     i++;
// } while(i < word.length);


//(4)for-of loop
// let str = "javascript";
// for (let i of str){
//     console.log("i",i)
// }

//(5)for-in loop

// let student = {
//     name: "Rahul Kumar",
//     age: 20,
//     cgpa:7.5,
//     isPass:true
// };

// for (let key in student){
//     console.log(student[key]);
// }


//strings
//Example 1: Simple string
// let name = "Rahul";
// console.log(name); // Rahul

// Example 2: String concatenation (join strings)
// let firstName = "Rahul";
// let lastName = "Sharma";
// let fullName = firstName + " " + lastName;
// console.log(fullName); // Rahul Sharma

// Example 3: String length
// let city = "Mumbai";
// console.log(city.length); // 6

// Example 4: Using template literals (backticks)
// let age = 25;
// let message = `I am ${age} years old.`;
// console.log(message); // I am 25 years old.


//Strings Methods
// (1).length
// let str = "Hello";
// console.log(str.length); // 5

// (2).toUpperCase()
// let str = "hello";
// console.log(str.toUpperCase()); // HELLO

// (3).toLowerCase()
// let str = "HELLO";
// console.log(str.toLowerCase()); // hello

// (4).includes()
// let str = "I love JavaScript";
// console.log(str.includes("love")); // true
// console.log(str.includes("python")); // false

// (5).indexOf()
// let str = "banana";
// console.log(str.indexOf("a")); // 1 (first 'a')
// console.log(str.indexOf("z")); // -1 (not found)

// (6).slice(start, end)
// let str = "Hello World";
// console.log(str.slice(0, 5)); // Hello

// (7).replace()
// let str = "I like cats";
// console.log(str.replace("cats", "dogs")); // I like dogs

// (8).trim()
// let str = "   hello   ";
// console.log(str.trim()); // "hello"

// (9).split()
// let str = "apple,banana,mango";
// console.log(str.split(",")); // ["apple", "banana", "mango"]

// (10).charAt()
// let str = "hello";
// console.log(str.charAt(1)); // e