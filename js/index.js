const optionElements = document.querySelectorAll('option');
const orderButtonElements = document.querySelectorAll('.catalog article button');

orderButtonElements.forEach(function(button) {
    button.addEventListener('click', selectOptions);
});

function selectOptions(event) {
    const parent = event.target.parentNode;
    const elementWithName = parent.querySelector('h2');
    optionElements.forEach(function(option) {
        if (option.textContent === elementWithName.textContent) {
            option.selected = true;
        }
    });
}