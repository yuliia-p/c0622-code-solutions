var arrayBooks = [
  {
    autor: 'Colleen Hoover',
    title: 'It Ends with Us',
    isbn: '978-3-16-148410-0'
  },
  {
    autor: 'Haruki Murakami',
    title: 'Blind Willow, Sleeping Woman',
    isbn: '978-3-16-148410-1'
  },
  {
    autor: 'The Goldfinch',
    title: 'Donna Tartt',
    isbn: '978-3-16-148410-2'
  }
];

var jsonStr = JSON.stringify(arrayBooks);
console.log(jsonStr);

var jsonStuStr = '{"id":3, "name":"Yuliia"}';
console.log(jsonStuStr);

var objStu = JSON.parse(jsonStuStr);
console.log(objStu);
