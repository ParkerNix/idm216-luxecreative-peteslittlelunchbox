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
    text = "";
    for (let i = 0; i < options.length; i++) {
        let thing = options[i];
        let thisthing = [...thing.attributes];
        const attrs = thisthing.reduce((attrs, attribute) => {
          attrs[attribute.name] = attribute.value;
          return attrs;
        }, {});
        let thename = attrs.value;

        if (thing.checked == true)
        {
            text += thename + ", ";
        }
    }
    let additionalNotes = document.getElementById("additional-notes");
    let value = additionalNotes.value;
    text += value; 
    console.log(text);
        // Check browser support
        if (typeof(Storage) !== "undefined") {
            // Store
            localStorage.setItem("text", text);
            console.log(localStorage.getItem("text"));
            }
}



addtocart.addEventListener( "mousedown", function() {checkAddress();
}, false);