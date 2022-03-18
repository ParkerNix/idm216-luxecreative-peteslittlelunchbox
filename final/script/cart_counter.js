let addCart = document.querySelectorAll('.addtocart');
const cartShow = document.querySelector('.cart-counter') // In edit_item.html navbar


function displayCart() {
    let itemCount = localStorage.getItem("chosenitem1");
    if(itemCount !== null){
        cartShow.classList.add("red");
    } else {
        cartShow.classList.remove("red");
    }
}
displayCart();