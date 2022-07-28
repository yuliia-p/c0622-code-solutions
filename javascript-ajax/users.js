var userList = document.querySelector('#user-list');
console.log('userList', userList);

function getUsers() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log('xhr.status: ', xhr.status);
    console.log('xhr.response', xhr.response);

    for (var i = 0; i < xhr.response.length; i++) {
      var newLi = document.createElement('li');
      newLi.textContent = xhr.response[i].name;
      userList.appendChild(newLi);
      console.log('newLi: ', newLi);
    }
  });
  xhr.send();
}
getUsers();
