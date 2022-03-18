let moneystring = localStorage.getItem("moneystring");
let moneyarray = moneystring.split(",");
console.log(moneyarray);

let totalinfodoc = document.getElementById("totalinfo");
totalinfodoc.innerHTML = moneyarray[2];

if (localStorage.getItem("pickuptime")) {
document.getElementById("pickuptime").innerHTML = localStorage.getItem("pickuptime");
}