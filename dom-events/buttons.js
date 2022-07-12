function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

var clickButtonEl = document.querySelector('.click-button');
clickButtonEl.addEventListener('click', handleClick, false);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

var hoverButtonEl = document.querySelector('.hover-button');
hoverButtonEl.addEventListener('mousemove', handleMouseover, false);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}

var dblClickButtonEl = document.querySelector('.double-click-button');
dblClickButtonEl.addEventListener('dblclick', handleDoubleClick);
