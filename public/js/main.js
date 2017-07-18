//main.js
"use strict";


var update = document.getElementById('update');
var del = document.getElementById('delete');

//Fetch triggers PUT request
/* globals fetch */

update.addEventListener('click', function () {
  fetch('books', {
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'title': 'Darth Vader',
      'autor': 'I find your lack of faith disturbing.'
    });
  });
  .then(response => {
    if (response.ok) return response.json()
  });
  .then(data => {
    console.log(data);
  });
});

del.addEventListener('click', function () {
  fetch('books', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'title': 'Darth Vader'
    });
  });.then(function (response) {
    window.location.reload()
  });
});