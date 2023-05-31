const sideNav = document.querySelector(".nav__btn");

sideNav.addEventListener("click", (e) => {
  e.target.style.opacity = "0";
  e.target.style.transition = "0s";
  const nav = document.querySelector(".side-nav");

  nav.style.width = "65%";
});

const closeNav = document.querySelector(".side-nav__btn");

closeNav.addEventListener("click", () => {
  sideNav.style.opacity = "1";
  sideNav.style.transition = ".7s ease-in";
  const nav = document.querySelector(".side-nav");
  nav.style.width = "0%";
});
