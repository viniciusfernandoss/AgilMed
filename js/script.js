// InforBar
window.onscroll = function() {
    var containerH = document.getElementById('headerr');
    if (window.scrollY > 1) { // Ajuste este valor conforme necessário
        containerH.style.display = 'none';
    } else {
        containerH.style.display = 'block';
    }
};

//depoimentos
const swiper = new Swiper('.swiper-feedback', {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    
    pagination: {
        el: '.swiper-feedback .swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
    
    navigation: {
        nextEl: '.swiper-feedback .swiper-button-next',
        prevEl: '.swiper-feedback .swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        992: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
 });

 //Servicos
 const swiperTwo = new Swiper('.swiper-servicos-mobile', {
    breakpoints: {
             0: {
                 slidesPerView: 1
             },
             992: {
                 slidesPerView: 2
             },
             1024: {
                 slidesPerView: 3
             }
    },
    // navigation: {
    //         nextEl: '.swiper-case-sucesso-mobile .swiper-button-next',
    //         prevEl: '.swiper-case-sucesso-mobile .swiper-button-prev',
    // },
    spaceBetween: 30, // Espaço entre os slides
    loop: true,
    pagination: {
      el: '.swiper-servicos-mobile .swiper-pagination',
      clickable: true,
    },
});

const swiper3 = new Swiper('.swiper-caseSucesso-mobile', {
    // navigation: {
    //         nextEl: '.swiper-case-sucesso-mobile .swiper-button-next',
    //         prevEl: '.swiper-case-sucesso-mobile .swiper-button-prev',
    // },
    spaceBetween: 30, // Espaço entre os slides
    loop: true,
    pagination: {
      el: '.swiper-caseSucesso-mobile .swiper-pagination',
      clickable: true,
    },
});