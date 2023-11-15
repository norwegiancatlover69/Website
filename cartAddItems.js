const burgers = ["Classic Burger", "Juicy Double", "Baconator", "Classic Sandwich", "Omelette Sandwich", "Egg Sandwich","Avocado Crunch", "Spicy Salsa", "Classic Chicken"];
const fries = ["Potato Fries", "Sweet Potato Fries"];
const drinks = ["Coca-Cola", "Fanta", "Sprite"];

for (let i = 0; i < Object(sessionStorage).length; i++) {
    const htmlList = '<li class = "item"><span class="itemName"></span><input class ="itemNumber" type="number" min = "0"><input type = "button" value="REMOVE" onclick="removeCartItem(this)"><span class="itemValue"></span></li>'
    document.getElementById("foodItems").insertAdjacentHTML("beforeend", htmlList);
    document.getElementsByClassName("itemName")[i].innerHTML = Object.keys(sessionStorage)[i];
    document.getElementsByClassName("itemNumber")[i].setAttribute("value", Object.values(sessionStorage)[i]);
    if (burgers.includes(Object.keys(sessionStorage)[i])) {
        document.getElementsByClassName("itemValue")[i].innerHTML = "$15";
    }
    else if (fries.includes(Object.keys(sessionStorage)[i])) {
        document.getElementsByClassName("itemValue")[i].innerHTML = "$6";
    }
    else {
        document.getElementsByClassName("itemValue")[i].innerHTML = "$5";
    }
}

// Removing item in cart

function removeCartItem(a) {
    let specificCartItem = a.previousElementSibling.previousElementSibling.innerHTML;
    sessionStorage.removeItem(specificCartItem);
    a.parentNode.remove();
}


