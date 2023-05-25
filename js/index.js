// Custom JS by tim huang
$(document).ready(function() {
  $(document).on('mousemove', function(e) {
    $('#circle').css({
      left: e.pageX,
      top: e.pageY + 20
    });
  })
});