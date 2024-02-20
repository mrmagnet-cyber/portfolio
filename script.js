let element = document.getElementById("submit");

function turnGreenButton() {
    element.style.backgroundColor = 'green';
    element.style.color = 'white';
    element.value = 'Submitted';
}

element.onclick = turnGreenButton;
