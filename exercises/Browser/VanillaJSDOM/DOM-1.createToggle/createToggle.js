let button = document.querySelector('button');
let list = document.querySelector('ul');
let paragraph = document.querySelector('p');
let secondButton = document.querySelector('button:nth-of-type(2)');

let listVisible = true;
let paragraphIsShown = true;

button.addEventListener('click', function() {
  if (listVisible) {
    list.style.display = 'none';
    button.innerHTML = 'Show favorite destinations';
  } else {
    list.style.display = 'block';
    button.innerHTML = 'Get them out of here!';
  }
  listVisible = !listVisible;
})
