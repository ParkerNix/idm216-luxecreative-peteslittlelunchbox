let categories = ['breakfast', 'lunch', 'sides', 'drinks'];
let where = ['nothing', 'favs'];

let foods = [
    ['images/bacon_egg_cheese.png', '6.00', 'Bacon Egg and Cheese', 0, 'images/edit_items/bacon_egg_cheese.png', 0],
    ['images/bacon_egg_cheese_hashbrown.png', '6.00', 'Bacon Egg and Cheese with Hashbrown', 0, 'images/edit_items/bacon_egg_cheese_hashbrown.png', 1],
    ['images/steak_egg_cheese.png', '7.00', 'Steak Egg and Cheese', 0, 'images/edit_items/steak_egg_cheese.png', 0],
    ['images/ham_egg_cheese_3x.png', '5.00', 'Ham Egg and Cheese', 0, 'images/edit_items/ham_egg_cheese.png', 0],
    ['images/egg_scrapple.png', '5.00', 'Egg Scrapple', 0, 'images/edit_items/egg_scrapple.png', 0],
    ['images/scrapple_egg_cheese_3x.png', '5.00', 'Scrapple Egg and Cheese', 0, 'images/edit_items/scrapple_egg_cheese.png', 0],
    ['images/egg_cheese_3x.png', '4.00', 'Egg and Cheese', 0, 'images/edit_items/egg_cheese.png', 0],
    ['images/sausage_egg_cheese_3x.png', '5.00', 'Sausage Egg and Cheese', 0, 'images/edit_items/sausage_egg_cheese.png', 0],
    ['images/porkroll_egg_cheese_3x.png', '5.00', 'Pork Roll Egg and Cheese', 0, 'images/edit_items/porkroll_egg_cheese.png', 0],
    ['images/hot_sausage_egg_cheese_3x.png', '6.00', 'Hot Sausage Egg and Cheese', 0, 'images/edit_items/hot_sausage_egg_cheese.png', 0],
    ['images/cheesesteak.png', '6.00', 'Cheesesteak', 1, 'images/edit_items/cheesesteak.png', 1],
    ['images/bacon_cheeseburger.png', '5.00', 'Bacon Cheeseburger', 1, 'images/edit_items/bacon_cheeseburger.png', 0],
    ['images/turkey_club.png', '6.00', 'Turkey Club', 1, 'images/edit_items/turkey_club.png', 0],
    ['images/grilled_cheese_tomato_3x.png', '4.00', 'Grilled Cheese with Tomato', 1, 'images/edit_items/grilled_cheese_tomato.png', 0],
    ['images/grilled_cheese_3x.png', '3.50', 'Grilled Cheese', 1, 'images/edit_items/grilled_cheese.png', 0],
    ['images/bacon_lettuce_tomato_3x.png', '5.00', 'Bacon Lettuce Tomato', 1, 'images/edit_items/bacon_lettuce_tomato.png', 0],
    ['images/hot_sausage.png', '7.00', 'Hot Sausage', 1, 'images/edit_items/hot_sausage.png', 0],
    ['images/buffalo_cheesestake.png', '6.00', 'Buffalo Cheesesteak', 1, 'images/edit_items/buffalo_cheesesteak.png', 1],
    ['images/ham_club.png', '6.00', 'Ham Club', 1, 'images/edit_items/ham_club.png', 0],
    ['images/grilled_chicken_hoagie.png', '7.50', 'Grilled Chicken Hoagie', 1, 'images/edit_items/grilled_chicken_hoagie.png', 0],
    ['images/lamb_gyro.png', '6.00', 'Lamb Gyro', 1, 'images/edit_items/lamb_gyro.png', 0],
    ['images/mushroom_cheesesteak.png', '7.00', 'Mushroom Cheesesteak', 1, 'images/edit_items/mushroom_cheesesteak.png', 0],
    ['images/hot_dog.png', '6.00', 'Hot Dog', 1, 'images/edit_items/hot_dog.png', 0],
    ['images/thai_tea_3x.png', '2.50', 'Thai Tea', 3, 'images/edit_items/thai_tea.png', 1],
    ['images/hot_coffee_3x.png', '2.50', 'Hot Coffee', 3, 'images/edit_items/hot_coffee.png', 0],
    ['images/tea_3x.png', '2.50', 'Tea', 3, 'images/edit_items/tea.png', 0],
    ['images/hot_chocolate_3x.png', '2.50', 'Hot Chocolate', 3, 'images/edit_items/hot_chocolate.png', 0],
    ['images/gatorade_3x.png', '2.00', 'Gatorade', 3, 'images/edit_items/gatorade.png', 0],
    ['images/water_3x.png', '1.25', 'Water', 3, 'images/edit_items/water.png', 0],
    ['images/juice_3x.png', '2.00', 'Juice', 3, 'images/edit_items/juice.png', 0],
    ['images/soda_bottle_3x.png', '2.00', 'Soda Bottle', 3, 'images/edit_items/soda_bottle.png', 0],
    ['images/soda_can_3x.png', '1.00', 'Soda Can', 3, 'images/edit_items/soda_can.png', 0],
    ['images/vitamin_water_3x.png', '2.25', 'Vitamin Water', 3, 'images/edit_items/vitamin_water.png', 0],
    ['images/snapple_3x.png', '2.00', 'Snapple', 3, 'images/edit_items/snapple.png', 0],
    ['images/hot_tea_3x.png', '2.00', 'Hot Tea', 3, 'images/edit_items/hot_tea.png', 0],
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
    this["fooditem"+i] = [foodImage, foodPrice, foodName, foodEdit];
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
    this["fooditem"+itemnum].push(itemnum); 
    console.log(this["fooditem"+itemnum]);
    let newitem = this["fooditem"+itemnum].toString();
    console.log(newitem);
    window.localStorage.removeItem("newitem");
    console.log(localStorage.getItem("newitem"));
    localStorage["newitem"] = newitem;
}

let itemArray = document.getElementsByClassName("menuitem");
for (let i = 0; i < itemArray.length; i++) {
    let item = itemArray[i];
    let itemid = item.id;
    console.log(item.id);
        
    item.addEventListener('mousedown', function() {nextPage(itemid)}, false);
}
