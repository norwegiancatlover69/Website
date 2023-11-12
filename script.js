//Title names to identify current file
const tag = document.getElementsByTagName("title");
const title = tag[0].innerHTML;

//TOPNAV
document.getElementById("topnav").innerHTML = '<span class="closebtn" id="closebtn" onclick="closeNav()">&times;</span><a class="logoLink" id="logoLink" onclick="closeNav()" href="homepage.html"><img id="logo" class="logo" src="img/frydays.png" alt="Frydays logo"></a><a id="l1" href="menu.html">Order Now</a><a id="l2" href="locations.html">Locations</a><a id="l3" href="work.html">Work at<br>Frydays</a><a id="l4" href="contact.html">Contact Us</a><a id="l5" href="about.html">About Us</a><a id="l6" href="studDiscount.html">Student<br>Discount</a>';

//FOOTER
document.getElementById("footer").innerHTML = '<p class="copyright">Copyright © Frydays.com - All Rights Reserved</p><div class="social_media"><p>Follow us on social media!</p><div><button id="instagram"><img class="social_media_buttons" src="img/instagram-icon.png" alt="Instagram"></button><button id="twitter"><img class="social_media_buttons" src="img/twitter-icon.png" alt="Twitter"></button><button id="tiktok"><img class="social_media_buttons" src="img/tiktok-icon.png" alt="Tiktok"></button></div></div>';

//Cart needs extra CSS
if (title == "Cart") {
    const cart = document.getElementById("footer");
    cart.setAttribute("id", "footer-cart");
}

//TOPNAV MEDIA QUERIES
function changeImg(check) {
    if (check.matches) { 
        document.getElementById("logo").setAttribute("src", "img/frydaysNew.png");
    }
    else {
        document.getElementById("logo").setAttribute("src", "img/frydays.png");
    }
}
var check = window.matchMedia("(max-width: 1100px)");
changeImg(check);
check.addListener(changeImg);

function changeNav(check2) {
    if (check2.matches) {
        document.getElementById("topnav").setAttribute("id", "leftnav");
        document.getElementById("logo").setAttribute("src", "img/frydays.png");
        document.getElementById("leftnavIcon").style.display="block";
        closeNav();
    }
    else if (document.getElementById("leftnav")) {
        openNav();
        document.getElementById("leftnav").setAttribute("id", "topnav");
        document.getElementById("logo").setAttribute("src", "img/frydaysNew.png");
        document.getElementById("closebtn").style.display="none";
    }
}
var check2 = window.matchMedia("(max-width: 700px)");
changeNav(check2);
check2.addListener(changeNav);

function openNav() {
    document.getElementById("leftnav").style.width = "100vw";
    document.getElementById("leftnavIcon").style.display = "none";
    document.getElementById("logo").style.display="block";
    document.getElementById("closebtn").style.display="block";
    document.getElementById("l1").style.display= "block";
    document.getElementById("l2").style.display= "block";
    document.getElementById("l3").style.display= "block";
    document.getElementById("l4").style.display= "block";
    document.getElementById("l5").style.display= "block";
    document.getElementById("l6").style.display= "block";
    document.getElementById("logoLink").style.display= "block";
}
function closeNav() {
    document.getElementById("leftnav").style.width = "0";
    document.getElementById("leftnavIcon").style.display = "block";
    document.getElementById("logo").style.display="none";
    document.getElementById("closebtn").style.display="none";
    document.getElementById("l1").style.display= "none";
    document.getElementById("l2").style.display= "none";
    document.getElementById("l3").style.display= "none";
    document.getElementById("l4").style.display= "none";
    document.getElementById("l5").style.display= "none";
    document.getElementById("l6").style.display= "none";
    document.getElementById("logoLink").style.display= "none";
}
// Slideshow CSS
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

// Updating counter on total menu items
counter = 0; 
function itemAmount() {
    counter += 1; 
    document.getElementById("cartItems").innerHTML = counter; 
}
