// clients slider 

var index = 0;
var links = new Array (
    "images/client.png", 
    "images/henkel.png" 
); 

function slide(v) {
    var element = document.getElementById("client");
    index += 1 * v;
       
    if (index > links.length - 1) {
        index = 0;
    }
    else if (index < 0) {
        index = links.length - 1;
    }

    element.src = links[index];
}

// end

// MENU 

/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция ( "слайдер" по кнопкам ) */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("card");
    var buttons = document.getElementsByClassName("menu__button");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < buttons.length; i++) {
        buttons[i].className = buttons[i].className.replace(" button__active", "");
    }

    slides[slideIndex - 1].style.display = "flex";
    buttons[slideIndex - 1].className += " button__active";
}

//end

var slideIndex2 = 1;
showSlides2(slideIndex2);

function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
    var i;
    var slides2 = document.getElementsByClassName("partnership_card");
    var buttons2 = document.getElementsByClassName("partnership__button");

    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }

    for (i = 0; i < buttons2.length; i++) {
        buttons2[i].className = buttons2[i].className.replace(" partnership__button-active", "");
    }

    slides2[slideIndex2 - 1].style.display = "flex";
    buttons2[slideIndex2 - 1].className += " partnership__button-active";
}

// building callback "popup"

var degustation = document.createElement('div');

function buildDegustation() {
    degustation.className = 'page__wrapper';
    degustation.innerHTML = '<div class="degustation_form__wrapper"><form class="degustation__form" action="degustation.php" method="POST" id="degustation__form"><input class="order__form__input order__form__input1" placeholder="Ім’я" type="text" name="name" id="1" required><input class="order__form__input order__form__input2" placeholder="Телефон(Без +38)" type="tel" pattern="[0-9]{10}" name="phone" id="2" required><input class="order__form__input order__form__input3" placeholder="E-mail (не обов’язково)" type="email" name="email" id="3"><button class="order__form__button" type="submit">ЗАЛИШИТИ ЗАМОВЛЕННЯ</button></form><button onclick="closeDegustation();" class="popup__close" type="button"><img srcset="images/close.png 1.5x" alt=""></button></div>';
}

function showDegustation() {
    buildDegustation();
    main.append(degustation);
}

function closeDegustation() {
    degustation.remove();
}

// 

var freeChoice = document.createElement('div');

function buildFreeChoice() {
    freeChoice.className = 'page__wrapper';
    freeChoice.innerHTML = '<div class="degustation_form__wrapper"><form class="degustation__form" action="freechoice.php" method="POST" id="freechoice__form"><input class="order__form__input order__form__input1" placeholder="Ім’я" type="text" name="name" id="1" required><input class="order__form__input order__form__input2" placeholder="Телефон(Без +38)" type="tel" pattern="[0-9]{10}" name="phone" id="2" required><input class="order__form__input order__form__input3" placeholder="E-mail (не обов’язково)" type="email" name="email" id="3"><button class="order__form__button" type="submit">ЗАЛИШИТИ ЗАМОВЛЕННЯ</button></form><button onclick="closeFreeChoice();" class="popup__close" type="button"><img srcset="images/close.png 1.5x" alt=""></button></div>';
}

function showFreeChoice() {
    buildFreeChoice();
    main.append(freeChoice);
}

function closeFreeChoice() {
    freeChoice.remove();
}

//

var preorder = document.createElement('div');

function buildPreorder() {
    preorder.className = 'page__wrapper';
    preorder.innerHTML = '<div class="degustation_form__wrapper"><form class="degustation__form" action="preorder.php" method="POST" id="preorder__form"><input class="order__form__input order__form__input1" placeholder="Ім’я" type="text" name="name" id="1" required><input class="order__form__input order__form__input2" placeholder="Телефон(Без +38)" type="tel" pattern="[0-9]{10}" name="phone" id="2" required><input class="order__form__input order__form__input3" placeholder="E-mail (не обов’язково)" type="email" name="email" id="3"><button class="order__form__button" type="submit">ЗАЛИШИТИ ЗАМОВЛЕННЯ</button></form><button onclick="closePreorder();" class="popup__close" type="button"><img srcset="images/close.png 1.5x" alt=""></button></div>';
}

function showPreorder() {
    buildPreorder();
    main.append(preorder);
}

function closePreorder() {
    preorder.remove();
}

//

var menu = document.createElement('div');

