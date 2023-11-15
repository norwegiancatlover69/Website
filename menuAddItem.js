let counter = Object.keys(sessionStorage).length; 

function checkEmpty() {
    if (counter == 0) {
        alert("No items in cart");
    }
    else {
        document.getElementById("cartButton").setAttribute("href", "cart.html");
    }
}
function addToCartClassicBurger() {
    if (sessionStorage.getItem("Classic Burger")){
        let itemCounter = parseInt(sessionStorage.getItem("Classic Burger"));
        sessionStorage.setItem("Classic Burger", (itemCounter+=1).toString());
    }
    else{
        sessionStorage.setItem("Classic Burger", 1);
    }
    counter += 1; 
    document.getElementById("cartItems").innerHTML = counter;
}
function addToCartJuicyDouble() {
    if (sessionStorage.getItem("Juicy Double")){
        let itemCounter = parseInt(sessionStorage.getItem("Juicy Double"));
        sessionStorage.setItem("Juicy Double", (itemCounter+=1).toString());
    }
    else{
        sessionStorage.setItem("Juicy Double", 1);
    }
    counter += 1; 
    document.getElementById("cartItems").innerHTML = counter;
}
function addToCartBaconator() {
    if (sessionStorage.getItem("Baconator")){
        let itemCounter = parseInt(sessionStorage.getItem("Baconator"));
        sessionStorage.setItem("Baconator", (itemCounter+=1).toString());
    }
    else{
        sessionStorage.setItem("Baconator", 1);
    }
    counter += 1; 
    document.getElementById("cartItems").innerHTML = counter;
}

function addToCartClassicSand() {
    if (sessionStorage.getItem("Classic Sandwich")){
        let itemCounter = parseInt(sessionStorage.getItem("Classic Sandwich"));
        sessionStorage.setItem("Classic Sandwich", (itemCounter+=1).toString());
    }
    else{
        sessionStorage.setItem("Classic Sandwich", 1);
    }
    counter += 1; 
    document.getElementById("cartItems").innerHTML = counter;
}
function addToCartOmeletteSand() {
    if (sessionStorage.getItem("Omelette Sandwich")){
        let itemCounter = parseInt(sessionStorage.getItem("Omelette Sandwich"));
        sessionStorage.setItem("Omelette Sandwich", (itemCounter+=1).toString());
    }
    else{
        sessionStorage.setItem("Omelette Sandwich", 1);
    }
    counter += 1; 
    document.getElementById("cartItems").innerHTML = counter;
}
function addToCartEggSand() {
    if (sessionStorage.getItem("Egg Sandwich")){
        let itemCounter = parseInt(sessionStorage.getItem("Egg Sandwich"));
        sessionStorage.setItem("Egg Sandwich", (itemCounter+=1).toString());
    }
    else{
        sessionStorage.setItem("Egg Sandwich", 1);
    }
    counter += 1; 
    document.getElementById("cartItems").innerHTML = counter;
}



function addToCartAvocadoCrunch() {
    if (sessionStorage.getItem("Avocado Crunch")){
        let itemCounter = parseInt(sessionStorage.getItem("Avocado Crunch"));
        sessionStorage.setItem("Avocado Crunch", (itemCounter+=1).toString());
    }
    else{
        sessionStorage.setItem("Avocado Crunch", 1);
    }
    counter += 1; 
    document.getElementById("cartItems").innerHTML = counter;
}
function addToCartAvocadoSpicySalsa() {
    if (sessionStorage.getItem("Spicy Salsa")){
        let itemCounter = parseInt(sessionStorage.getItem("Spicy Salsa"));
        sessionStorage.setItem("Spicy Salsa", (itemCounter+=1).toString());
    }
    else{
        sessionStorage.setItem("Spicy Salsa", 1);
    }
    counter += 1; 
    document.getElementById("cartItems").innerHTML = counter;
}
function addToCartAvocadoClassicChicken() {
    if (sessionStorage.getItem("Classic Chicken")){
        let itemCounter = parseInt(sessionStorage.getItem("Classic Chicken"));
        sessionStorage.setItem("Classic Chicken", (itemCounter+=1).toString());
    }
    else{
        sessionStorage.setItem("Classic Chicken", 1);
    }
    counter += 1; 
    document.getElementById("cartItems").innerHTML = counter;
}


function addToCartPotato() {
    if (sessionStorage.getItem("Potato Fries")){
        let itemCounter = parseInt(sessionStorage.getItem("Potato Fries"));
        sessionStorage.setItem("Potato Fries", (itemCounter+=1).toString());
    }
    else{
        sessionStorage.setItem("Potato Fries", 1);
    }
    counter += 1; 
    document.getElementById("cartItems").innerHTML = counter;
}
function addToCartSweetPotato() {
    if (sessionStorage.getItem("Sweet Potato Fries")){
        let itemCounter = parseInt(sessionStorage.getItem("Sweet Potato Fries"));
        sessionStorage.setItem("Sweet Potato Fries", (itemCounter+=1).toString());
    }
    else{
        sessionStorage.setItem("Sweet Potato Fries", 1);
    }
    counter += 1; 
    document.getElementById("cartItems").innerHTML = counter;
}


function addToCartCola() {
    if (sessionStorage.getItem("Coca-Cola")){
        let itemCounter = parseInt(sessionStorage.getItem("Coca-Cola"));
        sessionStorage.setItem("Coca-Cola", (itemCounter+=1).toString());
    }
    else{
        sessionStorage.setItem("Coca-Cola", 1);
    }
    counter += 1; 
    document.getElementById("cartItems").innerHTML = counter;
}
function addToCartFanta() {
    if (sessionStorage.getItem("Fanta")){
        let itemCounter = parseInt(sessionStorage.getItem("Fanta"));
        sessionStorage.setItem("Fanta", (itemCounter+=1).toString());
    }
    else{
        sessionStorage.setItem("Fanta", 1);
    }
    counter += 1; 
    document.getElementById("cartItems").innerHTML = counter;
}
function addToCartSprite() {
    if (sessionStorage.getItem("Sprite")){
        let itemCounter = parseInt(sessionStorage.getItem("Sprite"));
        sessionStorage.setItem("Sprite", (itemCounter+=1).toString());
    }
    else{
        sessionStorage.setItem("Sprite", 1);
    }
    counter += 1; 
    document.getElementById("cartItems").innerHTML = counter;
}










