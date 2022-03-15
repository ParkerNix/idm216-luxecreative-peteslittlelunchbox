let categories = ['breakfast', 'lunch', 'sides', 'drinks']

let foods = [
    ['images/bacon_egg_cheese.png', '6.00', 'Bacon Egg and Cheese', 0, 0],
    ['images/bacon_egg_cheese_hashbrown.png', '6.00', 'Bacon Egg and Cheese with Hashbrown', 0, 1],
    ['images/steak_egg_cheese.png', '7.00', 'Steak Egg and Cheese', 0, 2],
    ['images/ham_egg_cheese_3x.png', '5.00', 'Ham Egg and Cheese', 0, 3],
    ['images/egg_scrapple.png', '5.00', 'Egg Scrapple', 0, 4],
    ['images/scrapple_egg_cheese_3x.png', '5.00', 'Scrapple Egg and Cheese', 0, 5],
    ['images/egg_cheese_3x.png', '4.00', 'Egg and Cheese', 0, 6],
    ['images/sausage_egg_cheese_3x.png', '5.00', 'Sausage Egg and Cheese', 0, 7],
    ['images/porkroll_egg_cheese_3x.png', '5.00', 'Pork Roll Egg and Cheese', 0, 8],
    ['images/western_omelette_3x.png', '5.50', 'Western Omelette', 0, 9],
    ['images/hot_sausage_egg_cheese_3x.png', '6.00', 'Hot Sausage Egg and Cheese', 0, 10],
    ['images/cheesesteak.png', '6.00', 'Cheesesteak', 1, 11],
    ['images/bacon_cheeseburger.png', '5.00', 'Bacon Cheeseburger', 1, 12],
    ['images/turkey_club.png', '6.00', 'Turkey Club', 1, 13],
    ['images/grilled_cheese_w_ham_bacon_or_turkey_bacon_3x.png', '4.50', 'Grilled Cheese with Ham Bacon or Turkey Bacon', 1, 14],
    ['images/grilled_cheese_tomato_3x.png', '4.00', 'Grilled Cheese with Tomato', 1, 15],
    ['images/grilled_cheese_3x.png', '3.50', 'Grilled Cheese', 1, 16],
    ['images/bacon_lettuce_tomato_3x.png', '5.00', 'Bacon Lettuce Tomato', 1, 17],
    ['images/hot_sausage.png', '7.00', 'Hot Sausage', 1, 18],
    ['images/buffalo_cheesestake.png', '6.00', 'Buffalo Cheesesteak', 1, 19],
    ['images/ham_club.png', '6.00', 'Ham Club', 1, 20],
    ['images/grilled_chicken_hoagie.png', '7.50', 'Grilled Chicken Hoagie', 1, 21],
    ['images/lamb_gyro.png', '6.00', 'Lamb Gyro', 1, 22],
    ['images/mushroom_cheesesteak.png', '7.00', 'Mushroom Cheesesteak', 1, 23],
    ['images/hot_dog.png', '6.00', 'Hot Dog', 1, 24],
    ['images/cart_chips_2x.png', '0.75', 'Chips', 2, 25],
    ['images/cart_hashbrown_2x.png', '1.50', 'Hashbrown', 2, 26],
    ['images/cart_thai_tea_2x.png', '2.50', 'Thai Tea', 2, 27],
    ['images/cart_muffin_2x.png', '1.75', 'Muffin', 2, 28],
    ['images/thai_tea_3x.png', '2.50', 'Thai Tea', 3, 29],
    ['images/hot_coffee_3x.png', '2.50', 'Hot Coffee', 3, 30],
    ['images/tea_3x.png', '2.50', 'Tea', 3, 31],
    ['images/hot_chocolate_3x.png', '2.50', 'Hot Chocolate', 3, 32],
    ['images/gatorade_3x.png', '2.00', 'Gatorade', 3, 33],
    ['images/water_3x.png', '1.25', 'Water', 3, 34],
    ['images/juice_3x.png', '2.00', 'Juice', 3, 35],
    ['images/soda_bottle_3x.png', '2.00', 'Soda Bottle', 3, 36],
    ['images/soda_can_3x.png', '1.00', 'Soda Can', 3, 37],
    ['images/vitamin_water_3x.png', '2.25', 'Vitamin Water', 3, 38],
    ['images/snapple_3x.png', '2.00', 'Snapple', 3, 39],
    ['images/hot_tea_3x.png', '2.00', 'Hot Tea', 3, 40],
];


