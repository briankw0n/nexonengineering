window.addEventListener("scroll", function() {
  var navbar = document.querySelector(".navbar");
  var logo = document.querySelector(".hide1");
  if (window.scrollY > 200) {
      navbar.classList.add("scrolled");
      logo.classList.add("scrolled");
  } else {
      navbar.classList.remove("scrolled");
      logo.classList.remove("scrolled");
  }
});