let categories = ['breakfast', 'lunch', 'sides', 'drinks']

let foods = [
    ['images/bacon_egg_cheese.png', '6.00', 'Bacon Egg and Cheese', 0, 'images/edit_items/bacon_egg_cheese.png'],
    ['images/bacon_egg_cheese_hashbrown.png', '6.00', 'Bacon Egg and Cheese with Hashbrown', 0, 'images/edit_items/bacon_egg_cheese_hashbrown.png'],
    ['images/steak_egg_cheese.png', '7.00', 'Steak Egg and Cheese', 0, 'images/edit_items/steak_egg_cheese.png'],
    ['images/ham_egg_cheese_3x.png', '5.00', 'Ham Egg and Cheese', 0, 'images/edit_items/ham_egg_cheese.png'],
    ['images/egg_scrapple.png', '5.00', 'Egg Scrapple', 0, 'images/edit_items/egg_scrapple.png'],
    ['images/scrapple_egg_cheese_3x.png', '5.00', 'Scrapple Egg and Cheese', 0, 'images/edit_items/scrapple_egg_cheese.png'],
    ['images/egg_cheese_3x.png', '4.00', 'Egg and Cheese', 0, 'images/edit_items/egg_cheese.png'],
    ['images/sausage_egg_cheese_3x.png', '5.00', 'Sausage Egg and Cheese', 0, 'images/edit_items/sausage_egg_cheese.png'],
    ['images/porkroll_egg_cheese_3x.png', '5.00', 'Pork Roll Egg and Cheese', 0, 'images/edit_items/porkroll_egg_cheese.png'],
    ['images/hot_sausage_egg_cheese_3x.png', '6.00', 'Hot Sausage Egg and Cheese', 0, 'images/edit_items/hot_sausage_egg_cheese.png'],
    ['images/cheesesteak.png', '6.00', 'Cheesesteak', 1, 'images/edit_items/cheesesteak.png'],
    ['images/bacon_cheeseburger.png', '5.00', 'Bacon Cheeseburger', 1, 'images/edit_items/bacon_cheeseburger.png'],
    ['images/turkey_club.png', '6.00', 'Turkey Club', 1, 'images/edit_items/turkey_club.png'],
    ['images/grilled_cheese_tomato_3x.png', '4.00', 'Grilled Cheese with Tomato', 1, 'images/edit_items/grilled_cheese_tomato.png'],
    ['images/grilled_cheese_3x.png', '3.50', 'Grilled Cheese', 1, 'images/edit_items/grilled_cheese.png'],
    ['images/bacon_lettuce_tomato_3x.png', '5.00', 'Bacon Lettuce Tomato', 1, 'images/edit_items/bacon_lettuce_tomato.png'],
    ['images/hot_sausage.png', '7.00', 'Hot Sausage', 1, 'images/edit_items/hot_sausage.png'],
    ['images/buffalo_cheesestake.png', '6.00', 'Buffalo Cheesesteak', 1, 'images/edit_items/buffalo_cheesesteak.png'],
    ['images/ham_club.png', '6.00', 'Ham Club', 1, 'images/edit_items/ham_club.png'],
    ['images/grilled_chicken_hoagie.png', '7.50', 'Grilled Chicken Hoagie', 1, 'images/edit_items/grilled_chicken_hoagie.png'],
    ['images/lamb_gyro.png', '6.00', 'Lamb Gyro', 1, 'images/edit_items/lamb_gyro.png'],
    ['images/mushroom_cheesesteak.png', '7.00', 'Mushroom Cheesesteak', 1, 'images/edit_items/mushroom_cheesesteak.png'],
    ['images/hot_dog.png', '6.00', 'Hot Dog', 1, 'images/edit_items/hot_dog.png'],
    ['images/thai_tea_3x.png', '2.50', 'Thai Tea', 3, 'images/edit_items/thai_tea.png'],
    ['images/hot_coffee_3x.png', '2.50', 'Hot Coffee', 3, 'images/edit_items/hot_coffee.png'],
    ['images/tea_3x.png', '2.50', 'Tea', 3, 'images/edit_items/tea.png'],
    ['images/hot_chocolate_3x.png', '2.50', 'Hot Chocolate', 3, 'images/edit_items/hot_chocolate.png'],
    ['images/gatorade_3x.png', '2.00', 'Gatorade', 3, 'images/edit_items/gatorade.png'],
    ['images/water_3x.png', '1.25', 'Water', 3, 'images/edit_items/water.png'],
    ['images/juice_3x.png', '2.00', 'Juice', 3, 'images/edit_items/juice.png'],
    ['images/soda_bottle_3x.png', '2.00', 'Soda Bottle', 3, 'images/edit_items/soda_bottle.png'],
    ['images/soda_can_3x.png', '1.00', 'Soda Can', 3, 'images/edit_items/soda_can.png'],
    ['images/vitamin_water_3x.png', '2.25', 'Vitamin Water', 3, 'images/edit_items/vitamin_water.png'],
    ['images/snapple_3x.png', '2.00', 'Snapple', 3, 'images/edit_items/snapple.png'],
    ['images/hot_tea_3x.png', '2.00', 'Hot Tea', 3, 'images/edit_items/hot_tea.png'],
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
    let foodEdit = foodArray[4];
    let foodCat = categories[foodCatnum];
    this["fooditem"+i] = [foodImage, foodPrice, foodName, foodCat, foodEdit];
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
    localStorage.removeItem("newitem");
    localStorage.setItem("newitem", newitem);
}

let itemArray = document.getElementsByClassName("menuitem");
for (let i = 0; i < itemArray.length; i++) {
    let item = itemArray[i];
    let itemid = item.id;
    console.log(item.id);
        
    item.addEventListener('mousedown', function() {nextPage(itemid)}, false);
}
