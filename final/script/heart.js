let jsheartno = document.getElementsByClassName('js-heart');

for (let i=0; i < jsheartno.length; i++) {
    let jsheart = jsheartno[i];
    jsheart.addEventListener('click', function () {
    jsheart.classList.toggle('is-active'); }, false);
}