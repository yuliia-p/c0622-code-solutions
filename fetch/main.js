fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data =>
    console.log(data));

fetch('https://pokeapi.co/api/v2/berry/23/')
  .then(response => response.json())
  .then(data =>
    console.log(data));

fetch('https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=oN0z6slOegD5zjvuGpGHt1uNGJS1uEGE')
  .then(response => response.json())
  .then(data =>
    console.log(data));

fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=oN0z6slOegD5zjvuGpGHt1uNGJS1uEGE')
  .then(response => response.json())
  .then(data =>
    console.log(data));
