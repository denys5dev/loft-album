var Flip = (function() {
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

  module.exports = Flip;

  

