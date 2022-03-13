// Check browser support


let toppingsArray = document.getElementsByClassName('toppings');
let titlearray = document.getElementsByClassName('title');
let itemimgarray = document.getElementsByClassName('itemimg');
let itempricearray = document.getElementsByClassName('itemprice');


let iteminfostring = localStorage.getItem('iteminfo');
let iteminfo = iteminfostring.split(',');

console.log(toppingsArray);
for (let i = 0; i < toppingsArray.length; i++) {
    let itemNum = toppingsArray[i];
    let titlenum = titlearray[i];
    let itemimgnum = itemimgarray[i];
    let itempricenum = itempricearray[i];

    if (typeof(Storage) !== "undefined") {
        // Retrieve
        itemNum.innerHTML = localStorage.getItem("checktopping");
        titlenum.innerHTML = iteminfo[1];
        itemimgnum.innerHTML = iteminfo[0];
        itempricenum.innerHTML = iteminfo [2];
        }
}