/*const topNav = document.getElementById("topnav1").innerHTML; 
sessionStorage.setItem("topNavSave", topNav);
document.getElementById("topnav").innerHTML=sessionStorage.getItem("topNavSave");*/
if (sessionStorage.getItem("topNavSave")) {
    document.getElementById("topnav").innerHTML = sessionStorage.getItem("topNavSave");
}
const topNav1Content = document.getElementById("topnav1").innerHTML;
sessionStorage.setItem("topNavSave", topNav1Content);