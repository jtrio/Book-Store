searchForm = doucmnent.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
    loginForm.classList.remove('active');
}
window.onscroll = () => {
    if(window.scrolly > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

window.onload = () => {
    if(window.scrolly > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }

    fadeOut();
}

function loader(){
    document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
    setTimeout(loader , 4000);
}



var swiper = new Swiper(".books-slider",{
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnINteraction: false,
    },
    breakpoints: {
        0: {
            slidePerView: 1,
        },
        768: {
            slidePerView: 2,
        },
        1024: {
            slidePerView: 3,
        },
    },
});
var swiper = new Swiper(".featured-slider",{
    spaceBetween: 10,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    navigation: {
        nextE1: "swiper-button-next",
        prevE1: "swiper-button-prev"
    },
    breakpoints: {
        0: {
            slidePerView: 1,
        },
        450: {
            slidePerView: 2,
        },
        768: {
            slidePerView: 3,
        },
        1024: {
            slidePerView: 4,
        },
    },
});
var swiper = new Swiper(".arrivals-slider",{
    spaceBetween: 10,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidePerView: 1,
        },
        768: {
            slidePerView: 2,
        },
        1024: {
            slidePerView: 3,
        },
    },
});
var swiper = new Swiper(".reviews-slider",{
    spaceBetween: 10,
    grabCursor: true,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidePerView: 1,
        },
        768: {
            slidePerView: 2,
        },
        1024: {
            slidePerView: 3,
        },
    },
});
var swiper = new Swiper(".blogs-slider",{
    spaceBetween: 10,
    grabCursor: true,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidePerView: 1,
        },
        768: {
            slidePerView: 2,
        },
        1024: {
            slidePerView: 3,
        },
    },
});
