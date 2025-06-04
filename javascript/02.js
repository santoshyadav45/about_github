console.log("hii, This is day 2 of javascript series");

// // COMMENTS

// This is a comment
/*This is a code that prints
hello world on our console window*/
console.log("hello world!")

// //(A)OPERATORS
//(1)arithmetic operators
let a = 5;
let b = 2;

console.log("a =", a, " & b =",b);
console.log("a + b =", a + b) //Addition
console.log("a - b =", a - b) //substraction
console.log("a * b =", a * b) //multiplication
console.log("a / b =", a / b) //division
console.log("a % b =", a % b) //modules
console.log("a ** b =", a ** b) //exponentiation

//unary operators

// increment
b++;
console.log("a =",a);
// decrement
a--;
console.log("a =",a);

//post increment
console.log("a++ =", a++);
console.log("a =", a)

// //pre increment
console.log("++a =", ++a);
console.log("a =", a)


//post decrement
console.log("b-- =", b--);
console.log("b =", b)

//pre decrement
console.log("--b =", --b);
console.log("b =", b)

//(2)assignment operator
// let c =7;
// let d = 20;

// c += 3;//c = c + 5
// console.log(c);

// d -= 2;//d = d - 2
// console.log(d);

// d *= 2;//d = d * 2
// console.log(d);

// d /= 2;//d = d / 2
// console.log(d);

// d = 20;
// d %= 2;//d = d % 2
// console.log(d);

// d **= 2;//d = d ** 2
// console.log(d);

//(3)comparison operator(always return true or false)

// let a = 5;
// let b = 3;

console.log("a == b", a == b);
console.log("a != b", a != b);
console.log("a < b", a < b);
console.log("a > b", a > b);
console.log("a <= b", a <= b);
console.log("a >= b", a >= b);


//(4)logical operator
// let a = 6;
// let b = 5;
// let cond1 = a > b;
// let cond2 = a === b;

// console.log("cond1 && cond2", cond1 && cond2);
// console.log("cond1 || cond2", cond1 || cond2);
// console.log("!(6<5) =",!(a < b));

// (B)conditional statements

// (1)if statement
let age = 15;
if(age > 18){
    console.log("you can vote")
}

// (2)if-else statement
let age01 = 20;
if(age01>18){
    console.log("you can drive")
}else{
    console.log("you cannot drive")
}

// (3)else-if statement
let age02 = 65;
if(age02<18){
    console.log("junior")
}else if(age>60){
    console.log("senior")
}else{
    console.log("middle")
}