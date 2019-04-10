const username = document.querySelector('input[type="text"]'),
      birthdayDate = document.querySelector('input[type="date"]'),
      picture = document.querySelector('input[type="file"]'),
      primaryColor = document.getElementById('primaryColor'),
      secondaryColor = document.querySelector('#secondaryColor'),
      textarea = document.querySelector('textarea'),
      checkboxes = document.querySelectorAll('input[type="checkbox"]'),
      form = document.querySelector('form'),
      baseUrl = '../../images/',
      charactersAllowed = 140,
      paragraphTextareaMessage = document.querySelector('p.countermessage');


form.addEventListener('submit', function(ev) {
  ev.preventDefault();
  let userNameValue = username.value;
  let birthdayValue = birthdayDate.value;
  let pictureSource = picture.value;
  let primaryColorValue = primaryColor.value;
  let secondaryColorValue = secondaryColor.value;
  let textareaMessage = textarea.value;

  let section = document.createElement('SECTION');

  let h3  = document.createElement('H3');
  h3.innerText = userNameValue;

  let birthdayParagraph = document.createElement('P');
  let birthdayObject = new Date(birthdayValue);
  let today = new Date();
  let ageCustomer = today.getFullYear() - birthdayObject.getFullYear();
  birthdayParagraph.innerHTML = `${userNameValue} is <b>${ageCustomer}</b> years old`;

  let image = document.createElement('IMG');
  let newPath = pictureSource.replace(`C:\\fakepath\\`, baseUrl);
  image.src = newPath;

  let article = document.createElement('ARTICLE');
  article.innerText = textareaMessage;

  section.style.background = primaryColorValue;
  section.style.color = secondaryColorValue;

  let spanCloseButton = document.createElement('SPAN');
  spanCloseButton.innerText = 'X';

  let programmingSkills = [];

  for (let i = 0; i < checkboxes.length; i++) {

    if (checkboxes[i].checked) {
        programmingSkills.push(checkboxes[i].parentElement.innerText);
    }

  }

  let languagesString = programmingSkills.join(', ');

  let languagesParagraph = document.createElement('P');
  languagesParagraph.innerText = `The programming skills of ${userNameValue} are: ${languagesString}`;


  section.appendChild(h3);
  section.appendChild(birthdayParagraph);
  section.appendChild(image);
  section.appendChild(article);
  section.appendChild(spanCloseButton);
  section.appendChild(languagesParagraph);

  document.body.appendChild(section);

  spanCloseButton.addEventListener('click', function(event) {
    document.body.removeChild(event.currentTarget.parentElement);
  })

})

username.addEventListener('invalid', function(ev) {
  ev.preventDefault();
  ev.currentTarget.setCustomValidity('Were you born without a name?');
  ev.currentTarget.nextElementSibling.innerText = ev.currentTarget.validationMessage;
  ev.currentTarget.setCustomValidity('');
})

username.addEventListener('keyup', function(ev) {
  ev.currentTarget.checkValidity();
})

birthdayDate.addEventListener('invalid', function(ev) {
  ev.preventDefault();
  ev.currentTarget.setCustomValidity('Go and drink your milk kiddy!');
  ev.currentTarget.nextElementSibling.innerText = ev.currentTarget.validationMessage;
  birthdayDate.focus();
  ev.currentTarget.setCustomValidity('');
})

birthdayDate.addEventListener('change', function(ev) {
  ev.currentTarget.checkValidity();
})

textarea.addEventListener('keyup', function(ev) {
  ev.currentTarget.checkValidity();
  let charactersRemained = charactersAllowed - textarea.value.length;
  paragraphTextareaMessage.innerText = `You have ${charactersRemained} left!`;
  if (charactersRemained === 0) {
    paragraphTextareaMessage.innerText = `End of story`;
    paragraphTextareaMessage.style.color = 'red';
  } else {
    paragraphTextareaMessage.style.color = 'blue';
  }
})
