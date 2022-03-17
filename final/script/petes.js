const tipOne = document.getElementById('tip1');
const tipTwo = document.getElementById('tip2');
const tipThree = document.getElementById('tip3');

function turnOn(tipon) {
    if (tipon.className == "tip") {
        tipOne.className = 'tip';
        tipTwo.className = 'tip';
        tipThree.className = 'tip';
        tipon.className = 'tipClicked';
      } else {
        tipon.className = 'tip';
      }
}

tipOne.addEventListener('click', function () {turnOn(tipOne);});
tipTwo.addEventListener('click', function () {turnOn(tipTwo);});
tipThree.addEventListener('click', function () {turnOn(tipThree);});
