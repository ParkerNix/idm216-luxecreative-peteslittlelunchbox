function getOption() {
    selectElement = document.querySelector('.time');
    output = selectElement.options[selectElement.selectedIndex].value;
    document.querySelector('.output').textContent = output;
}