function buildMenu() {
    menu.className = 'page__wrapper';
    menu.innerHTML = '<div class="degustation_form__wrapper"><form class="degustation__form" action="menu.php" method="POST" id="menu__form"><input class="order__form__input order__form__input1" placeholder="Ім’я" type="text" name="name" id="1" required><input class="order__form__input order__form__input2" placeholder="Телефон(Без +38)" type="tel" pattern="[0-9]{10}" name="phone" id="2" required><input class="order__form__input order__form__input3" placeholder="E-mail (не обов’язково)" type="email" name="email" id="3"><button class="order__form__button" type="submit">ЗАЛИШИТИ ЗАМОВЛЕННЯ</button></form><button onclick="closeMenu();" class="popup__close" type="button"><img srcset="images/close.png 1.5x" alt=""></button></div>';
}

function showMenu() {
    buildMenu();
    main.append(menu);
}

function closeMenu() {
    menu.remove();
}

//

var snack = document.createElement('div');

function buildSnack() {
    snack.className = 'page__wrapper';
    snack.innerHTML = '<div class="degustation_form__wrapper"><form class="degustation__form" action="snack.php" method="POST" id="snack__form"><input class="order__form__input order__form__input1" placeholder="Ім’я" type="text" name="name" id="1" required><input class="order__form__input order__form__input2" placeholder="Телефон(Без +38)" type="tel" pattern="[0-9]{10}" name="phone" id="2" required><input class="order__form__input order__form__input3" placeholder="E-mail (не обов’язково)" type="email" name="email" id="3"><button class="order__form__button" type="submit">ЗАЛИШИТИ ЗАМОВЛЕННЯ</button></form><button onclick="closeSnack();" class="popup__close" type="button"><img srcset="images/close.png 1.5x" alt=""></button></div>';
}

function showSnack() {
    buildSnack();
    main.append(snack);
}

function closeSnack() {
    snack.remove();
}

//

var partner = document.createElement('div');

function buildPartner() {
    partner.className = 'page__wrapper';
    partner.innerHTML = '<div class="degustation_form__wrapper"><form class="degustation__form" action="partner.php" method="POST" id="partner__form"><input class="order__form__input order__form__input1" placeholder="Ім’я" type="text" name="name" id="1" required><input class="order__form__input order__form__input2" placeholder="Телефон(Без +38)" type="tel" pattern="[0-9]{10}" name="phone" id="2" required><input class="order__form__input order__form__input3" placeholder="E-mail (не обов’язково)" type="email" name="email" id="3"><button class="order__form__button" type="submit">ЗАЛИШИТИ ЗАМОВЛЕННЯ</button></form><button onclick="closePartner();" class="popup__close" type="button"><img srcset="images/close.png 1.5x" alt=""></button></div>';
}

function showPartner() {
    buildPartner();
    main.append(partner);
}

function closePartner() {
    partner.remove();
}

//end

// changing partnership/media image 

function partners() {
    var pic = document.getElementById("partner__media");
    pic.setAttribute("src", "images/partners.png")
}

function media() {
    var pic = document.getElementById("partner__media");
    pic.setAttribute("src", "images/media.png")
}


// animated scroll

$(document).ready(function(){
    $("#page-footer__menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});
$(document).ready(function(){
    $("#main_section1_links").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

// end 

// animated slider 

$(document).ready(function() {
    $(".slider").each(function() {
   
    var repeats = 9999, // сколько раз автоматически крутит
    interval = 3, // интервал в секундах
    repeat = true, 
    slider = $(this),
    repeatCount = 0,
    elements = $(slider).find("li").length;
   
    $(slider)
    .append("<div class='nav'></div>")
    .find("li").each(function() {
    $(slider).find(".nav").append("<span data-slide='"+$(this).index()+"'></span>");
    $(this).attr("data-slide", $(this).index());
    })
    .end()
    .find("span").first().addClass("on");
   
    // add timeout
   
    if (repeat) {
    repeat = setInterval(function() {
    if (repeatCount >= repeats - 1) {
    window.clearInterval(repeat);
    }
   
    var index = $(slider).find('.on').data("slide"),
    nextIndex = index + 1 < elements ? index + 1 : 0;
   
    sliderJS(nextIndex, slider);
   
    repeatCount += 1;
    }, interval * 1000);
    }
   
    });
    });
   
   function sliderJS(index, slider) { // slide
    var ul = $(slider).find("ul"),
    bl = $(slider).find("li[data-slide=" + index + "]"),
    step = $(bl).width();
   
    $(slider)
    .find("span").removeClass("on")
    .end()
    .find("span[data-slide=" + index + "]").addClass("on");
   
    $(ul).animate({
    marginLeft: "-" + step * index
    }, 500);
   }
   
   $(document).on("click", ".slider .nav span", function(e) { // slider click navigate
    e.preventDefault();
    var slider = $(this).closest(".slider"),
    index = $(this).data("slide");
   
    sliderJS(index, slider);
   });

// end



