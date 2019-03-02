let section = document.querySelector('section');
let closeButton = document.querySelector('section div span');

document.body.addEventListener('mousemove', function showDiv(ev) {
  if (ev.clientY < 10) {
    section.classList.add('showOff');
    ev.currentTarget.removeEventListener('mousemove', showDiv);
  }
})

closeButton.addEventListener('click', function(ev) {
  section.classList.remove('showOff');
})
