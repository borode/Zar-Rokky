const container = document.querySelector('.block_two_mobile');
const items = document.querySelectorAll('.accordion_content');
container.addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target.closest('.accordion_title')) {
        console.log('click');
        for ( i = 0; i < items.length; i++ ) {
            items[i].classList.remove('accordion_content--active');

        }
        e.target.nextElementSibling.classList.toggle('accordion_content--active');
    }
})

const burger = document.querySelector('.header_wrapper');
const burgerTwo = document.querySelectorAll('.header_menu_burger');
container.addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target.closest('.header_menu_link_burger')) {
        console.log('click');
        for ( i = 0; i < items.length; i++ ) {
            items[i].classList.remove('header_menu_burger--active');

        }
        e.target.nextElementSibling.classList.toggle('header_menu_burger--active');
    }
})