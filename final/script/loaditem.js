let yourimg = document.getElementById('itemimg');
let yourtitle = document.getElementById('itemname');
let yourdesc = document.getElementById('itemdesc');
let yourprice = document.getElementById('totalprice');

let youritem = localStorage.getItem('newitem');
console.log(youritem);
let yourarray = youritem.split(",");
console.log(yourarray);

let updateimg = yourarray[0];
let updateprice = yourarray[1];
let updatetitle = yourarray[2];
let updateedit = yourarray[3];

let textimg = "";
let textedit = "";
textimg += "<img src='" + updateimg + "' alt='" + updatetitle + "'>";
textedit += "<img src='" + updateedit + "' alt='" + updatetitle + "'>";

yourimg.innerHTML = textedit;
yourtitle.innerHTML = updatetitle;
yourprice.innerHTML = updateprice;