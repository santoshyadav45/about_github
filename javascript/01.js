console.log("hii, This is day 1 of javascript series");
console.log("Santosh Yadav");

Fullname = "samose wala";
age = 20;
price = 45.13;
x = null;
y = undefined;
console.log("name =", Fullname);
console.log("age =", age);
console.log("price =", price)
console.log(x);
console.log(y);
console.log(Fullname, age);

let a; 
console.log(a);

let person = null;
console.log(person);

var name = "santosh";
console.log(name)

const PI = 3.14;
console.log(PI);

{
    let a = 45.13;
    console.log(a);
    console.log(typeof a);
}

let s = BigInt("123");
console.log(s);

let n = Symbol("123");
console.log(s);

const student = {
    fullName: "santosh yadav",
    age: 21,
    cgpa:7.7,
    isPass:true,
};

student["age"] = student["age"] + 1;
console.log(student);
console.log(student.fullName);
