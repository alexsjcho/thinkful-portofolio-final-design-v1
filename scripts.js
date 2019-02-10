"use strict";

// function navHamMenu() {
//   $(".toggle-button").click(function() {
//     $(".site-nav").toggleClass
//     $(this).toggleClass("open");
//   });
// }

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
