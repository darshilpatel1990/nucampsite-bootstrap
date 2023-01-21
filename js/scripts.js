$(function() {
    // TOOLTIP
    $("#reserveButton").tooltip({
        title: "Or call us at 1-206-555-1234",
        placement: "bottom"
    });
    
    // CAROUSEL
    $(".carousel").carousel({interval: 2000});
    $("#carouselButton").click(function() {
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });

    // MODAL
    $("#reserveButton").click(function() {
        $("#reserveModal").modal("show");
    });

    $("#loginButton").click(function() {
        $("#loginModal").modal("show");
    });
});
