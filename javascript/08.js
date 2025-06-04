console.log("hii, This is day 08 of javascript series");

//Events

//(1)Example
// When mouse moves over the text, change its color
// document.getElementById("myText").addEventListener("mouseover", function () {
//     this.style.color = "red";
// });

//(2)Example //prints "btn1 was clicked" when we click on btn and increases its count till 5
// let Btn1 = document.querySelector("#Btn1");
// let a = 0;
// Btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     if (a < 5) {
//         a++;
//         console.log(a);
//     } else {
//         console.log("loop ended!")
//     }
// }

//(3)Example //prints "you are inside div" whenever we hover on div
// let div = document.querySelector("div");
// div.onclick = () => {
//     console.log("you are inside div");
// };


                // OR

// div.addEventListener("click", () => {
//     console.log("you are inside div");
// });


//Event Object
// Btn1.onclick = (event) => {
//     console.log(event);
//     console.log(event.type);
//     console.log(event.target);
//     console.log(event.clientX);
//     console.log(event.clientY);
// };


// Events Listeners //we can use more than one eventlister by using assEventListener
// let Btn1 = document.querySelector("#Btn1");
// Btn1.addEventListener("click", () => {
//     console.log("button 1 was clicked");
//     console.log(event.type);
// });

// Btn1.addEventListener("click", () => {
//     console.log("button 1 was clicked");
// });

// Btn1.addEventListener("click", () => {
//     console.log("button 2 was clicked");
// });

// const handler3 = () => {
//     console.log("button 3 was clicked");
// };
// Btn1.addEventListener("click", handler3);
// Btn1.removeEventListener("click", handler3);

//practice //changes dark mode to light mode , light mode to dark mode
let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

modeBtn.addEventListener("click", () => {
    if (currMode === "light"){
        body.classList.remove("light");
        body.classList.add("dark");
        currMode = "dark";
    }else{
        body.classList.remove("dark");
        body.classList.add("light");
        currMode = "light";
    }
    console.log(currMode);
});