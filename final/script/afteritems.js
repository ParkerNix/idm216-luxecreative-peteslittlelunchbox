let pickuptimedoc = document.getElementById("pickuptime");
let cart = document.getElementById("cart");
let totaldoc = document.getElementById("total");
let subtotaldoc = document.getElementById("subtotal");
let tipdoc = document.getElementById("tip");
let moneystring = localStorage.getItem("moneystring");
let carttext = localStorage.getItem("carttext");
let moneyarray = moneystring.split(",");

if (localStorage.getItem("pickuptime")) {
    let pickuptime = localStorage.getItem("pickuptime");
    console.log(pickuptime);
    pickuptimedoc.innerHTML = pickuptime;
    }

let subtotalstring = moneyarray[0];
let tipstring = moneyarray[1];
let totalstring = moneyarray[2];

cart.innerHTML = carttext;
totaldoc.innerHTML = totalstring;
subtotaldoc.innerHTML = subtotalstring;
tipdoc.innerHTML = tipstring;

let itembuttonsdoc = document.getElementsByClassName("itembuttons");

for (i=0; i<itembuttonsdoc.length; i++) {
    thisitembutton = itembuttonsdoc[i];
    thisitembutton.innerHTML = '<p class="qty2">1</p>';
    thisitembutton.classList.add("detailsqty");
}

let orderagain = document.getElementById("orderagain");

function clearthemind() {
    localStorage.clear();
}

orderagain.addEventListener('mouseup', function() {clearthemind()});


