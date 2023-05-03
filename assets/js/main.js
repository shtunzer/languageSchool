document.getElementById('burger-btn-open').addEventListener('click', function(){
    document.getElementById('burger__menu').classList.add('--show');
});
document.getElementById('burger-btn-hide').addEventListener('click', function(){
    document.getElementById('burger__menu').classList.remove('--show');
});

// SWIPER

var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-btn-next",
      prevEl: ".swiper-btn-prev",
    },
});

// TABS

const tabItem = document.querySelectorAll('.tabs__btnBox-btn');
const tabContent = document.querySelectorAll('.tabs__content');

tabItem.forEach(function(element){
    element.addEventListener('click', open);
})

function open(evt){
    const tabTarget = evt.currentTarget;
    const button = tabTarget.dataset.button;

    tabItem.forEach(function(item){
        item.classList.remove('--active-btn');
    })

    tabTarget.classList.add('--active-btn');

    tabContent.forEach(function(item){
        item.classList.remove('--active-content')
    })

    document.querySelector(`#${button}`).classList.add('--active-content');
}
