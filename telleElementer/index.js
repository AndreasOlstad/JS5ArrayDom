const input = document.querySelector('.input');
const button = document.querySelector('.btn');
const resultat = document.querySelector('.resultat');

button.onclick = () => {
    const items = input.value.split(',').map(item => item.trim()).filter(item => item);
    const count = {};
    
    items.forEach(item => {
        count[item] = (count[item] || 0) + 1;
    });

    resultat.innerHTML = Object.entries(count)
        .map(([item, num]) => `<p>${item}: ${num}</p>`)
        .join('');
};
