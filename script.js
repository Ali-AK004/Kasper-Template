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

// hero image slider
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

prevBtn.addEventListener("click", () => goToSlide(currentIndex - 1));
nextBtn.addEventListener("click", () => goToSlide(currentIndex + 1));

bullets.forEach((bullet, index) => {
  bullet.addEventListener("click", () => goToSlide(index));
});

showSlide(currentIndex);

// message Characters counter
const messageContainer = document.querySelector(".contact-form textarea");
const countSpan = document.querySelector(".contact-form .count-number");

messageContainer.addEventListener("input", function () {
  let counter = messageContainer.value.length;
  countSpan.textContent = counter;
});

// portfolio pagination
const AllSets = Array.from(
  document.querySelectorAll(".port-content .sections li")
);
const portfolioImgs = Array.from(
  document.querySelectorAll(".port-content  .images .box img")
);
const portfolioBox = document.querySelectorAll(".port-content .images .box");
let currentSet = 1;

AllSets.forEach(
  (set) =>
    (set.onclick = () => {
      currentSet = parseInt(set.getAttribute("data-index"));
      AllSets.forEach((set) => set.classList.remove("activeSet"));
      set.classList.add("activeSet");
    })
);

// testimonial section
const navigators = document.querySelectorAll(".testimonials .bullets li");
const slideRow = document.querySelector(".testimonials .testimonial-row");
const slideCols = document.querySelectorAll(".testimonials .testimonial-col");

// offsetWidth = 560px | parseInt(getComputedStyle(slideRow).gap) (gap) = 50px
const slideWidth =
  slideCols[0].offsetWidth + parseInt(getComputedStyle(slideRow).gap); // 610

navigators.forEach((navigator, index) => {
  navigator.addEventListener("click", function () {
    slideRow.scrollTo({
      left: slideWidth * index,
      behavior: "smooth",
    });
    navigators.forEach((btn) => btn.classList.remove("active"));
    navigator.classList.add("active");
  });
});

// footer date
const showDate = document.querySelector(".date");
const date = new Date().getFullYear();
showDate.append(date);
