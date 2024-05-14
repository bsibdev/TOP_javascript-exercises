const menu = document.querySelector("#menu");
const home = document.querySelector("#home");
const dashboard = document.querySelector("#dashboard");
const report = document.querySelector("#report");

/*listeners for an event can be added to parent elements where the input will be detected once it bubbles up to the parent*/
/*this uses less memory and results in better performance than having multiple event listeners for child elements, and also requires less time to setup event handlers on a page*/
document.addEventListener("click", (event) => {
    let target = event.target;
    switch(target.id) {
        case 'home' :
            console.log('Home clicked');
            break;
        case 'dashboard' :
            console.log('Dashboad clicked');
            break;
        case 'report' :
            console.log('Report clicked');
            break;
    }
})
