const minInput = document.getElementById("min");
const maxInput = document.getElementById("max");
const button = document.querySelector(".btn");
const resultat = document.querySelector(".resultat");
let tallListe = [];

button.onclick = () => {
  const min = parseInt(minInput.value);
  const max = parseInt(maxInput.value);
  if (!isNaN(min) && !isNaN(max) && min < max) {
    const tilfeldigTall = Math.floor(Math.random() * (max - min + 1)) + min;
    tallListe.push(tilfeldigTall);
    resultat.textContent = `Tilfeldig tall: ${tilfeldigTall}`;
    console.log(tallListe);
  } else {
    resultat.textContent = "Vennligst oppgi et gyldig tallområde.";
  }
};
