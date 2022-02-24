let foods = [
    ['images/cheesesteak.png', '6.00', 'Cheesesteak'],
    ['images/bacon_cheeseburger.png', '6.00', 'Bacon Cheeseburger'],
    ['images/turkey_club.png', '6.00', 'Turkey Club'],
    ['images/hot_sausage.png', '6.00', 'Hot Sausage'],
    ['images/buffalo_cheesestake.png', '6.00', 'Buffalo Cheesesteak'],
    ['images/ham_club.png', '6.00', 'Ham Club'],
    ['images/grilled_chicken_hoagie.png', '6.00', 'Grilled Chicken Hoagie'],
    ['images/lamb_gyro.png', '6.00', 'Lamb Gyro'],
    ['images/mushroom_cheesesteak.png', '6.00', 'Mushroom Cheesesteak'],
    ['images/hot_dog.png', '6.00', 'Hot Dog']
];

let text = "";
for (let i = 0; i < foods.length; i++) {
    let foodArray = foods[i];

    let foodImage = foodArray[0];
    let foodPrice = foodArray[1];
    let foodName = foodArray[2];
    console.log('foodImage is ' + foodImage);

    text += '<div class="menuitem"> <a href="edit_item.html" class="imgprice"> <img src="' +  foodImage + '" alt="' + foodName + '"> <span class="heart"><i style="width: 40px;" class="fa fa-heart-o fa-lg" aria-hidden="true"></i></span> <span class="pricetag">$' + foodPrice + '</span> </a> <h3>' + foodName + '</h3> </div>';
}

document.getElementById("demo").innerHTML = text;