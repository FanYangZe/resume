$(function () {

    $("#ctrl1").click(function () {
        changeGallery("gallery1");
        backgroundColor('ctrl1');
    });
    $("#ctrl2").click(function () {
        changeGallery("gallery2");
        backgroundColor('ctrl2');
    });
    $("#ctrl3").click(function () {
        changeGallery("gallery3");
        backgroundColor('ctrl3');
    });

});

function changeGallery(galleryID) {
    console.log($(this));
    $("div.gallery").css("display", "none");
    $("#" + galleryID).fadeIn("slow");
}

function backgroundColor(listID) {
    $("button.slider-menu").css("background-color", "#3D3D3D");
    $("#" + listID).css("background-color", "#898989");
}