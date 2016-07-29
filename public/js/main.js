$('.login__form').addClass('load');
$('.login__title').addClass('load-title');

var auth = require('./modules/auth.js');
auth.init();

var flip = require('./modules/flip.js');
flip.init();

var editPupup = require('./modules/edit-popup.js');
editPupup.init();