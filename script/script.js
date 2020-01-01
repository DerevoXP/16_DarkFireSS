// $(window).on('beforeunload', function () { // прокручиваем страницу вверх при обновлении
//     $(window).scrollTop(0);
// });

$(function () { // это для календаря
    $('#datetimepicker6').datetimepicker({
        locale: 'en',
        format: 'DD.MM.YYYY',
        defaultDate: moment(),
        // debug: true // для отладки календаря; раскомменть, чтобы не исчезал 
    });
});

$('.fa-arrow-up').css('display', 'none'); // изначально стрелка вверх должна быть скрыта
$('.fa-arrow-down').click(function () { // выбор количества людей - показать список
    $('#passengersList').css('height', '176px');
    $('.fa-arrow-up').css('display', 'initial');
    $('.fa-arrow-down').css('display', 'none');
});

$('.fa-arrow-up').click(function () { // выбор количества людей - свернуть список
    $('.fa-arrow-up').css('display', 'none');
    $('.fa-arrow-down').css('display', 'initial');
    $('#passengersList').css('height', '0px');
});

$('#passengersList li').click(function () {
    $('#passengers').text($(this).text()); // передаём количество людей из списка в поле #passengers
    $('.fa-arrow-up').css('display', 'none');
    $('.fa-arrow-down').css('display', 'initial');
    $('#passengersList').css('height', '0px');
});

let sliderRotor = true; // крутящаяся хрень в верхнем левом углу
$('#miller').click(function () {
    if (sliderRotor) {
        setTimeout(function () { $('#rotor').attr('src', 'img/arrow.png') }, 100);
        $('#rotor').css('transform', 'rotate(180deg)');
        $('#headerCrutch').css('left', '0');
        sliderRotor = false;
    } else {
        setTimeout(function () { $('#rotor').attr('src', 'img/lines.png') }, 100);
        $('#rotor').css('transform', 'rotate(0deg)');
        $('#headerCrutch').css('left', '-250px');
        sliderRotor = true;
    }
})

$(window).resize(function () { // это чтобы верхняя плашычка не глючила при ресайзе, сука
    if ($('#nonagon').width() < 741) {
        $('#header').css({ backgroundColor: 'rgb(45, 45, 45)', height: '56px' });
        $('#logo').css('top', '11px');
        $('#boo').css('top', '27px');
    } else {
        if ($(window).scrollTop() == 0) {
            $('#header').css({ backgroundColor: 'rgba(21, 21, 21, 0.6)', height: '121px' });
            $('#logo').css('top', '31px');
            $('#boo').css('top', '41px');
        };
        if ($(window).scrollTop() > 0) {
            $('#header').css({ backgroundColor: 'rgb(45, 45, 45)', height: '91px' });
            $('#logo').css('top', '16px');
            $('#boo').css('top', '27px');
        };
    };
})

$(window).scroll(function () { // функция, которая в ответе за своевременную анимацию всего на свете
    if ($(window).scrollTop() == 0 && $('#nonagon').width() > 740) { // прозрачность хедера
        $('#header').css({ backgroundColor: 'rgba(21, 21, 21, 0.6)', height: '121px' });
        $('#logo').css('top', '31px');
        $('#boo').css('top', '41px');
    };
    if ($(window).scrollTop() > 0 && $('#nonagon').width() > 740) { // непрозрачность хедера
        $('#header').css({ backgroundColor: 'rgb(45, 45, 45)', height: '91px' });
        $('#logo').css('top', '16px');
        $('#boo').css('top', '27px');
    };
    if ($(document).scrollTop() + $(window).height() > $('#aboutUs').offset().top + 400) { // чекаем появление верхней границы элемента на экране при скролле, делаем небольшой отступ (+400)
        $('#aboutUsLeft').animate({ 'margin-left': '0' }, 1000);
    };
    if ($(document).scrollTop() + $(window).height() > $('#aboutUsLeft img').offset().top + $('#aboutUsLeft img').height() + 100) {
        if ($('#nonagon').width() > 740) { // здесь и далее ориентируемся на ширину #nonagon, хотя, в следующий раз разумнее завести для подобного отдельную переменную
            $('#aboutUsRight').animate({ 'margin-left': '0' }, 1000);
        } else {
            $('#aboutUsRight').animate({ 'margin': '0, 0, 0, 0' }, 1000);
        };
    };
    if ($(document).scrollTop() + $(window).height() > $('#offers').offset().top + 200) {
        $('#offersTop').animate({ 'margin-top': '0' }, 1000);
        $('#offersBottom').animate({ 'margin-top': '0' }, 1000);
    };
    if ($(document).scrollTop() + $(window).height() > $('#galleryTop').offset().top + 200) {
        $('#hereContents').animate({ 'margin-top': '0' }, 1000);
    };
    if ($(document).scrollTop() + $(window).height() > $('#galleryBottom').offset().top + 200) {
        $('#hereContents2').animate({ 'margin-top': '0' }, 1000);
    };
    if ($(document).scrollTop() + $(window).height() > $('#news').offset().top + 200) {
        $('#newsHeader').animate({ 'margin-top': '100' }, 1000);
        $('#nonagon').animate({ 'margin-top': '70' }, 1000); // если тут заменить .animate на .css и в файле стилей прописать элементу transition: 1s, 
        $('#triada').animate({ 'margin-top': '10' }, 1000); // то ломается затенение хедера при ресайзе (потому что хедер чекает размер #nonagon для корректного отображения)
        $('#diod').animate({ 'margin-top': '0' }, 1000); // прям как в анекдоте: "Если я тебе с левой ноги в правую почку уебу, у тебя какой глаз будет дёргаться?"
    };
});

$('.offersBox').mouseenter(function () { // это всплывающие при наведении кнопочки на фотках в секции offers 
    $(this).find('.offersHover').animate({ 'opacity': '1', 'margin-top': '20px' }, 250);
    $('.offersBox').mouseleave(function () {
        $(this).find('.offersHover').stop(); //  без этого, если подрыгать мышкой, всплывающие кнопки ведут себя странно
        $(this).find('.offersHover').animate({ 'opacity': '0', 'margin-top': '0px' }, 250);
    });
});

// Отсюда начало кода для секции OurMenu. Сперва три разных массива с контентом:

let ourMenu1 = [
    {
        price: '$99.99',
        productName: 'Some Name 1',
        productDescript: 'Some descript of our super-puper-duper product №1. Please, buy our piece of shit and be happy! Bla-bla-bla. Bla-bla-bla? Bla? Blya... Bla-bla-bla-bla. And many many other crazy words.',
    },
    {
        price: '$88.88',
        productName: 'Some Name 2',
        productDescript: 'Some descript of our super-puper-duper product №2. Please, buy our piece of shit and be happy! Bla-bla-bla. Bla-bla-bla? Bla? Blya... Bla-bla-bla-bla. And many many other crazy words.',
    },
    {
        price: '$77.77',
        productName: 'Some Name 3',
        productDescript: 'Some descript of our super-puper-duper product №3. Please, buy our piece of shit and be happy! Bla-bla-bla. Bla-bla-bla? Bla? Blya... Bla-bla-bla-bla. And many many other crazy words.',
    },
    {
        price: '$66.66',
        productName: 'Some Name 4',
        productDescript: 'Some descript of our super-puper-duper product №4. Please, buy our piece of shit and be happy! Bla-bla-bla. Bla-bla-bla? Bla? Blya... Bla-bla-bla-bla. And many many other crazy words.',
    },
];

let ourMenu2 = [
    {
        price: '$55.55',
        productName: 'Some Name 5',
        productDescript: 'Some descript of our super-puper-duper product №5. Please, buy our piece of shit and be happy! Bla-bla-bla. Bla-bla-bla? Bla? Blya... Bla-bla-bla-bla. And many many other crazy words.',
    },
    {
        price: '$44.44',
        productName: 'Some Name 6',
        productDescript: 'Some descript of our super-puper-duper product №6. Please, buy our piece of shit and be happy! Bla-bla-bla. Bla-bla-bla? Bla? Blya... Bla-bla-bla-bla. And many many other crazy words.',
    },
    {
        price: '$33.33',
        productName: 'Some Name 7',
        productDescript: 'Some descript of our super-puper-duper product №7. Please, buy our piece of shit and be happy! Bla-bla-bla. Bla-bla-bla? Bla? Blya... Bla-bla-bla-bla. And many many other crazy words.',
    },
    {
        price: '$22.22',
        productName: 'Some Name 8',
        productDescript: 'Some descript of our super-puper-duper product №8. Please, buy our piece of shit and be happy! Bla-bla-bla. Bla-bla-bla? Bla? Blya... Bla-bla-bla-bla. And many many other crazy words.',
    },
];

let ourMenu3 = [
    {
        price: '$11.11',
        productName: 'Some Name 9',
        productDescript: 'Some descript of our super-puper-duper product №5. Please, buy our piece of shit and be happy! Bla-bla-bla. Bla-bla-bla? Bla? Blya... Bla-bla-bla-bla. And many many other crazy words.',
    },
    {
        price: '$00.00',
        productName: 'Some Name 10',
        productDescript: 'Some descript of our super-puper-duper product №6. Please, buy our piece of shit and be happy! Bla-bla-bla. Bla-bla-bla? Bla? Blya... Bla-bla-bla-bla. And many many other crazy words.',
    },
    {
        price: '-$10',
        productName: 'Some Name 11',
        productDescript: 'Some descript of our super-puper-duper product №7. Please, buy our piece of shit and be happy! Bla-bla-bla. Bla-bla-bla? Bla? Blya... Bla-bla-bla-bla. And many many other crazy words.',
    },
    {
        price: '-$1 000 000',
        productName: 'Some Name 12',
        productDescript: 'You are winner!!! Send text "I am a winner!" for short number 666 and stay tuned! Bla-bla-bla. Bla-bla-bla? Bla? Blya... Bla-bla-bla-bla. And many many other crazy words.',
    },
];

// Теперь код для генерации самого "меню" по клику на кнопки сверху блока ourMenu

ourMenuBlocksGenerator(ourMenu1, but1) // формируем контент по умолчанию после загрузки страницы
$('#but1').click(() => ourMenuFadeOut(ourMenu1, '#but1'));
$('#but2').click(() => ourMenuFadeOut(ourMenu2, '#but2')); // чекаем нажатие кнопок навигации в секции ourMenu, передаём параметры в функцию
$('#but3').click(() => ourMenuFadeOut(ourMenu3, '#but3'));

function ourMenuFadeOut(stock, ident) { // можно было бы и без этой псевдоанимации, но так было в шаблоне https://www.templatemonster.com/ru/demo/53136.html
    $('#ourMenuBlocks').fadeOut(100);
    setTimeout(() => ourMenuBlocksGenerator(stock, ident), 100); // !!! без стрелочной не передаются параметры в вызываемую с задержкой функцию
};

$('#ourMenuNavigationCrutch h3').mouseover(function () { // эта чёртова портянка - чтобы кнопочки меню белели при наведении и серели обратно когда убрали курсор
    if ($(this).css('color') == 'rgb(128, 128, 128)') { // обычный &:hover в sass не работает - приоритет у скриптов функции ourMenuBlocksGenerator() выше, чем у css-свойств
        $(this).css('color', 'white'); // а как прописать hover непосредственно внутри тега (что было бы короче и изящнее) - я не знаю. Гугл невразумителен,
        $(this).mouseleave(function () { // а вариант типа <h3 id='but1' style = ":hover {color: white}">MAINS</h3> не работает,
            $(this).css('color', 'grey'); // потому что псевдоклассы можно прописывать только в css, как сказал Гайк.
        });
        $(this).mousedown(function () {
            $(this).mouseleave(function () {
                $(this).css('color', 'white');
            });
        });
    };
});

function ourMenuBlocksGenerator(stock, ident) { // первый параметр - имя массива, второй - id кнопки навигации секции ourMenu

    $('#ourMenuBlocks').html(''); // очищаем поле под новую генерацию
    $('#ourMenuNavigationCrutch').children().css('color', 'grey'); // обнуляем цвета нажатых ранее элементов меню
    $(ident).css('color', 'white'); // меняем цвет нажатого элемента меню

    for (i = 0; i < stock.length; i++) { // генерируем блоки текста

        let newMenuElem = $('<div>');
        newMenuElem.addClass('newMenuElem');

        let price = $('<p>');
        price.addClass('price');
        price.text(stock[i].price); // типа цена

        let productName = $('<p>');
        productName.addClass('productName');
        productName.text(stock[i].productName); // типа название блюда в меню или как его там

        let productDescript = $('<p>');
        productDescript.addClass('productDescript');
        productDescript.text(stock[i].productDescript); // типа интересное описание продукта

        newMenuElem.append(price);
        newMenuElem.append(productName);
        newMenuElem.append(productDescript);

        $('#ourMenuBlocks').append(newMenuElem);
    };
    $('#ourMenuBlocks').fadeIn(100); // псевдоанимация смены контента
};

// ниже - код галереи и модального окна галереи

$('.galleryImg').mouseenter(function () { // это всплывающие кнопочки zoom на фотках в секции gallery
    if ($('#nonagon').width() != 300) {
        $(this).find('.galleryHover').animate({ 'opacity': '1', 'margin-left': '0' }, 250);
        $('.galleryImg').mouseleave(function () {
            $(this).find('.galleryHover').stop(); //  без этого, если подрыгать мышкой, кнопки zoom тоже ведут себя странно
            $(this).find('.galleryHover').animate({ 'opacity': '0', 'margin-left': '-30px' }, 250);
        });
    };
});

let stockId; // эту переменную удобнее сделать глобальной

$('.smallRound').click(function () {
    let imgId = $(this).parent().parent().parent().attr('id'); // imgId это, тащемта, объект! 
    stockId = imgId.replace('img', ''); // а это уже строка, потому что конкатенация. ЧТобы сделать из этого число, впереди можно поставить +
    modelShower();
    $('#galleryModel').css('display', 'initial');
});

function modelShower() {
    handbreak = true;
    if (stockId == 1) {
        imgGalleryLeft = 5;
        imgGalleryCenter = 1;
        imgGalleryRight = 2;
    } else if (stockId == 5) {
        imgGalleryLeft = 4;
        imgGalleryCenter = 5;
        imgGalleryRight = 1;
    } else {
        imgGalleryLeft = + stockId - 1; // + в начале - чтобы привести строку к числу
        imgGalleryCenter = + stockId;
        imgGalleryRight = + stockId + 1;
    };
    triadaGallery(imgGalleryLeft, imgGalleryCenter, imgGalleryRight);
};

function triadaGallery(imgGalleryLeft, imgGalleryCenter, imgGalleryRight) {

    $('#gallerySlider').html("");

    let slideElemLeft = $('<div></div>');
    slideElemLeft.append($('<img>', { src: `img/gallery/0${imgGalleryLeft}.jpg` }));
    $('#gallerySlider').append(slideElemLeft);

    let slideElemCenter = $('<div></div>');
    slideElemCenter.append($('<img>', { src: `img/gallery/0${imgGalleryCenter}.jpg` }));
    $('#gallerySlider').append(slideElemCenter);

    let slideElemRight = $('<div></div>');
    slideElemRight.append($('<img>', { src: `img/gallery/0${imgGalleryRight}.jpg` }));
    $('#gallerySlider').append(slideElemRight);

    $('#gallerySlider').animate({ 'margin-left': '-150%' }, 0); // если вместо animate просто задать css-свойство, возникает баг из-за конфликта приоритетов с функциями ниже
};

let handbreak = true; // ручной тормоз для гиперактивных кликеров по кнопкам влево-вправо

$('#leftGalleryButton').click(() => galleryGoLeft());
$('#rightGalleryButton').click(() => galleryGoRight());

function galleryGoLeft() {
    if (handbreak) {
        handbreak = false;
        $('#gallerySlider').animate({ 'margin-left': '0' }, 1000);
        if (stockId == 1) {
            stockId = 5
        } else {
            stockId = + stockId - 1;
        };
        setTimeout(modelShower, 1000);
    };
    return;
};

function galleryGoRight() {
    if (handbreak) {
        handbreak = false;
        $('#gallerySlider').animate({ 'margin-left': '-300%' }, 1000);
        if (stockId == 5) {
            stockId = 1
        } else {
            stockId = + stockId + 1;
        };
        setTimeout(modelShower, 1000);
    };
    return;
};

let kuzdra; // обычная глокая куздра. Хуле тут комментировать?
let delta;
let xxx;
let xxx2;
let chekkker;

$('#galleryModelCrutch').mousedown(function (event) { // если выбирать #gallerySlider, то событие mouseup не происходит при перетаскивании курсора
    chekkker = true; // так же для #gallerySlider пришлось прописать в стилях 'pointer-events: none', иначе, опять же, баги при перетаскивании
    console.log('chekkker = true')
    xxx = event.clientX
    kuzdra = $(window).width() * 1.6; // коэффициэнты получены методом тыка и требуют более углубленного исследования для оптимизации
    $('#galleryModelCrutch').mousemove(function (event2) {
        if (chekkker == true) {
            xxx2 = event2.clientX
            delta = xxx2 - xxx;
            $('#gallerySlider').animate({ 'margin-left': - kuzdra * 0.75 + delta + 'px' }, 0);
        };
    });
});

$('#galleryModelCrutch').mouseup(function () {
    chekkker = false;
    console.log('chekkker = false')
    if (delta > 100) {
        galleryGoLeft()
    } else if (delta < -100) {
        galleryGoRight()
    } else {
        $('#gallerySlider').animate({ 'margin-left': '-150%' }, 100);
    }
});

$('#galleryCloser').click(function(){
    $('#galleryModel').css('display', 'none');
})

// конец модального окна и галереи, начало кнопок блока news

$('#triada1').css('background-color', 'green'); // задаём изначально зелёный цвет первой точки в навигационной триаде

let counter = 1;
$('#counter').text(counter); // для самого маленького экрана. Цифра в кружочке.
let triadaCrutch = 1;
let newsCrutch = $('#nonagon').width(); // эта и две предыдущая переменные нужны для корректировки положения блока news при ресайзе

$('#diodLeft').click(function () { // это - код для маленьких экранов ( < 575px ), он двигает news влево
    if (counter > 1) {
        $('#nonagonCrutch').css('margin-left', `${-300 * (counter - 2) + 'px'}`);
        counter = + counter - 1; // чесслово, туплю и не знаю, как сделать эту строку изящнее, оставив преобразование к числу
        $('#counter').text(counter);
        triadaCounter()
    };
});

$('#diodRight').click(function () {   // а это - код для маленьких экранов ( < 575px ), который двигает news вправо
    if (counter < 9) {
        $('#nonagonCrutch').css('margin-left', `${-300 * counter + 'px'}`);
        counter = + counter + 1;
        $('#counter').text(counter);
        triadaCounter()
    };
});

function triadaCounter() { // для адекватного ресайза news - синхронизируем counter и triadaCrutch
    if (counter < 4) {
        triadaCrutch = 1
    };
    if (counter == 4 || counter == 5 || counter == 6) {
        triadaCrutch = 2
    };
    if (counter == 7 || counter == 8 || counter == 9) {
        triadaCrutch = 3
    };
};

