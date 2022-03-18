// Check browser support

localStorage.removeItem('newitem');
if (localStorage.length < 1) {
    window.location.href = "emptycart.html";
}

localStorage.removeItem("carttext");
localStorage.removeItem("moneystring");

let pickuptimecart = "";
if (localStorage.getItem("pickuptime")) {
    pickuptimecart += localStorage.getItem("pickuptime");
    localStorage.removeItem("pickuptime");
    }


let toppingsArray = document.getElementsByClassName('toppings');
let titlearray = document.getElementsByClassName('title');
let itemimgarray = document.getElementsByClassName('itemimg');
let itempricearray = document.getElementsByClassName('itemprice');
let removebuttonarray = document.getElementsByClassName('remove');
let editbuttonarray = document.getElementsByClassName('edit');
let cart = document.getElementById("cart");

let subtotal = 0.0;

for (let i=0; i<localStorage.length; i++) {
cart.innerHTML += '<div class="cartitem"><div class="itemimg"><img src="images/cart_cheesestake_2x.png" alt="cheesestake"></div><div class="itemdetails"><div class="itemdesc"><div class="desctext"><h3 class="title">Cheesesteak</h3><p class="toppings">Hoagie, Salt, Pepper, Ketchup</p></div><h3 style="margin: 0;" class="itemprice">$6.00</h3></div><div class="itembuttons"><button class="edit">EDIT</button><button class="remove">REMOVE</button><div class="custom-select"><select name="qty"><option value="0">1</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option></select></div></div></div></div>';
this["key" + i] = localStorage.key(i);
this["allitemstring" + i] = localStorage.getItem(this["key" + i]);
this["allitem" + i] = this["allitemstring" + i].split(',');
console.log(this["allitem" + i]);
console.log(this["allitem" + i][3]);
this["iteminfo" + i] = [this["allitem" + i][0], this["allitem" + i][3], this["allitem" + i][4], this["allitem" + i][5]];
this["checktopping" + i] = this["allitem" + i][6];
this["price" + i] = parseFloat(this["iteminfo" + i][1]);
subtotal += this["price" + i];
}

console.log(subtotal);
for (let i = 0; i < toppingsArray.length; i++) {
    let itemNum = toppingsArray[i];
    let titlenum = titlearray[i];
    let itemimgnum = itemimgarray[i];
    let itempricenum = itempricearray[i];

    if (typeof(Storage) !== "undefined") {
        // Retrieve
        itemNum.innerHTML = this["checktopping" + i];
        titlenum.innerHTML = this["iteminfo" + i][2];
        itemimgnum.innerHTML = this["iteminfo" + i][0];
        itempricenum.innerHTML = this["iteminfo" + i][1];
        }
}

function removeitem(removeitemnum) {
    let badkey = localStorage.key(removeitemnum);
    console.log(badkey);
    localStorage.removeItem(badkey);
    if (pickuptimecart !== "") {
    localStorage.setItem("pickuptime", pickuptimecart);
    }
    location.reload();
}

for (let i=0; i<removebuttonarray.length; i++) {
    let thisremovebutton = removebuttonarray[i];
    thisremovebutton.addEventListener("mouseup", function() {removeitem(i);}, false);
}

function makenewitem(edititemnum) {
    let editarray = [this["allitem" + i][2], this["allitem" + i][3], this["allitem" + i][4], this["allitem" + i][5], "", this["key" + edititemnum]];
    let iteminfostring = editarray.toString();
    console.log(iteminfostring);
    localStorage.setItem("newitem", iteminfostring);
    if (pickuptimecart !== "") {
        localStorage.setItem("pickuptime", pickuptimecart);
        }
    window.location.href= "edit_item.html";
}

for (let i=0; i<editbuttonarray.length; i++) {
    let thiseditbutton = editbuttonarray[i];
    thiseditbutton.addEventListener("mouseup", function() {makenewitem(i);}, false);
}

if (pickuptimecart !== "") {
    localStorage.setItem("pickuptime", pickuptimecart);
    }