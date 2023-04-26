$(document).ready(function() {
  $('.tab-menu ul li a').click(function() {
    let tab_id = $(this).attr('href');

    $('.tab-menu ul li').removeClass('active');
    $('.tab-content').removeClass('active');

    $(this).parent().addClass('active');
    $(tab_id).addClass('active');
  });
});