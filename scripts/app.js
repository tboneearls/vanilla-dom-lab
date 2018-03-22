// FIND/RETRIEVE AN ELEMENT

const container = document.querySelector("#container");

console.log(container);

const secondImg = document.querySelector("#second-img");

console.log(secondImg);

// thirdImg doesn't exist
// const thirdImg = document.querySelector("#third-img");

// console.log(thirdImg);

const infoElements = document.querySelectorAll(".info");

console.log(infoElements);

// ALTER AN ELEMENT'S HTML

const firstP = document.querySelector("p");

firstP.innerText = "Jamboree sandwich at the Jambo-ree";

// Make it so the first paragraph's text is parsed as HTML so that you can use tags within it. Use innerHTML instead of innerText.
firstP.innerHTML = "<strong>Put your hands where I can see \'em, so they look like 12pm</strong>";

// CREATE A NEW ELEMENT

const newDiv = document.createElement("div");

console.log(newDiv);

const body = document.body;

body.appendChild(newDiv);

// Append an element to a retrieved element

const firstSection = document.querySelector("section");
const someP = document.createElement("p");
firstSection.appendChild(someP);

// Create an element and give it an attribute before appending it

const newImg = document.createElement("img");
newImg.src = "https://i.ytimg.com/vi/bx7BjjqHf2U/maxresdefault.jpg";

body.appendChild(newImg);

// Create an element and give it an id

const newSection = document.createElement("section");
newSection.id = "butterfly";

body.appendChild(newSection);

// Get a list of the classes given to an element

const firstSectionClasses = firstSection.classList;

// Add a class to an element

firstSectionClasses.add("wdi-remote-gizmo");

console.log(firstSectionClasses);

// See if a class has been added to an element

console.log(firstSectionClasses.contains("wdi-remote-gizmo"));

// Remove a class from an element

firstSectionClasses.remove("wdi-remote-gizmo");
console.log(firstSectionClasses);
