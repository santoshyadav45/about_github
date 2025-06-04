console.log("hii, This is day 12 of javascript series");


//example of asynchronous programming
// console.log("one");
// console.log("two");

// setTimeout(() => {
//     console.log("hello programmers");
// }, 4000);

// console.log("three");
// console.log("four");


//example(01) of Callback function
// function greetUser(name, callback) {
//     console.log("Hi " + name);
//     callback(); // Ye baad mein chalega
// }
// function sayBye() {
//     console.log("Bye!");
// }
// greetUser("Rahul", sayBye);


//example(02) of Callback function (real life example)
// console.log("Khana order kiya...");

// setTimeout(function() {
//   console.log("Khana deliver ho gaya!");
// }, 3000); // 3 seconds ke baad callback chalega
// console.log("TV dekh raha hoon jab tak khana aaye...");


// Callback Hell 
// Callback Hell ka Example
// function getData(dataId, getNextdata) {
//     setTimeout(() => {
//         console.log("data", dataId);
//         if (getNextdata) {
//             getNextdata();
//         }
//     }, 2000);
// }

// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4);
//         });
//     });
// });


//Promises
//Example(01) of promises
// let promise01 = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     resolve("success");
// });
// console.log(promise01);


//Example(02) of promises
// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success");
//         },2000);
//     });
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success");
//         },2000);
//     });
// }

// console.log("fetching data1.....")
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log("fetching data.....2");
//     let p2 = asyncFunc2();
//     p2.then((res) => {});
// });

//Example(02) of promises
// let promise02 = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     reject("some error occured");
// });
// console.log(promise02);


//Promise chain
function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 1500);
    })
}

getData(1)
    .then((res) => {
        return getData(2);
    })
    .then((res) => {
        return getData(3);
    })
    .then((res) => {
        console.log(res);
    });

//Example(01) of promises (then)
// const getPromise01 = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         resolve("success");
//     });
// };
// let promise01 = getPromise01();
// promise01.then((resolve) => {
//     console.log("promise fulfilled",resolve);
// });

// promise01.catch((reject) => {
//     console.log("rejected",reject);
// });


//Example(01) of promises (catch)
// const getPromise02 = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         reject("some error occured")
//     });
// };
// let promise02 = getPromise02();
// promise02.then((resolve) => {
//     console.log("promise fulfilled",resolve);
// });

// promise02.catch((reject) => {
//     console.log("rejected",reject);
// });