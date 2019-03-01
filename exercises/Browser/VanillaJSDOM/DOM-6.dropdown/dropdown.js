// Take notice that you may want to optimize this code since there is a lot
// of repetitive stuff going on here! (maybe you can do in a more reusable way!)

document.addEventListener('DOMContentLoaded', function() {
  const itemClicks = document.querySelectorAll('nav > li');
  const allLists = document.querySelectorAll('nav > li > ul');

  for (let itemClick of itemClicks) {

    itemClick.addEventListener('click', function(event) {
      event.stopPropagation();
      for (let item of itemClicks) {
        item.classList.contains('clicked') ? item.classList.remove('clicked') : null
      }
      event.target.classList.add('clicked');
      const correspondingList = event.target.children[0];

      for (let singleList of allLists) {
        if (singleList.classList.contains('show')) {
          singleList.classList.remove('show');
          break;
        }
      }
      correspondingList.classList.add('show');
    })
  }

  document.body.addEventListener('click', function(ev) {
    console.log('clicked the body');
    for (let i = 0; i < allLists.length; i++) {
      if (allLists[i].classList.contains('show')) {
        allLists[i].classList.remove('show');
        itemClicks[i].classList.remove('clicked');
      }
    }
  })

})
