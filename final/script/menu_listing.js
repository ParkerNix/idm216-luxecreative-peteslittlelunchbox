let categories = ['breakfast', 'lunch', 'sides', 'drinks']

let foods = [
    ['images/bacon_egg_cheese.png', '6.00', 'Bacon Egg and Cheese', 0],
    ['images/bacon_egg_cheese_hashbrown.png', '6.00', 'Bacon Egg and Cheese with Hashbrown', 0],
    ['images/steak_egg_cheese.png', '7.00', 'Steak Egg and Cheese', 0],
    ['images/egg_scrapple.png', '5.00', 'Egg Scrapple', 0],
    ['images/cheesesteak.png', '6.00', 'Cheesesteak', 1],
    ['images/bacon_cheeseburger.png', '5.00', 'Bacon Cheeseburger', 1],
    ['images/turkey_club.png', '6.00', 'Turkey Club', 1],
    ['images/hot_sausage.png', '7.00', 'Hot Sausage', 1],
    ['images/buffalo_cheesestake.png', '6.00', 'Buffalo Cheesesteak', 1],
    ['images/ham_club.png', '6.00', 'Ham Club', 1],
    ['images/grilled_chicken_hoagie.png', '7.50', 'Grilled Chicken Hoagie', 1],
    ['images/lamb_gyro.png', '6.00', 'Lamb Gyro', 1],
    ['images/mushroom_cheesesteak.png', '7.00', 'Mushroom Cheesesteak', 1],
    ['images/hot_dog.png', '6.00', 'Hot Dog', 1],
    ['images/thai_tea.png', '2.50', 'Thai Tea', 3],
    ['images/hot_coffee.png', '2.50', 'Hot Coffee', 3],
    ['images/tea.png', '2.50', 'Tea', 3],
    ['images/hot_chocolate.png', '2.50', 'Hot Chocolate', 3]
];


let textbreakfast = "";
for (let i = 0; i < foods.length; i++) {
    let foodArray = foods[i];

    let foodImage = foodArray[0];
    let foodPrice = foodArray[1];
    let foodName = foodArray[2];
    let foodCatnum = foodArray[3];
    let foodCat = categories[foodCatnum];
    console.log('foodCat is ' + foodCat);
    if (foodCat == 'breakfast') {
        textbreakfast += '<div class="menuitem"> <a href="edit_item.html" class="imgprice"> <img src="' +  foodImage + '" alt="' + foodName + '"> <span class="heart"><i style="width: 40px;" class="fa fa-heart-o fa-lg" aria-hidden="true"></i></span> <span class="pricetag">$' + foodPrice + '</span> </a> <h3>' + foodName + '</h3> </div>';
        }
}

let textlunch = "";
for (let i = 0; i < foods.length; i++) {
    let foodArray = foods[i];

    let foodImage = foodArray[0];
    let foodPrice = foodArray[1];
    let foodName = foodArray[2];
    let foodCatnum = foodArray[3];
    let foodCat = categories[foodCatnum];
    if (foodCat == 'lunch') {
    textlunch += '<div class="menuitem"> <a href="edit_item.html" class="imgprice"> <img src="' +  foodImage + '" alt="' + foodName + '"> <span class="heart"><i style="width: 40px;" class="fa fa-heart-o fa-lg" aria-hidden="true"></i></span> <span class="pricetag">$' + foodPrice + '</span> </a> <h3>' + foodName + '</h3> </div>';
    }
}

let textdrinks = "";
for (let i = 0; i < foods.length; i++) {
    let foodArray = foods[i];

    let foodImage = foodArray[0];
    let foodPrice = foodArray[1];
    let foodName = foodArray[2];
    let foodCatnum = foodArray[3];
    let foodCat = categories[foodCatnum];
    console.log(foodCatnum);
    if (foodCat == 'drinks') {
    textdrinks += '<div class="menuitem"> <a href="edit_item.html" class="imgprice"> <img src="' +  foodImage + '" alt="' + foodName + '"> <span class="heart"><i style="width: 40px;" class="fa fa-heart-o fa-lg" aria-hidden="true"></i></span> <span class="pricetag">$' + foodPrice + '</span> </a> <h3>' + foodName + '</h3> </div>';
    }
}

if (document.getElementById("lunchtime")) {
document.getElementById("lunchtime").innerHTML = textlunch;
console.log(textlunch);
} else if (document.getElementById("breakfasttime")) {
document.getElementById("breakfasttime").innerHTML = textbreakfast;
} else if (document.getElementById("drinktime")) {
document.getElementById("drinktime").innerHTML = textdrinks;
}