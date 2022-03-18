let addCart = document.querySelectorAll('.addtocart');
const cartShow = document.querySelector('.cart-counter') // In edit_item.html navbar

for (let i = 0; i < addCart.length; i++) {
    addCart[i].addEventListener('click', () => {

        cartCount();
    })
}

function cartCount(){

    let itemCount = localStorage.getItem('cartsCount');
    itemCount = parseInt(itemCount);

    if(itemCount){
        localStorage.setItem('cartsCount', itemCount + 1);
        cartShow.textContent = itemCount + 1;
    } else {
        localStorage.setItem('cartsCount', 1);
        cartShow.textContent = itemCount = 1;
    }
}

function displayCart() {
    let itemCount = localStorage.getItem('cartsCount');
    if(itemCount){
        cartShow.textContent = itemCount;
    }
}
displayCart();