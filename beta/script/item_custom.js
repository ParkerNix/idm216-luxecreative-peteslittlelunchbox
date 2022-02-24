let radbutton = document.getElementById('hoagie');
let checkbutton = document.getElementById('ketchup');
let addtocart = document.getElementById('addtocart');

console.log(radbutton);
console.log(checkbutton);

function checkAddress(chkBox)
{
    if (chkBox.checked)
    {
        console.log('you checked something omg');
    }
}



addtocart.addEventListener( mouseover, checkAddress(), false);