let textbreakfast = "";
let textlunch = "";
let textdrinks = "";
for (let i = 0; i < foods.length; i++) {
    let foodArray = foods[i];

    let foodImage = foodArray[0];
    let foodPrice = foodArray[1];
    let foodName = foodArray[2];
    let foodCatnum = foodArray[3];
    let foodCat = categories[foodCatnum];
    this["fooditem"+i] = [foodImage, foodPrice, foodName, foodCat];
    if (foodCat == 'breakfast') {
        textbreakfast += '<div class="menuitem" id = ' + i + '> <span class="a-icon a-icon--heart js-heart"> <svg class="a-icon__asset" viewBox="0 0 24.3 22.5"> <use class="a-icon--heart__fill" xlink:href="#u-heart-fill" xmlns:xlink="http://www.w3.org/1999/xlink"></use> <use class="a-icon--heart__stroke" xlink:href="#u-heart-stroke" xmlns:xlink="http://www.w3.org/1999/xlink"></use> </svg> </span> <a href="edit_item.html" class="imgprice"> <span class="pricetag">$' + foodPrice + '</span> <img src="' +  foodImage + '" alt="' + foodName + '"> <h3>' + foodName + '</h3> </a> </div>';
        }
    if (foodCat == 'lunch') {
        textlunch += '<div class="menuitem" id = ' + i + '> <span class="a-icon a-icon--heart js-heart"><svg class="a-icon__asset" viewBox="0 0 24.3 22.5"><use class="a-icon--heart__fill" xlink:href="#u-heart-fill" xmlns:xlink="http://www.w3.org/1999/xlink"></use><use class="a-icon--heart__stroke" xlink:href="#u-heart-stroke" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg></span> <a href="edit_item.html" class="imgprice"> <span class="pricetag">$' + foodPrice + '</span> <img src="' +  foodImage + '" alt="' + foodName + '"> <h3>' + foodName + '</h3> </a> </div>';
        }
    if (foodCat == 'drinks') {
        textdrinks += '<div class="menuitem" id = ' + i + '> <span class="a-icon a-icon--heart js-heart"> <svg class="a-icon__asset" viewBox="0 0 24.3 22.5"> <use class="a-icon--heart__fill" xlink:href="#u-heart-fill" xmlns:xlink="http://www.w3.org/1999/xlink"></use> <use class="a-icon--heart__stroke" xlink:href="#u-heart-stroke" xmlns:xlink="http://www.w3.org/1999/xlink"></use> </svg> </span> <a href="edit_item.html" class="imgprice"> <span class="pricetag">$' + foodPrice + '</span> <img src="' +  foodImage + '" alt="' + foodName + '"> <h3>' + foodName + '</h3> </a> </div>';
        }
}

if (document.getElementById("lunchtime")) {
document.getElementById("lunchtime").innerHTML = textlunch;
} 
if (document.getElementById("breakfasttime")) {
document.getElementById("breakfasttime").innerHTML = textbreakfast;
} 
if (document.getElementById("drinktime")) {
document.getElementById("drinktime").innerHTML = textdrinks;
}

function nextPage(itemnum) {
    console.log(this["fooditem"+itemnum]);
    let newitem = this["fooditem"+itemnum].toString();
    console.log(newitem);
    localStorage.setItem("newitem", newitem);
}

let itemArray = document.getElementsByClassName("menuitem");
for (let i = 0; i < itemArray.length; i++) {
    let item = itemArray[i];
    let itemid = item.id;
    console.log(item.id);
        
    item.addEventListener('mousedown', function() {nextPage(itemid)}, false);
}
