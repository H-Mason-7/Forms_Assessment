const ul = document.querySelector('ul');
const textField = document.querySelector('#textField');
const form = document.querySelector('form');

const list = [];

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const text = textField.value;
    list.push(text);
    const template = list.map(listItem => `
        <li>
            <p>${listItem}</p>
        </li>
`);
ul.innerHTML = template.join('');
});