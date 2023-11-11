//COPY TOPNAV AND FOOTER
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

//TOPNAV MEDIA QUERIES
function changeImg(check) {
    if (check.matches) { 
        console.log(document.getElementById("logo"));
        document.getElementById("logo").setAttribute("src", "img/frydaysNew.png");
    }
    else {
        console.log(document.getElementById("logo"));
        document.getElementById("logo").setAttribute("src", "img/frydays.png");
    }
}
  
var check = window.matchMedia("(max-width: 1100px)");
changeImg(check);
check.addListener(changeImg);