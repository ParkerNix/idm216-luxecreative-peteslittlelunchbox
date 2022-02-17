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
    console.log('foodImage is ' + foodImage);

    text += '<img src="' + foodImage + '">';
}

document.getElementById("demo").innerHTML = text;