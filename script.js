const h2 = document.createElement("h2");
h2.textContent = "You better not open my trash can!";
document.querySelector("body").appendChild(h2);

function onButtonClick() {
    alert('You let him out!');
  }
const button = document.querySelector('button');
button.addEventListener('click', onButtonClick);
