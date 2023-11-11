//Title names to identify current file
const tag = document.getElementsByTagName("title");
const title = tag[0].innerHTML;

//TOPNAV
//Paste from save
if (sessionStorage.getItem("topNavSave") && title != "Homepage") {
    document.getElementById("topnav").innerHTML = sessionStorage.getItem("topNavSave");
}
//Copy & save
else {
    const topNav1Content = document.getElementById("topnav1").innerHTML;
    sessionStorage.setItem("topNavSave", topNav1Content);
}

//FOOTER
//Paste from save
if (sessionStorage.getItem("footerSave") && title != "Homepage") {
    document.getElementById("footer").innerHTML = sessionStorage.getItem("footerSave");
}
//Copy & save
else {
    const footer1Content = document.getElementById("footer1").innerHTML;
    sessionStorage.setItem("footerSave", footer1Content);
}
//Cart needs extra CSS
if (title == "Cart") {
    const cart = document.getElementById("footer");
    cart.setAttribute("id", "footer-cart");
}
//Every pages with scroll need extra CSS
if (title == "Menu" || title == "Locations" || title == "Work At Frydays" || title == "About Us" || title == "Application Form") {
    const file = document.getElementById("footer");
    file.setAttribute("id", "scrollFooters");
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeDot", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " activeDot";
} 
