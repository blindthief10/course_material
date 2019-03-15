const removeOrAddClassToSelector = (firstSelector, secondSelector, nameClass) => {
  firstSelector.removeClass(nameClass);
  secondSelector.addClass(nameClass);
}

$(document).ready(() => {
  $('nav li').on('click', function(ev) {
    ev.stopPropagation();
    removeOrAddClassToSelector($('nav li'), $(this), 'clicked');
    removeOrAddClassToSelector($('nav li ul'), $(this).children('ul'), 'show');
  })

  $('body').on('click', function(ev) {
    $('nav li ul').removeClass('show');
  })
})
