const testBtn = document.querySelector("#test-btn");
testBtn.addEventListener("click",() => {
    alert('Button pressed');
    console.log("button pressed");
})

const clickEvent = new MouseEvent('click', {
    bubbles: true,
    canceable: true,
    clientX: 150,
    clientY: 150
});
testBtn.dispatchEvent(clickEvent);




