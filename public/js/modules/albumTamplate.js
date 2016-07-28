'use strict';

var promise = new Promise(function (resolve,reject) {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "album.json", true);
  xhr.onloadend = function() {

  if (xhr.status >= 400) {
    alert("соединение не установлено")
  } else {
    resolve(xhr.responseText);
    }
  };

  xhr.send();
});

promise.then(function(xhr){
  function supportsTemplate() {
    return 'content' in document.createElement('template');
  }

  if (supportsTemplate()) {
    var t = document.querySelector('#mytemplate-album'); // сам шаблон
    var templateBody = document.querySelector('#template-album'); // куда вставляем
    var json = JSON.parse(xhr).photo; // парсим JSON пришедший из Промиса

    json.forEach(function (item) {
      t.content.querySelector('.album__image').src = item.url; // вставка главного изображения
      t.content.querySelector('.album__content-comments').innerText = item.comments; // вставка комментариев
      t.content.querySelector('.album__content-like').innerText = item.like; // вставка лайков
      t.content.querySelector('.album__name').innerText = item.photoName; // вставка текста подвала

      templateBody.appendChild(t.content.cloneNode(true));
    });
  } else {
  // для старого подхода
  }
}, function () {
  alert("json not found");
});