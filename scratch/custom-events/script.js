function highlight(elem, callback) {
    const bgColor = 'yellow';
    elem.style.backgroundColor = bgColor;

    if(callback && typeof callback === 'function') {
        callback(elem);
    }
    
    const event = new CustomEvent('highlight', {
        detail: {backgroundColor: 'yellow'}
    });
};

const container = document.createElement('div');
const body = document.querySelector('body')
body.appendChild(container);

const list = document.createElement('ul');
const listItem = document.createElement('li');
const text = document.createElement('span');
text.textContent = 'hi';
listItem.appendChild(text);
list.appendChild(listItem);
container.appendChild(list);

function addBorder(elem) {
    elem.style.border = "solid 1px red";
}

highlight(container, addBorder);



