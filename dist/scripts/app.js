

if (window.jQuery) {  
  console.log('hello');
} else {
  console.log('goodbye');
}

$(document).ready(function() {

  $(".dropdown-button").click(function() {
    var $button, $menu;
    $button = $(this);
    $menu = $button.siblings(".dropdown-menu");
    $menu.toggleClass("show-menu");
    
    $menu.children("li").click(function() {
      $menu.removeClass("show-menu");
      $button.html($(this).html());
    });
  });


  // backToTop button
  var btnToTop = $('#btnToTop'),
  offset=250,
  scrollDuration=300;

  $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
      btnToTop.fadeIn(500);
    } else {
      btnToTop.fadeOut(500);
    }
  });

  btnToTop.click(function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0}, scrollDuration);
  });

  // Modal
  $(function() {
    $("#modal-1").on("change", function() {
      if ($(this).is(":checked")) {
        $("body").addClass("modal-open");
      } else {
        $("body").removeClass("modal-open");
      }
    });

    $(".modal-fade-screen, .modal-close").on("click", function() {
      $(".modal-state:checked").prop("checked", false).change();
    });

    $(".modal-inner").on("click", function(e) {
      e.stopPropagation();
    });
  });

});
