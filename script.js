// mob menu accordion
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
// burger menu
const burger = document.querySelector('.header_menu_link_burger');
const menu = document.querySelector('.header_menu_burger');
const menuLinks = document.querySelectorAll(".header_menu_link_burger_hidden");
burger.addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target.closest('.header_menu_link_burger')) {
        console.log('click');
        burger.classList.toggle('header_menu_link_burger--active');
        menu.classList.toggle('header_menu_burger--active');

    }
    menuLinks.forEach((lease) =>
        lease.addEventListener("click", () => {
            menu.classList.remove("header_menu_burger--active");
            burger.classList.remove("header_menu_link_burger--active");
        })
    );

})
const wrapper = document.querySelector('body');
wrapper.addEventListener('click', (e) => {
    if (!e.target.closest('.header_menu_link_burger')){
        console.log('click');
        if (menu.classList.contains('header_menu_burger--active')&& burger.classList.contains('header_menu_link_burger--active')) {
            menu.classList.remove("header_menu_burger--active");
            burger.classList.remove("header_menu_link_burger--active");
        }
    }
    // popup window
    if (!e.target.closest('.block_two_cards_text_span2')){
        console.log('click');
        if (popup.classList.contains('block_two_cards_text--active')&&  block.classList.contains('block_two_cards_text_span2_popup--active')) {
            popup.classList.remove("block_two_cards_text--active");
            block.classList.remove("block_two_cards_text_span2_popup--active");
        }
    }
})
const popup = document.querySelector('.block_two_cards_text');
const block = document.querySelector('.block_two_cards_text_span2_popup');
popup .addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target.closest('.block_two_cards_text')) {
        console.log('click');
        popup.classList.toggle('block_two_cards_text--active');
        block.classList.toggle('block_two_cards_text_span2_popup--active');
    }
    })




















