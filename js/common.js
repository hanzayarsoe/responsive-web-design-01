$(document).ready(function () {
    $(".burger-btn").on("click", function(){
        $(".burger-btn").toggleClass("close-btn");
        $(".menu").toggleClass("active-menu");
    });
});