let foods = [
    ['images/cheesesteak.png', '6.00', 'Cheesesteak'],
    ['images/cheesesteak.png', '6.00', 'Cheesesteak'],
    ['images/cheesesteak.png', '6.00', 'Cheesesteak'],
    ['images/cheesesteak.png', '6.00', 'Cheesesteak'],
    ['images/cheesesteak.png', '6.00', 'Cheesesteak'],
];

let text = "";
for (let i = 0; i < foods.length; i++) {
    let foodArray = foods[i];

    let foodImage = foodArray[0];
    let foodPrice = foodArray[1];
    let foodName = foodArray[2];
    console.log('foodImage is ' + foodImage);

    text += '<div class="menuitem"> <a href="edit_item.html"> <img src="' +  foodImage + '" alt="cheesesteak"> </a> <h3>' + foodName + '</h3> </div>';
}

document.getElementById("demo").innerHTML = text;