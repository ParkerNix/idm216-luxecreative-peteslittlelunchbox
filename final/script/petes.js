const tipOne = document.getElementById('tip1');
const tipTwo = document.getElementById('tip2');
const tipThree = document.getElementById('tip3');

let subtotaldoc = document.getElementById("subtotal");
let tipdoc = document.getElementById("tip");
let totaldoc = document.getElementById("total");

let subtotalstring = subtotal.toFixed(2);
subtotaldoc.innerHTML = subtotalstring;

let total = 0 + subtotal;
let totalstring = total.toFixed(2);
totaldoc.innerHTML = totalstring;

let tip = 0;
let tipstring = tip.toFixed(2);

function turnOn(tipon) {
    if (tipon.className == "tip") {
        tipOne.className = 'tip';
        tipTwo.className = 'tip';
        tipThree.className = 'tip';
        tipon.className = 'tipClicked';
      } else {
        tipon.className = 'tip';
      }

      if (tipOne.className == 'tipClicked') {
        let tip = subtotal * 0.10;
        let newtotal = subtotal * 1.10;
        let tipstring = tip.toFixed(2);
        let totalstring = newtotal.toFixed(2);
        tipdoc.innerHTML = tipstring;
        totaldoc.innerHTML = totalstring;
      } else if (tipTwo.className == 'tipClicked') {
        let tip = subtotal * 0.15;
        let newtotal = subtotal * 1.15;
        let tipstring = tip.toFixed(2);
        let totalstring = newtotal.toFixed(2);
        tipdoc.innerHTML = tipstring;
        totaldoc.innerHTML = totalstring;
      } else if (tipThree.className == 'tipClicked') {
        let tip = subtotal * 0.20;
        let newtotal = subtotal * 1.20;
        let tipstring = tip.toFixed(2);
        let totalstring = newtotal.toFixed(2);
        tipdoc.innerHTML = tipstring;
        totaldoc.innerHTML = totalstring;
      } else {
        let tip = 0;
        let newtotal = subtotal;
        let tipstring = tip.toFixed(2);
        let totalstring = newtotal.toFixed(2);
        tipdoc.innerHTML = tipstring;
        totaldoc.innerHTML = totalstring;
      }
}

tipOne.addEventListener('click', function () {turnOn(tipOne);});
tipTwo.addEventListener('click', function () {turnOn(tipTwo);});
tipThree.addEventListener('click', function () {turnOn(tipThree);});


let checkoutbutton = document.getElementById("cobutton");

function prepareforliftoff() {
  console.log('stop');
    let carttext = cart.innerHTML;
    let moneyarray = [subtotaldoc.innerHTML, tipdoc.innerHTML, totaldoc.innerHTML];
    let moneystring = moneyarray.toString();
    localStorage.setItem("moneystring", moneystring);
    localStorage.setItem("carttext", carttext);
    if (pickuptimecart !== "") {
      localStorage.setItem("pickuptime", pickuptimecart);
      }
}

checkoutbutton.addEventListener("mouseup", function() {prepareforliftoff()}, false);





