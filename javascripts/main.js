$(document).ready(function() {
  $('.nav-item').click(function() {
    $('.nav-item').removeClass('active');
    $(this).addClass('active');
    $('section').hide();
    $('#'+$(this).data('section')).show();
  });
});
