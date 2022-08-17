let count = 3;

const intervlID = setInterval(countDown, 1000);

function countDown() {

  if (count > 0) {
    console.log(count);
    count--;
  } else {
    console.log('Blast off!');
    clearInterval(intervlID);
  }
}
