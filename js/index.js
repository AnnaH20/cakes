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
            addMessage(option.textContent, parent);
        }
    });
}

function addMessage(cakeName, parentElement) {
    const className = 'added-message';
    const messageElement = document.createElement('div');
    messageElement.classList.add(className);
    messageElement.textContent = `Ви додали торт ${cakeName} до замовлення`;
    parentElement.appendChild(messageElement);

    const addedMessageElement = parentElement.querySelector(`.${className}`);
    setTimeout(() => {
        addedMessageElement.remove();
    }, 3000);
}
