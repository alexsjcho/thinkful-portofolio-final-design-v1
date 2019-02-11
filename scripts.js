"use strict";

function navHamburger() {
  $(".toggle").click(function() {
    $(".menu").toggleClass;
    $(this).toggleClass("nav-link");
  });
}

function menuItemListener() {
  $("a[href*=#]").bind("click", function(e) {
    e.preventDefault();
    let target = $(this).attr("href");
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(target).offset().top
        },
        1000,
        function() {
          location.hash = target;
        }
      );

    return false;
  });
}
