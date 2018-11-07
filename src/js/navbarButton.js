$(document).ready(function(){
    $(".burger-menu__button").on('click', function(e) {
        e.preventDefault;
        $(this).toggleClass("burger-menu__button-active");
        $(".navbar-menu").toggleClass("active");
    })
})