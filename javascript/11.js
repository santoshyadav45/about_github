console.log("hii, This is day 11 of javascript series");

//Objects
// const student = {
//     fullName : "santosh yadav",
//     marks : 90.7,
//     printMarks: function () {
//         console.log("marks =",this.marks);
//     },
// };

// console.log(student);
// console.log((student).printMarks());


//protoype example01
// let arr = ["apple", "mango", "grapes"];
// console.log(arr);
// console.log(arr.push("litchi"));
// console.log(arr);

//protoype example02
// const employee = {
//     calcTax() {
//         console.log("tax rate is 10%");
//     },
// };
// const alluArjun = {
//     salary: 70000,
// };

// alluArjun.__proto__ = employee;
// console.l  og(alluArjun);
// console.log(alluArjun.calcTax);


//Class
//example01
// class ToyotaCar {
//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("stop");
//     }
// }
// console.log(ToyotaCar);
// let BMW = new ToyotaCar ();
// console.log(BMW);

//example02
// class person{
//     constructor(name, surname){
//         this.name = name;
//         this.surname = surname;
//     }
//     greet() {
//         console.log(`welcome ${this.name} ${this.surname}`);
//     }
// }

// const person1 = new person("santosh","yadav");
// person1.greet();


//Inheritance
//example01
// class Parent {
//     hello() {
//         console.log("Hello");
//     }
// }

// class Child extends Parent{}

// let obj = new Child();
// console.log(obj.hello());

//example02
// class Person {
//     eat() {
//         console.log("eat something")
//     }
//     sleep() {
//         console.log("good night")
//     }
//     workout() {
//         console.log("Do some exercise")
//     }
//     work(){
//         console.log("do some programming")
//     }
// }
// class Engineer extends Person{
//     work(){
//         console.log("solve problems, build something")
//     }
// }

// class Doctor extends Person {
//     work() {
//         console.log("treat patients")
//     }
// }

// let  vicky = new Engineer();
// console.log(vicky);
// console.log(vicky.work());
// console.log(vicky.sleep());
// console.log(vicky.workout());