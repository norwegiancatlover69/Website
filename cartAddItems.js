//Lists for price checking
const burgers = ["Classic Burger", "Juicy Double", "Baconator", "Classic Sandwich", "Omelette Sandwich", "Egg Sandwich","Avocado Crunch", "Spicy Salsa", "Classic Chicken"];
const fries = ["Potato Fries", "Sweet Potato Fries"];
const drinks = ["Coca-Cola", "Fanta", "Sprite"];
let sum = 0;

for (let i = 0; i < Object(sessionStorage).length; i++) {
    //Creates new element in list
    const htmlList = '<li class = "item"><span class="itemName"></span><input class ="itemNumber" type="number" min = "0"><input class="itemRemove" type = "button" value="REMOVE" onclick="removeItem(event)"><span class="itemValue"></span></li>'
    document.getElementById("foodItems").insertAdjacentHTML("beforeend", htmlList);
    //Update unique parts of element
    document.getElementsByClassName("itemName")[i].innerHTML = Object.keys(sessionStorage)[i];
    document.getElementsByClassName("itemNumber")[i].setAttribute("value", Object.values(sessionStorage)[i]);
    document.getElementsByClassName("item")[i].setAttribute("id", Object.keys(sessionStorage)[i]);
    document.getElementsByClassName("itemNumber")[i].addEventListener('input', function (event) {
        //Update sessionstorage on value change
        sessionStorage.setItem(event.target.parentElement.id, event.target.parentElement.children[1].value);
        //Check price on value change
        if (burgers.includes(event.target.parentElement.id)) {
            event.target.parentElement.children[3].innerHTML = "$" + 15*parseInt(event.target.parentElement.children[1].value);
        }
        else if (fries.includes(event.target.parentElement.id)) {
            event.target.parentElement.children[3].innerHTML = "$" + 6*parseInt(event.target.parentElement.children[1].value);
        }
        else {
            event.target.parentElement.children[3].innerHTML = "$" + 5*parseInt(event.target.parentElement.children[1].value);
        }
        calcSum();
        studentDiscount();
    });
    //Check price on page load
    if (burgers.includes(Object.keys(sessionStorage)[i])) {
        document.getElementsByClassName("itemValue")[i].innerHTML = "$" + 15*parseInt(Object.values(sessionStorage)[i]);
    }
    else if (fries.includes(Object.keys(sessionStorage)[i])) {
        document.getElementsByClassName("itemValue")[i].innerHTML = "$" + 6*parseInt(Object.values(sessionStorage)[i]);
    }
    else {
        document.getElementsByClassName("itemValue")[i].innerHTML = "$" + 5*parseInt(Object.values(sessionStorage)[i]);
    }
}

//Calculate sum
calcSum();
function calcSum() {
    sum = 0;
    for (let i = 0; i < Object(sessionStorage).length; i++) {
        sum += parseInt(document.getElementsByClassName("itemValue")[i].innerHTML.replace("$",""));
    }
    document.getElementById("total").innerHTML = "Total: $" +  sum.toFixed(2);
}
//Add 30% discount on sum
function studentDiscount() {
    let studSum;
    if (document.getElementById("isStudent").checked) {
        studSum = (sum*0.7).toFixed(2);
        document.getElementById("total").innerHTML = "Total: $" +  studSum;
    }
    else {
        calcSum();
    }
}
//Remove item from html-list and sessionstorage
function removeItem(event) {
    sessionStorage.removeItem(event.target.parentElement.id);
    event.target.parentElement.remove();
    calcSum();
    studentDiscount();
}

function displayPickup(){
    document.getElementById('formContainer1').style.display = 'none';
    document.getElementById('formContainer2').style.display = 'block';

}

function displayNow(){
    document.getElementById('formContainer1').style.display = 'block';
    document.getElementById('formContainer2').style.display = 'none';
    
}
