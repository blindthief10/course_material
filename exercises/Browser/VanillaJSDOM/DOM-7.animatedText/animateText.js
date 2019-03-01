const sentence = 'I am a web developer';
let counter = 0;
let sentenceSplitted = sentence.split('');

document.addEventListener('DOMContentLoaded', function(ev) {
  const section = document.querySelector('section');

  const createLetters = setInterval(() => {

    if (counter === sentenceSplitted.length) {
      return;
    }

    let newSpan = document.createElement('span');
    if (sentenceSplitted[counter] === ' ') {
      newSpan.innerHTML = '&nbsp;';
    } else {
      newSpan.innerHTML = sentenceSplitted[counter];
    }

    section.appendChild(newSpan);
    counter++;
  }, 100)

})
