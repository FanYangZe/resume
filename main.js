$(function () {

    $("#ctrl1").click(function () {
        changeGallery("gallery1");
        backgroundColor('ctrl1');
    });
    $("#ctrl2").click(function () {
        changeGallery("gallery2");
        backgroundColor('ctrl2');
    });

    $("#close-screen").click(function () {
        $("#bg-mask").css("display", "none");
        $("#screen").fadeOut();
    });

});

function showScreen(imgName) {
    $(".image-show").css("display", "none");
    $("#" + imgName).css("display", "inline-block");
    $("#bg-mask").css("display", "block");
    $("#screen").fadeIn();
}

function changeGallery(galleryID) {
    console.log($(this));
    $("div.gallery").css("display", "none");
    $("#" + galleryID).fadeIn("slow");
}

function backgroundColor(listID) {
    $("button.slider-menu").css("background-color", "#3D3D3D");
    $("#" + listID).css("background-color", "#898989");
}