const button = document.querySelector(".btn");
const bilder = document.querySelectorAll(".bilde-container img");

button.onclick = () => {
  bilder.forEach((bilde) => {
    bilde.classList.remove("active");
  });

  const tilfeldigIndex = Math.floor(Math.random() * bilder.length);
  bilder[tilfeldigIndex].classList.add("active");
};
