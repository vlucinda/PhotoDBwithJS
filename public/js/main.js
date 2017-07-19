//main.js
/*jshint esversion: 6 */
"use strict";


var update = document.getElementById('update');
var del = document.getElementById('delete');


//Fetch triggers PUT request
/* globals fetch */

update.addEventListener('click', function () {
  fetch('/public/index.html', {
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        'description' : 'Levant',
    });
  });
    //fetch "ok" method to see if update worked
  .then(response => {
    if (response.ok) return response.json()
  });
  .then(data => {
    console.log(data);
      window.location.reload(true);
  });
});

del.addEventListener('click', function () {
  fetch('books', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'description': 'tldr'
    });
  });
   .then(res => {
    if (res.ok) return res.json();
  });
  .then(data => {
    console.log(data)
    window.location.reload();
  });
});