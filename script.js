const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const img = document.querySelector(".banner-img");
const p = document.querySelector(".tagline");
const dots = document.querySelector(".dots");
let i = 0;

for (let index = 0; index < slides.length; index++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (index === 0) dot.classList.add("dot_selected");
  dots.appendChild(dot);
}

function changeSlide() {
  img.src = "./images/slideshow/" + slides[i].image;
  p.innerHTML = slides[i].tagLine;
  let dotAll = document.querySelectorAll(".dot");
  for (let index = 0; index < dotAll.length; index++) {
    dotAll[index].classList.remove("dot_selected");
  }
  dotAll[i].classList.add("dot_selected");
}

arrowLeft.addEventListener("click", () => {
  i--;
  if (i === -1) i = slides.length - 1;
  changeSlide();
});

arrowRight.addEventListener("click", () => {
  i++;
  if (i === slides.length) i = 0;
  changeSlide();
});
