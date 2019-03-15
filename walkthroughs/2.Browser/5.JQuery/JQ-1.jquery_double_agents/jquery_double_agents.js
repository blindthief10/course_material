$(document).ready(() => {
  $('button').on({
    mouseenter: function(event) {
      $(this).html('Welcome! Stay forever!');
    },
    mouseleave: function() {
      $(this).html('Don\'t leave me this way!');
    }
  })
})
