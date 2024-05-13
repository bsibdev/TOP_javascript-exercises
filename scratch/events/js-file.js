const myButton = document.querySelector("#btn");
myButton.onclick = () => alert("hello world - method 2");

const myButton2 = document.querySelector("#btn2");
myButton2.addEventListener("click", () => {
    alert("Hellow World - method 3");
    alert("can do multiple alerts");
})
const myButton3 = document.querySelector("#btn3");

function alertFunction() {
    alert("Hello World - helper function");
}

myButton3.addEventListener("click", () => {
    alertFunction();
})
const myButton4 = document.querySelector("#btn4")
myButton4.addEventListener("click", function(e){
    console.log(e.target.style.background = "blue");
});

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    })
})