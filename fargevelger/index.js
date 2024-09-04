const input = document.querySelector('.input');
const button = document.querySelector('.btn');
const fargerDiv = document.querySelector('.farger');

button.onclick = () => {
    fargerDiv.innerHTML = '';  
    const farger = input.value.split(',').map(farge => farge.trim()).filter(farge => farge);

    farger.forEach(farge => {
        const fargeKnapp = document.createElement('button');
        fargeKnapp.textContent = farge;

        const testDiv = document.createElement('div');
        testDiv.style.backgroundColor = farge.toLowerCase();
        
        if (testDiv.style.backgroundColor) {
            fargeKnapp.style.backgroundColor = farge.toLowerCase();
            fargeKnapp.onclick = () => {
                document.body.style.backgroundColor = farge.toLowerCase();
            };
            fargerDiv.appendChild(fargeKnapp);
        } else {
            console.warn(`"${farge}" is not a recognized CSS color.`);
        }
    });
};
