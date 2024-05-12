const container = document.querySelector("body");

const redParagraph = document.createElement("p");
redParagraph.setAttribute("style","color: red");
redParagraph.textContent = "Hey I'm red!";
container.appendChild(redParagraph);

const blueHeaderText = document.createElement("h3");
blueHeaderText.setAttribute("style","color: blue")
blueHeaderText.textContent = "I'm a blue h3!";
container.appendChild(blueHeaderText);

const newDiv = document.createElement("div");

const divh1 = document.createElement("h1");
newDiv.appendChild(divh1);
divh1.textContent = "I'm in a div";

const divP = document.createElement("p");
newDiv.appendChild(divP);
divP.textContent = "ME TOO!";


newDiv.setAttribute("style","background-color:pink")
newDiv.setAttribute("style","border-style: solid; background-color:pink");
body.appendChild(newDiv);

const blueText = document.createElement("h3",)
//const h3 = document.

