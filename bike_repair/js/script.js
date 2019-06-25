//Сборка шапки для desktop при скролле
$(document).ready(function () {
    // Фикcированная шапка при скролле
    $('#menu_top').removeClass('default');
    $('#menu_bottom').removeClass('default');


    $(window).scroll(function () {
        if ($(this).scrollTop() > 60) {
            $('#menu_top').addClass('default').fadeIn('fast');
        } else {
            $('#menu_top').removeClass('default').fadeIn('fast');
        }

        if ($(this).scrollTop() > $('.header_container').height() - 100) {
            $('#menu_bottom').addClass('default').fadeIn('fast');
        } else {
            $('#menu_bottom').removeClass('default').fadeIn('fast');
        }
     
    });
});
//-----------------------------------
//Скрытие элементов при открытии модального окна
    function log(event) {
        if (event.type == 'mouseenter' && event.target.id != 'absorber') {
            document.getElementById('absorber_text').style.display = 'none';
            document.getElementById('absorber').style.display = 'none';
            // document.getElementById('absorber').style.border = '2px solid #F32619';
            // event.target.id.style.display = 'block';
        } else if (event.type == 'mouseleave' && event.target.id == 'absorber') {
            document.getElementById('absorber_text').style.display = 'block';
            document.getElementById('absorber').style.display = 'block';
            // document.getElementById('absorber').style.border = '2px solid #F32619';
            // event.target.id.style.display = 'block';
        }

        if (event.type == 'mouseleave' && event.target.id != 'absorber') {
            document.getElementById('absorber_text').style.display = 'block';
            document.getElementById('absorber').style.display = 'block';
            // document.getElementById('absorber').style.border = '2px solid #F32619';
            // event.target.id.style.display = 'none';
        } else if (event.type == 'mouseleave'  && event.target.id == 'absorber') {
            document.getElementById('absorber_text').style.display = 'none';
            document.getElementById('absorber').style.display = 'none';
            // document.getElementById('absorber').style.border = '2px solid #F32619';
            // event.target.id.style.display = 'none';
        }
    }



// open modal
function ModalClick(modal_argument){
    var id = modal_argument;
      $(id).show();
      $('.dialog').css('display', 'inline-block');
      document.getElementById('body').style.overflow = 'hidden';
      document.getElementById('header').style.display = 'none';
      document.getElementById('mobile_header').style.display = 'none';
      document.getElementById('social_network').style.display = 'none';
};
// close modal
$('.modal').click(function() {
  $(document).on('click', function(event) {
    var select = $('.dialog');
    if ($(event.target).closest(select).length)
      return;
    $('.modal, .dialog').hide();
    $(document).unbind('click');
    event.stopPropagation();
    document.getElementById('body').style.overflow = 'scroll';
    document.getElementById('header').style.display = 'block';
    document.getElementById('mobile_header').style.display = 'block';
    document.getElementById('social_network').style.display = 'block';
  });
});
// };


// function OpenModal() {
//     $('#body').addClass('overflow_hidden');
// }

// function CloseModal() {
//     $('#modal_frame').removeClass('display_none');
// }

// if (window.localStorage) {
//     $('#body').addClass('overflow_hidden');
// }

// ---------------------------------------------
// $(function(){
//     function showModal(id){
//         $(document.body).addClass('is-open-modal');
//         $(id).addClass('is-open');
//         console.log(id);
//     }
//     function hideModals(){
//         $(document.body).removeClass('is-open-modal');
//         $('.modal').removeClass('is-open');
//     }

//     $(".modal-open").on('click', function(e){
//         console.log(e);
//         showModal('#modal_frame');
//     });
    
//     $(document).on('click', function(e){
//         if (!(
//         ($(e.target).parents('.dialog').length)
//         ||  ($(e.target).hasClass('dialog'))
//         ||  ($(e.target).hasClass('modal-open')))
//         ) {
//             hideModals();
//         }
//     });
    
// });


// -----------------------------------------------
// Открытие и закрытие мобильного меню
(function ($) {
    $(function () {
        $('.mobile_icon').on('click', function() {
            $(this).closest('.mobile_menu').toggleClass('menu-open');
        });
        //Закрытие при нажитии на "Ремонт"
        $('.repair').on('click', function() {
            $(this).closest('.mobile_menu').toggleClass('menu-open');
        });
        //Закрытие при нажитии на "Сборка"
        $('.assembly').on('click', function() {
            $(this).closest('.mobile_menu').toggleClass('menu-open');
        });
        //Закрытие при нажитии на "Обслуживание"
        $('.service').on('click', function() {
            $(this).closest('.mobile_menu').toggleClass('menu-open');
        });
        //Закрытие при нажитии на адрес
        $('.address').on('click', function() {
            $(this).closest('.mobile_menu').toggleClass('menu-open');
        });
    });
})(jQuery);
//-----------------------------------

$(document).ready(function () {
    var $height = $('.info_box').height() + parseInt($('.info_box').css('padding'))*2;
    
    $('.line').css('top', $height);
    $('.line').addClass('visible').fadeIn('fast');
    
    if ($(window).width() <= 992 && $(window).width() >= 576){
        $height = $height*2;
        $('.line').clone().css('top', $height).appendTo('.section');
        $('.line').addClass('visible').fadeIn('fast');  
        // console.log($height);
    }
    
    if ($(window).width() < 576){
        var $height_of_all=0;
        var $height_mobile=0;
        var i = 0;

        $.each($('.info_box'), function (index, value) {

            if (i < 5){
            var $height_mobile = $(value).height() + parseInt($(value).css('padding'))*2 + $height_of_all;
            
            $('.line').clone().css('top', $height_mobile).appendTo('.section');
            
            $('.line').addClass('visible').fadeIn('fast');
            
            $height_of_all =+ $height_mobile;
            i++;
           console.log((index) + ':' + $(value).height() + ' : ' + $height_of_all + ' - ' + $(value).css('padding'));
    // if ($("div.info_box").hasClass("last")) {
    //                 console.log("jopa");
    //                 return;
    //             }
    }
});
    }
        
});
      

