const input = document.querySelector('.input');
const button = document.querySelector('.btn');
const boks = document.querySelector('.boks');
let fruitList = [];

button.onclick = () => {
    if (input.value.trim()) {
        fruitList.push(input.value);
        input.value = '';
        renderList();
    }
};

function renderList() {
    let ul = document.querySelector('ul');
    if (!ul) {
        ul = document.createElement('ul');
        boks.appendChild(ul);
    }
    ul.innerHTML = fruitList.map((fruit, i) => 
        `<li>${fruit} <button onclick="removeFruit(${i})">Slett</button></li>`).join('');
}

function removeFruit(index) {
    fruitList.splice(index, 1);
    renderList();
}
