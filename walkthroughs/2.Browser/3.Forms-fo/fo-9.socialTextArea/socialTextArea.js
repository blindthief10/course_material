let textarea = document.querySelector('textarea');
let fb = document.querySelector('#fb');
let tw = document.querySelector('#tw');

let acceptedFacebookRegex = /\b(fb|facebook)\b/ig;
let acceptedTwitterRegex = /\btw(itter)?\b/ig;

let checkMatches = function(socialRegex, elem, textFromTextarea) {
  if (socialRegex.test(textFromTextarea)) {
    elem.innerText = `Shares: ${textFromTextarea.match(socialRegex).length}`;
    elem.style.display = 'inline-block';
  } else {
    elem.style.display = 'none';
  }
}

textarea.addEventListener('keyup', function(ev) {
  let usersText = ev.currentTarget.value;

  checkMatches(acceptedFacebookRegex, fb, usersText);
  checkMatches(acceptedTwitterRegex, tw, usersText);
})
