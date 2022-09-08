// ------ btn go up... ------
$(window).scroll(function () {
    if ($(this).scrollTop() > 150) $(".gotopbtn").addClass("active");
    else $(".gotopbtn").removeClass("active");
});
$(".gotopbtn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 400);
});

