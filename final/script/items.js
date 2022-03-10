// Check browser support


let toppingsArray = document.getElementsByClassName('toppings');
console.log(toppingsArray);
for (let i = 0; i < toppingsArray.length; i++) {
    let itemNum = toppingsArray[i];
    if (typeof(Storage) !== "undefined") {
        // Retrieve
        itemNum.innerHTML = localStorage.getItem("text");
        }
}