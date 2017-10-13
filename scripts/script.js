$(document).ready(function () {
    Foto();
});

function Foto() {
    var itens = $(".about-img");

    itens.find(".owl-carousel").owlCarousel({
        // autoplay: true,
        // autoplayTimeout: 3000,
        loop: true,
        nav: false,
        dots: true,
        items: 1
    });
}