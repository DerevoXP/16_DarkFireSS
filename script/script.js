$(window).on('beforeunload', function () { // прокручиваем страницу вверх при обновлении
    $(window).scrollTop(0);
});

$(function () {
    $('#datetimepicker2').datetimepicker({
        locale: 'en',
        format: 'DD.MM.YYYY',
        defaultDate: moment(),
        maxDate: moment()
    });
});

let sliderRotor = true; // крутящаяся хрень в верхнем левом углу
$('#miller').click(function(){
    if (sliderRotor) {
        setTimeout(function(){$('#rotor').attr('src', 'img/arrow.png')}, 100);
        $('#rotor').css('transform', 'rotate(180deg)');
        $('#headerCrutch').css('left', '0');
        sliderRotor = false;
    } else {
        setTimeout(function(){$('#rotor').attr('src', 'img/lines.png')}, 100);
        $('#rotor').css('transform', 'rotate(0deg)');
        $('#headerCrutch').css('left', '-250px');
        sliderRotor = true;
    }
})

$(window).resize(function() { // это чтобы верхняя плашычка не глючила при ресайзе, сука
    if ($('#nonagon').width() < 741) {
        $('#header').css({backgroundColor: 'rgb(45, 45, 45)', height: '56px'});
        $('#logo').css('top', '11px');
        $('#boo').css('top', '27px');
    } else {
        if ($(window).scrollTop() == 0) {
            $('#header').css({backgroundColor: 'rgba(21, 21, 21, 0.6)', height: '121px'});
            $('#logo').css('top', '31px');
            $('#boo').css('top', '41px');
        };
        if ($(window).scrollTop() > 0) {
            $('#header').css({backgroundColor: 'rgb(45, 45, 45)', height: '91px'});
            $('#logo').css('top', '16px');
            $('#boo').css('top', '27px');
        };
    };
})

$(window).scroll(function () { // функция, которая в ответе за своевременную анимацию всего на свете
    if ($(window).scrollTop() == 0 && $('#nonagon').width() > 740) {
        $('#header').css({backgroundColor: 'rgba(21, 21, 21, 0.6)', height: '121px'});
        $('#logo').css('top', '31px');
        $('#boo').css('top', '41px');
    };
    if ($(window).scrollTop() > 0 && $('#nonagon').width() > 740) {
        $('#header').css({backgroundColor: 'rgb(45, 45, 45)', height: '91px'});
        $('#logo').css('top', '16px');
        $('#boo').css('top', '27px');
    };
    if ($(document).scrollTop() + $(window).height() > $('#aboutUs').offset().top + 300) { // чекаем появление верхней границы элемента на экране при скролле, делаем небольшой отступ
        $('#aboutUsLeft').animate({ 'margin-left': '0' }, 1000);
    };
    if ($(document).scrollTop() + $(window).height() > $('#aboutUsLeft img').offset().top + $('#aboutUsLeft img').height() + 200) {
        if ($('#nonagon').width() > 740) { // ориентируемся на ширину нонагона, завязанного на ширину аппендицита, лол
            $('#aboutUsRight').animate({ 'margin-left': '0' }, 1000);
        } else {
            $('#aboutUsRight').animate({ 'margin': '0, 0, 0, 0' }, 1000); // по какой-то причине margin-right не срабатывал, пришлось этот костыль ставить
        };
    };
    if ($(document).scrollTop() + $(window).height() > $('#offers').offset().top + 300) {
        $('#offersTop').animate({ 'margin-top': '0' }, 1000);
        $('#offersBottom').animate({ 'margin-top': '0' }, 1000);
    };
    if ($(document).scrollTop() + $(window).height() > $('#galleryTop').offset().top + 300) {
        $('#hereContents').animate({ 'margin-top': '0' }, 1000);
    };
    if ($(document).scrollTop() + $(window).height() > $('#galleryBottom').offset().top + 300) {
        $('#hereContents2').animate({ 'margin-top': '0' }, 1000);
    };
    if ($(document).scrollTop() + $(window).height() > $('#news').offset().top + 300) {
        $('#newsHeader').animate({ 'margin-top': '100' }, 1000);
        $('#nonagon').animate({ 'margin-top': '70' }, 1000);
    };
});

$('.offersBox').mouseenter(function () { // это всплывающие кнопочки на фотках в секции offers 
        $(this).find('.offersHover').animate({ 'opacity': '1', 'margin-top': '20px' }, 250);
    $('.offersBox').mouseleave(function () {
        $(this).find('.offersHover').stop(); //  без этого, если подрыгать мышкой, кнопки ведут себя странно
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
$('#but2').click(() => ourMenuFadeOut(ourMenu2, '#but2')); // чекаем нажатие кнопок навигации в секции ourMenu
$('#but3').click(() => ourMenuFadeOut(ourMenu3, '#but3'));

function ourMenuFadeOut(stock, ident) { // можно было бы и без этой псевдоанимации, но так было в шаблоне
    $('#ourMenuBlocks').fadeOut(100);
    setTimeout(() => ourMenuBlocksGenerator(stock, ident), 100); // без стрелочной не передаются параметры в вызываемую с задержкой функцию
};

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
        productDescript.text(stock[i].productDescript); // интересное описание продукта

        newMenuElem.append(price);
        newMenuElem.append(productName);
        newMenuElem.append(productDescript);

        $('#ourMenuBlocks').append(newMenuElem);
    };
    $('#ourMenuBlocks').fadeIn(100); // псевдоанимация смены контента
};

// ниже - код галереи и модального окна галереи

$('.galleryImg').mouseenter(function () { // это всплывающие кнопочки на фотках в секции gallery
    if ($('#nonagon').width() != 300) {
        $(this).find('.galleryHover').animate({ 'opacity': '1', 'margin-left': '0' }, 250);
        $('.galleryImg').mouseleave(function () {
        $(this).find('.galleryHover').stop(); //  без этого, если подрыгать мышкой, кнопки ведут себя странно
        $(this).find('.galleryHover').animate({ 'opacity': '0', 'margin-left': '-30px' }, 250);
        });
    };
});

$('.smallRound').click(function () {
    let imgId = $(this).parent().parent().parent().attr('id'); // imgId это, тащемта, объект, но после конкатенации (+ '.jpg') автоматически становится строкой
    let url = (imgId + '.jpg').replace('img', 'img/gallery/0'); // меняем возвращенную строку, чтобы была похожа на адрес картинки
    modelShower(url);
});

function modelShower(url) { // показ модального окна галереи
    let model = $('<div>');
    model.attr('id', 'model');
    let modelImgElem = $('<img>');
    modelImgElem.attr('src', url);
    model.append(modelImgElem);
    $('body').append(model);
    model.click(() => model.remove());
};

// конец модального окна и галереи, начало кнопок блока news
$('#triada1').css('background-color', 'green'); // задаём изначально зелёный цвет первой точки в триаде
$('#triada1').click(function () {
    $('#triada').children().css('background-color', 'grey');
    $('#nonagonCrutch').css('margin-left', '0');
    $('#triada1').css('background-color', 'green');
});
$('#triada2').click(function () { // каждой кнопочке - своя цацка
    $('#triada').children().css('background-color', 'grey');
    $('#triada2').css('background-color', 'green');
    if ($('#nonagon').width() > 1000) { // чекаем скролл новостного блока при изменённой ширине окна
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
    $('#triada').children().css('background-color', 'grey');
    $('#triada3').css('background-color', 'green');
    if ($('#nonagon').width() > 1000) {
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

// это - код для маленьких экранов, он двигает news

$('#diodLeft').click(function() {
    let counter = $('#counter').text();
    if (counter > 1) {
        $('#nonagonCrutch').css('margin-left', `${-300 * (counter - 2) + 'px'}`);
        counter = + counter - 1; // чесслово, туплю и не знаю, как сделать эту строку изящнее, оставив преобразование к числу
        $('#counter').text(counter);
    }
});

$('#diodRight').click(function() {
    let counter = $('#counter').text();
    if (counter < 9) {
        $('#nonagonCrutch').css('margin-left', `${-300 * counter + 'px'}`);
        counter = + counter + 1;
        $('#counter').text(counter);
    }
});