$(document).ready(function () {
   
    $('.mobile_menu').addClass('menu-open');
    
    var $top = $("#mobile_button_menu_open").offset().top;
   // $('#mobile_button').css( 'top', $top);

    $('.mobile_menu').removeClass('menu-open');

    // if(location.hash = "repair"){
    //     $('.mobile_menu').removeClass('menu-open');
    // }


//Автоскроллинг до определенного блока  
$(document).ready(function(){
    //Скроллинг до блока для desktop
    $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
         
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $("#address").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
         
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
    



    //Скроллинг до блока для tablet и mobile
    $("#menu_mobile").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
         
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $("#mobile_address").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
         
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });


});

jQuery(document).ready(function($) {

    // Добавляем маску для поля с номером телефона
    $('#phone').mask('+375 (99) 999-99-99');
    // Отправляет данные из формы на сервер и получает ответ
    $('#contactForm').on('submit', function(event) {
        
        event.preventDefault();

        var form = $('#contactForm'),
            button = $('#button'),
            answer = $('#answer'),
            loader = $('#loader');

        $.ajax({
            url: 'php/handler.php',
            type: 'POST',
            data: form.serialize(),
            beforeSend: function() {
                answer.empty();
                button.attr('disabled', true).css('margin-bottom', '20px');
                loader.fadeIn();
            },
            success: function(result) {
                loader.fadeOut(300, function() {
                    answer.text(result);
                });
                form.find('.field').val('');
                button.attr('disabled', false);
            },
            error: function() {
                loader.fadeOut(300, function() {
                    answer.text('Произошла ошибка! Попробуйте позже.');
                });
                button.attr('disabled', false);
            }
        });
    });
});




// yandex_map
ymaps.ready(init);
    var myMap, myPlacemark;

    function init(){  
        myMap = new ymaps.Map("yandex_map", {
            center: [53.89131827517743,27.547420178542975],
            zoom: 16
        });

        myMap.behaviors.disable('scrollZoom');

    var ctrlKey = false;
    var ctrlMessVisible = false;
    var timer;

    // Отслеживаем скролл мыши на карте, чтобы показывать уведомление
    myMap.events.add(['wheel', 'mousedown'], function(e) {
        if (e.get('type') == 'wheel') {
            if (!ctrlKey) { // Ctrl не нажат, показываем уведомление
                $('#yandex_map_ctrl').fadeIn(300);
                ctrlMessVisible = true;
                clearTimeout(timer); // Очищаем таймер, чтобы продолжать показывать уведомление
                timer = setTimeout(function() {
                    $('#yandex_map_ctrl').fadeOut(300);
                    ctrlMessVisible = false;
                }, 1500);
            }
            else { // Ctrl нажат, скрываем сообщение
                $('#yandex_map_ctrl').fadeOut(100);
            }
        }
        if (e.get('type') == 'mousedown' && ctrlMessVisible) { // Скрываем уведомление при клике на карте
            $('#yandex_map_ctrl').fadeOut(100);
        }
    });

    // Обрабатываем нажатие на Ctrl
    $(document).keydown(function(e) {
        if (e.which === 16 && !ctrlKey) { // Ctrl нажат: включаем масштабирование мышью
            ctrlKey = true;
            myMap.behaviors.enable('scrollZoom');
        }
    });
    $(document).keyup(function(e) { // Ctrl не нажат: выключаем масштабирование мышью
        if (e.which === 16) {
            ctrlKey = false;
            myMap.behaviors.disable('scrollZoom');
        }
    });

        

        // if ($(window).width() < 576){
        //     yPlacemark = new ymaps.Placemark([53.891668327573065,27.551364182826163], {
        //     balloonContentHeader: 'Велосервис',
        //     balloonContentBody: 'Ремонт велосипедов в Минске',
        //     balloonContentFooter: 'Минск, Бобруйская <br><br>+375 (33) 123 45 67 <br>+375 (44) 123 45 67 <br><br>Пн-Пт : 10.00 - 20.00 <br>Сб-Вс : 10.00 - 18.00',
        //     hintContent: 'Ремонт велосипедов'
        // }, {
        //     preset: 'islands#redIcon'
        // });
        //     yMap.geoObjects.add(myPlacemark);
        // }else {
            myPlacemark = new ymaps.Placemark([53.891554253312876,27.55125689446558], {
            balloonContentHeader: 'Велосервис',
            balloonContentBody: 'Ремонт велосипедов в Минске',
            balloonContentFooter: 'Минск, Бобруйская <br><br>+375 (33) 123 45 67 <br>+375 (44) 123 45 67 <br><br>Пн-Пт : 10.00 - 20.00 <br>Сб-Вс : 10.00 - 18.00',
            hintContent: 'Ремонт велосипедов'
        }, {
            preset: 'islands#redIcon'
        });
            myMap.geoObjects.add(myPlacemark);
        // }

        


        // myPlacemark.balloon.open();
    }
        
    

    
    
        


});










