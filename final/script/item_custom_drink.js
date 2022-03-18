let hoagie = document.getElementById('hoagie');
let pita = document.getElementById('pita');
let wrap = document.getElementById('wrap');
let ketchup = document.getElementById('ketchup');
let salt = document.getElementById('salt');
let pepper = document.getElementById('pepper');
let onions = document.getElementById('onions');
let addtocart = document.getElementById('addtocart');

let options = [hoagie, pita, wrap, ketchup, salt, pepper, onions];

function checkAddress()
{
    let checktopping = "";
    let additionalNotes = document.getElementById("additional-notes");
    let value = additionalNotes.value;
    checktopping += value; 
    let iteminfo = [textimg, textedit, updateimg, updateprice, updatetitle, updateedit]
    let iteminfostring = iteminfo.toString();
        // Check browser support
        if (typeof(Storage) !== "undefined") {
            // Store
            let pickuptime = localStorage.getItem("pickuptime");
            localStorage.removeItem("pickuptime");
            localStoragenum = localStorage.length;
            let allitem = [iteminfostring, checktopping];
            let allitemstring = allitem.toString();
            if (yourarray[5]) {
                localStorage.removeItem(yourarray[5]);
                localStorage[yourarray[5]] = allitemstring;
                if (pickuptime) {
                localStorage.setItem("pickuptime", pickuptime);
                }
            } else {
            localStorage["chosenitem" + localStoragenum] = allitemstring;
            if (pickuptime) {
                localStorage.setItem("pickuptime", pickuptime);
                }
            }
        }
}



addtocart.addEventListener( "mousedown", function() {checkAddress();
}, false);




