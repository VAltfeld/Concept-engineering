$(document).ready(function () {
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    loop:true,
    margin:50,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
      0: {items:3},
      600: {items:4},
      800: {items:5},
      1000:{items:7}
    }
  });

});