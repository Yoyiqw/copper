const swiper = new Swiper('.experiment__swiper', {
    slidesPerView: 3,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });