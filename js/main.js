"use strict";

(function ($) {
  // Open Mobile Menu
  if ($(".menu-trigger").length) {
    $(".menu-trigger").on("click", function () {
      $(this).toggleClass("active");
      $(".site__header .nav").slideToggle(200);
    });
  }
})(jQuery);
