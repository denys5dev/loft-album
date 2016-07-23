$('.login__form').addClass('load');
$('.login__title').addClass('load-title');

var flip = (function() {
  function init() {
    _setUpListners();
  };

  function _setUpListners() {
    $('#auth-btn').on('click', _formFlip);
    $('#signin-btn').on('click', _formFlip);
  };

  var _formFlip = function(e){
    e.preventDefault();
    var flip = $('.flip');
    flip.toggleClass('flipping');
  };

  return {
    init: init
  };

})();

flip.init();

//logout
var logout = (function() {

  function init() {
    _setUpListners();
  };

  function _setUpListners() {
    $('#logout').on('click', _logout);
  };

  var _logout = function(e) {
    e.preventDefault();
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return {
    init: init
  }
})();

logout.init();