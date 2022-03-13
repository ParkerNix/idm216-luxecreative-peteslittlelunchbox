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

let textimg = "";
textimg += "<img src='" + updateimg + "' alt='" + updatetitle + "'>"

yourimg.innerHTML = textimg;
yourtitle.innerHTML = updatetitle;
yourprice.innerHTML = updateprice;