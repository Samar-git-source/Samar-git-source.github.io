//Автоскроллинг до определенного блока
$("#main_menu").on("click",".link-scroll", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href');

        //узнаем высоту от начала страницы до блока на который ссылается якорь
        var top = $(id).offset().top;
         
        //анимируем переход на расстояние - top за 1000 мс
        $('body,html').animate({scrollTop: top}, 1000);
    });

// open modal
function ModalClick(modal_argument){
    var id = modal_argument;
    // if ($(window).width() >= 576) {
      $(id).show();
      $('.dialog').css('display', 'inline-block');
      document.getElementById('body').style.overflowY = 'hidden';
    // }
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
    document.getElementById('body').style.overflowY = 'scroll';
  });
});
$('.modal_real_size').click(function() {
  $(document).on('click', function(event) {
    var select = $('.dialog_img_real_size');
    if ($(event.target).closest(select).length)
      return;
    $('.modal_real_size, .dialog_img_real_size').hide();
    $(document).unbind('click');
    event.stopPropagation();
    document.getElementById('body').style.overflowY = 'scroll';
  });
});

function getElementsByClass(searchClass, node, tag) {
  var classElements = new Array();

  if (node == null)
      node = document;

  if (tag == null)
      tag = '*';

  var els = node.getElementsByTagName(tag);
  var elsLen = els.length - 1;
  var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");

  for (i = 0, j = 0; i <= elsLen; i++)
      if (pattern.test(els[i].className))
          {
              classElements[j] = els[i];
              j++;
          }

  return classElements;
}
  
//Modal Price. Отображение подстрок таблицы
function OpenClose(FName, CName) {
  var Elements = getElementsByClass(CName, document, "tr");
  var ElementsLength = Elements.length - 1;

  for (i = 0; i <= ElementsLength; i++)
    //если строка раскрыта
    if (Elements[i].style.display == "") {
        Elements[i].style.display = "none";
        document.getElementById(FName).style.background = "none";
        document.getElementById(FName).getElementsByTagName('td')[0].style.paddingLeft = "10px";
        document.getElementById(FName).getElementsByTagName('td')[1].style.transform = "rotate(90deg)";
    }
    //если строка закрыта
    else {
        Elements[i].style.display = "";
        document.getElementById(FName).style.background = "rgba(255,255,255,.4)";
        document.getElementById(FName).getElementsByTagName('td')[1].style.transform = "rotate(-90deg)";
        if ($(window).width() >= 768) {
            document.getElementById(FName).getElementsByTagName('td')[0].style.paddingLeft = "30px";
        }
    }
}

// Открытие и закрытие мобильного меню
(function ($) {
    $(function () {
        $('.mobile_icon').on('click', function() {
            $(this).closest('.menu').toggleClass('menu-open');
        });
        //Закрытие при нажитии на "Портфолио"
        $('.portfolio').on('click', function() {
            $(this).closest('.menu').toggleClass('menu-open');
        });
        //Закрытие при нажитии на "Отзывы"
        $('.comments').on('click', function() {
            $(this).closest('.menu').toggleClass('menu-open');
        });
        //Закрытие при нажитии на "Дипломы"
        $('.diplomas').on('click', function() {
            $(this).closest('.menu').toggleClass('menu-open');
        });
        //Закрытие при нажитии на "Прайс"
        $('.price').on('click', function() {
            $(this).closest('.menu').toggleClass('menu-open');
        });
    });
})(jQuery);

// Owl Carousel Comments
$('#owl-carousel_comments').owlCarousel({
    loop:true, //Зацикливаем слайдер
    nav:true, //Отключение навигации
    margin: 6, //Отступ от элемента справа в 6px
    center: true,
    touchDrag: true,
    autoWidth: true,
    //autoplay:true, Автозапуск слайдера
    autoplayHoverPause:true,
    // autoplayTimeout:2000, Время смены слайда
    autoWidth:true,
    navText: ["<img src='img/icons/arrow/arrow-button-prev.svg'>", "<img src='img/icons/arrow/arrow-button-next.svg'>"],
    responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
        0:{
              items:1,
              dots: false,
              nav:false,
              autoplay:true,
              smartSpeed:1500, //Время движения слайда
              autoplayTimeout:3500,//Время смены слайда
              touchDrag:true 
          },
        576:{
            center: false,
            dots: false,
            items:2,
            touchDrag:true
        },
        768:{
            center: false,
            items:2,
            touchDrag:true
        },
        992:{
            items:3
        }
    }
});

// Owl Carousel Instagram
$('#owl-carousel_instagram').owlCarousel({
      loop:true, //Зацикливаем слайдер
      nav:true, //Отключение навигации
      dots: false,
      autoplayHoverPause:true,
      // margin:6, Отступ от элемента справа в 6px
      autoplay:true, //Автозапуск слайдера
      smartSpeed:1500, //Время движения слайда
      autoplayTimeout:4000, //Время смены слайда
      navText: ["<img src='img/icons/arrow/arrow-button-prev.svg'>", "<img src='img/icons/arrow/arrow-button-next.svg'>"],
      responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
          0:{
              items:1,
              nav:false,
              autoplayTimeout:3000,//Время смены слайда
            touchDrag:true 
          },
          576:{
              items:2,
              touchDrag:true 
          },
          768:{
              items:3,
              touchDrag:true 
          },
          992:{
              items:3
          },
          1200:{
              items:4
          }
      }
});