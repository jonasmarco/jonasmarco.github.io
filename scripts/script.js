$(document).ready(function () {
    foto();
    loadTema();
});

//Foto

function foto() {
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

// Funções de Cookies

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


// Iniciando tema

function loadTema() {
    if (getCookie('tema') === 'dark') {
        document.body.classList.toggle('dark');
    }

    document.getElementById("btn-night-mode").addEventListener("click", function () {
        document.body.classList.toggle('dark');

        if (document.body.classList.contains('dark')) {
            setCookie('tema', 'dark', 365);
        } else {
            setCookie('tema', 'light', 365);
        }
    });
}