var elContainer = document.querySelector('.tab-container');
var tabEl = document.querySelectorAll('.tab');
var viewEl = document.querySelectorAll('.view');

elContainer.addEventListener('click', clickTab);

function clickTab(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < tabEl.length; i++) {
      if (tabEl[i] === event.target) {
        tabEl[i].className = 'tab' + ' active';
      } else {
        tabEl[i].className = 'tab';
      }
    }
    var dataView = event.target.getAttribute('data-view');

    for (var x = 0; x < viewEl.length; x++) {
      if (viewEl[x].getAttribute('data-view') === dataView) {
        viewEl[x].className = 'view';
      } else {
        viewEl[x].className = 'view' + ' hidden';
      }
    }
  }
}
