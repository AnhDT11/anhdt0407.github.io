/*!
 * anest js
 */

$(document).ready(function() {
    // Pushpin
    $(window).scroll(function() {
        var height = $(window).height() / 2 - 50;
        var y = $(window).scrollTop();

        if (y >= height) {
            $('#sub-nav').addClass('fixed-top');
            $('#sub-nav img').addClass('show-img');
            $('#sub-nav .navbar-nav').addClass('ml');
        }
        if (y < height) {
            $('#sub-nav').removeClass('fixed-top');
            $('#sub-nav img').removeClass('show-img');
            $('#sub-nav .navbar-nav').removeClass('ml');
        }
    });
});