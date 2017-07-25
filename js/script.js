// NAV
$(document).ready(function(){
  $('.handle').on('click', function(){
    $('nav ul').toggleClass('show');
  });
});


// ARROW UP
$(document).ready(function() {
  var pageTop = $('.top');

  $(window).on('scroll', function() {
    var self = $(this),
      height = self.height(),
      top = self.scrollTop();

    if(top > height) {
      if(!pageTop.is(':visible')) {
        pageTop.show();
      }
    } else {
      pageTop.hide();
    }
  });
});
