$( document ).ready(function() {
    $(window).scroll(function () {
        $(".navbar").offset() && ($(".navbar").offset().top > 50 ? $(".main-navigation").addClass("scrolled-navbar") : $(".main-navigation").removeClass("scrolled-navbar"))
    });
});
