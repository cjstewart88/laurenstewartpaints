$(document).ready(function() {
  $('.nav-item').click(function() {
    $('#mywork').hide();
    $('#about').hide();
    $('#'+$(this).data('section')).show();
  });
});
