$(document).ready(function(event) {
  $('form').on('submit', ev => {
    ev.preventDefault();
    const paragraph = document.createElement('P');
    const spanCloseButton = document.createElement('SPAN');
    spanCloseButton.innerText = 'X';
    paragraph.innerText = $('input').val();
    paragraph.append(spanCloseButton);
    $('section').append(paragraph);
    $('input').val('');

    $('span').on('click', function(ev) {
      $(this).parent().remove();
    })
  })
})
