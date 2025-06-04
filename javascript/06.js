console.log("hii, This is day 06 (part01) of javascript series");
// <!-- video -01 of DOM -->

// let heading = document.getElementById("myId");
// console.dir(heading); 

// let headings = document.getElementsByClassName("myclass");
// console.dir(headings);

// let paragraph = document.getElementsByTagName("p");
// console.dir(paragraph);

// let elements = document.querySelector("mydiv");
// console.dir(elements); 

// let allelements = document.querySelectorAll("myclass");
// console.dir(allelements); //Outputs: list of all the tags with the class="myclass"

// const element = document.getElementById("myId");
// console.log(element); // Outputs: "Button"

// let div = document.querySelector("div");
// console.log(div.innerText);


//(1)tagName
// let new_id = document.querySelector("h2");
// console.log(new_id);
// console.log(new_id.tagName);

//(2)innerText
// let heading = document.querySelector('h2');
// console.log(heading);
// console.log(heading.innerText= "vegetables");


//(3)innerHTML
// let heading01 = document.querySelector('h1');
// console.log(heading01);
// console.log(heading01.innerHTML= "<i>new heading</i>");


//(4)textContent
// let heading02 = document.querySelector('h3');
// console.log(heading02);
// console.log(heading02.textContent);

// <!-- video -02 of DOM -->

//attributes
// (1)getAttribute(attribute) //to get attrubute value
// let div01 = document.querySelector("p");
// console.log(div01.getAttribute("class"));

// (2)setAttribute(attribute,value) //to set the attribute value
// let div02 = document.querySelector("p");
// console.log(div02.setAttribute("class", "newClass"));


// Style
// let div = document.querySelector("div");
// console.log(div.style.backgroundColor = "green");
// console.log(div.style);


// insert Elements
// let newBtn = document.createElement("button");
// newBtn.innerText = "click me!"
// console.log(newBtn);

// (1)node.append(el) // adds at the end of the node(inside)
// let div = document.querySelector("div");
// console.log(div.append(newBtn));

//(2)node.prepend(el) // adds at the start of the node(inside)
// let div = document.querySelector("div");
// console.log(div.prepend(newBtn));

// (3)node.before(el) // adds before the node(outside)
// let div = document.querySelector("div");
// console.log(div.before(newBtn));

// (4)node.after(el) // adds after the node(outside)
// let div = document.querySelector("div");
// console.log(div.after(newBtn));


//Delete Element // to delete any element
// let para = document.querySelector("p");
// para.remove();