$(window).resize(function () { // ужасно нечитабельная функция для для корректировки положения блока news при ресайзе. Киберфорум - маздай!
    newsCrutchAlter = $('#nonagon').width(); // http://www.cyberforum.ru/javascript/thread2560354.html
    if (newsCrutchAlter != newsCrutch) {
        newsCrutch = $('#nonagon').width();
        if (newsCrutch == 300) {
            if (triadaCrutch == 1) {
                counter = 1;
                $('#counter').text(counter);
                $('#nonagonCrutch').css('margin-left', '0');
            };
            if (triadaCrutch == 2) {
                counter = 4;
                $('#counter').text(counter);
                $('#nonagonCrutch').css('margin-left', '-900px');
            };
            if (triadaCrutch == 3) {
                counter = 7;
                $('#counter').text(counter);
                $('#nonagonCrutch').css('margin-left', '-1800px');
            };
        }; // конец условий для минимальной ширины экрана
        if (newsCrutch == 510) {
            if (triadaCrutch == 1 || counter < 4) {
                firstGreen();
                $('#nonagonCrutch').css('margin-left', '0');
            };
            if (triadaCrutch == 2 || counter == 4 || counter == 5 || counter == 6) {
                secondGreen();
                $('#nonagonCrutch').css('margin-left', '-510px');
            };
            if (triadaCrutch == 3 || counter == 7 || counter == 8 || counter == 9) {
                thirdGreen();
                $('#nonagonCrutch').css('margin-left', '-1020px');
            };
        }; // конец условий для < 1999px
        if (newsCrutch == 740) {
            if (triadaCrutch == 1 || counter < 4) {
                firstGreen();
                $('#nonagonCrutch').css('margin-left', '0');
            };
            if (triadaCrutch == 2 || counter == 4 || counter == 5 || counter == 6) {
                secondGreen();
                $('#nonagonCrutch').css('margin-left', '-740px');
            };
            if (triadaCrutch == 3 || counter == 7 || counter == 8 || counter == 9) {
                thirdGreen();
                $('#nonagonCrutch').css('margin-left', '-1480px');
            };
        }; // конец условий для < 991px
        if (newsCrutch == 1000) {
            if (triadaCrutch == 1 || counter < 4) {
                firstGreen();
                $('#nonagonCrutch').css('margin-left', '0');
            };
            if (triadaCrutch == 2 || counter == 4 || counter == 5 || counter == 6) {
                secondGreen();
                $('#nonagonCrutch').css('margin-left', '-1000px');
            };
            if (triadaCrutch == 3 || counter == 7 || counter == 8 || counter == 9) {
                thirdGreen();
                $('#nonagonCrutch').css('margin-left', '-2000px');
            };
        }; // конец условий для < 767px
        if (newsCrutch == 1210) {
            if (triadaCrutch == 1 || counter < 4) {
                firstGreen();
                $('#nonagonCrutch').css('margin-left', '0');
            };
            if (triadaCrutch == 2 || counter == 4 || counter == 5 || counter == 6) {
                secondGreen();
                $('#nonagonCrutch').css('margin-left', '-1210px');
            };
            if (triadaCrutch == 3 || counter == 7 || counter == 8 || counter == 9) {
                thirdGreen();
                $('#nonagonCrutch').css('margin-left', '-2420px');
            };
        };
    };
}); // конец ужасно нечитабельной функции

function firstGreen() { // ниже - три функции для озеленения кнопочек news при нажатии
    $('#triada').children().css('background-color', 'grey');
    $('#triada1').css('background-color', 'green');
};

function secondGreen() {
    $('#triada').children().css('background-color', 'grey');
    $('#triada2').css('background-color', 'green');
};

function thirdGreen() {
    $('#triada').children().css('background-color', 'grey');
    $('#triada3').css('background-color', 'green');
}

$('#triada1').click(function () { // ниже - три функции для анимации блоков news
    firstGreen();
    $('#nonagonCrutch').css('margin-left', '0');
    triadaCrutch = 1;
});

$('#triada2').click(function () {
    secondGreen();
    triadaCrutch = 2;
    if ($('#nonagon').width() == 1210) { // чекаем скролл новостного блока при изменённой ширине окна
        $('#nonagonCrutch').css('margin-left', '-1210px');
    };
    if ($('#nonagon').width() == 1000) {
        $('#nonagonCrutch').css('margin-left', '-1000px');
    };
    if ($('#nonagon').width() == 740) {
        $('#nonagonCrutch').css('margin-left', '-740px');
    };
    if ($('#nonagon').width() == 510) {
        $('#nonagonCrutch').css('margin-left', '-510px');
    };

});
$('#triada3').click(function () {
    thirdGreen();
    triadaCrutch = 3;
    if ($('#nonagon').width() == 1210) {
        $('#nonagonCrutch').css('margin-left', '-2420px');
    };
    if ($('#nonagon').width() == 1000) {
        $('#nonagonCrutch').css('margin-left', '-2000px');
    };
    if ($('#nonagon').width() == 740) {
        $('#nonagonCrutch').css('margin-left', '-1480px');
    };
    if ($('#nonagon').width() == 510) {
        $('#nonagonCrutch').css('margin-left', '-1020px');
    };
});