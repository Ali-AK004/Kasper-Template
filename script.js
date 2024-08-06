// navigation logic
// navigation search
const searchIcon = document.querySelector("nav .form");
const searchInput = document.querySelector("nav > form input");
const openSearchInput = () => {
  searchInput.classList.toggle("show");
};
searchIcon.addEventListener("click", openSearchInput);

// openNav menu when clicked on menuBtn
const navIcon = document.querySelector(".toggle-menu");
const navContainer = document.querySelector("nav");
navIcon.addEventListener("click", function () {
  navContainer.classList.toggle("openNav");
});

// navLinks
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navContainer.classList.remove("openNav");

    // removes the class active from all links
    navLinks.forEach((link) => link.classList.remove("active"));

    // adds the class active to the clicked link
    link.classList.add("active");
  });
});

// image slider
const imgs = document.querySelectorAll(".landing-imgs img");
const bullets = document.querySelectorAll(".landing .bullets li");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let totaleSlides = imgs.length;
let currentIndex = 0;

const showSlide = (index) => {
  imgs.forEach((img) => img.classList.remove("activeImg"));
  bullets.forEach((bullet) => bullet.classList.remove("active"));

  imgs[index].classList.add("activeImg");
  bullets[index].classList.add("active");
};

const goToSlide = (index) => {
  currentIndex = (totaleSlides + index) % totaleSlides;
  showSlide(currentIndex);
};

const nextSlide = () => {
  goToSlide(currentIndex + 1);
};

const prevSlide = () => {
  goToSlide(currentIndex - 1);
};

showSlide(currentIndex);

// message Characters counter
const messageContainer = document.querySelector(".contact-form textarea");
const countSpan = document.querySelector(".contact-form .count-number");

messageContainer.addEventListener("input", function () {
  let counter = messageContainer.value.length;
  countSpan.textContent = counter;
});

// footer date
const showDate = document.querySelector(".date");
const date = new Date().getFullYear();
showDate.append(date);
