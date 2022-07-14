var elList = document.querySelector('.task-list');

function taskListClick(event) {
  // console.log(event.target);
  // console.log(event.target.tagName);

  if (event.target.tagName === 'BUTTON') {
    var closestEl = event.target.closest('.task-list-item');
    console.log(closestEl);
    closestEl.remove();
  }

}

elList.addEventListener('click', taskListClick);
