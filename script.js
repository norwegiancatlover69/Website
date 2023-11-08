//TopNav
if (sessionStorage.getItem("topNavSave")) {
    document.getElementById("topnav").innerHTML = sessionStorage.getItem("topNavSave");
}
const topNav1Content = document.getElementById("topnav1").innerHTML;
sessionStorage.setItem("topNavSave", topNav1Content);

//Footer
if (sessionStorage.getItem("footerSave")) {
    document.getElementById("footer").innerHTML = sessionStorage.getItem("footerSave");
}
const footer1Content = document.getElementById("footer1").innerHTML;
sessionStorage.setItem("footerSave", topNav1Content);
