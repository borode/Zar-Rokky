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
        // console.log('click');
        if (menu.classList.contains('header_menu_burger--active')&& burger.classList.contains('header_menu_link_burger--active')) {
            menu.classList.remove("header_menu_burger--active");
            burger.classList.remove("header_menu_link_burger--active");
        }
    }
    // popup window close
    // if (!e.target.closest('.block_two_cards_text')){
    //     console.log('click');
    //     if (popup.classList.contains('block_two_cards_text--active')) {
    //         popup.classList.remove("block_two_cards_text--active");
    //
    //     }
    // }
})
// popup window open
const popup = document.querySelectorAll('.block_two_cards_text');
const windowpup = document.querySelector('.block_two_window');
const overlay = document.querySelector('.block_two_window_overlay');
const popupTexts = [ "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto atque blanditiis, cumque cupiditate error est facere illum, ipsam iste, maxime molestiae non numquam optio recusandae sapiente tempora vel vero vitae voluptates. Aliquid commodi earum eius eos hic ipsum iste nostrum, officia porro quae quaerat, quia quibusdam, tempore unde vero?" , "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto atque blanditiis, cumque cupiditate error est facere illum, ipsam iste, maxime molestiae non numquam optio recusandae sapiente tempora vel vero vitae voluptates. Aliquid commodi earum eius eos hic ipsum iste nostrum, officia porro quae quaerat, quia quibusdam, tempore unde vero?" , "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto atque blanditiis, cumque cupiditate error est facere illum, ipsam iste, maxime molestiae non numquam optio recusandae sapiente tempora vel vero vitae voluptates. Aliquid commodi earum eius eos hic ipsum iste nostrum, officia porro quae quaerat, quia quibusdam, tempore unde vero?" , "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto atque blanditiis, cumque cupiditate error est facere illum, ipsam iste, maxime molestiae non numquam optio recusandae sapiente tempora vel vero vitae voluptates. Aliquid commodi earum eius eos hic ipsum iste nostrum, officia porro quae quaerat, quia quibusdam, tempore unde vero?" , "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto atque blanditiis, cumque cupiditate error est facere illum, ipsam iste, maxime molestiae non numquam optio recusandae sapiente tempora vel vero vitae voluptates. Aliquid commodi earum eius eos hic ipsum iste nostrum, officia porro quae quaerat, quia quibusdam, tempore unde vero?" , "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto atque blanditiis, cumque cupiditate error est facere illum, ipsam iste, maxime molestiae non numquam optio recusandae sapiente tempora vel vero vitae voluptates. Aliquid commodi earum eius eos hic ipsum iste nostrum, officia porro quae quaerat, quia quibusdam, tempore unde vero?" ]
popup.forEach((lease, index ) =>
    lease.addEventListener('click', (e) => {
        console.log(popupTexts[index]);
        if (e.target.closest('.block_two_cards_text')) {
            console.log('click');
            windowpup.innerHTML  = `<p class="popuptext"> ${ popupTexts[index]}</p>`;
            overlay.classList.toggle('block_two_window_overlay--active');

        }
    })
);
overlay.addEventListener('click', (e) => {
    console.log(e.target);
    e.stopPropagation()
    if (e.target.classList.contains('block_two_window_overlay')){
        overlay.classList.toggle('block_two_window_overlay--active');
    }
})




    // .addEventListener('click', (e) => {
    //     console.log(e.target);
    //     if (e.target.closest('.block_two_cards_text')) {
    //         console.log('click');
    //         popup.classList.toggle('block_two_cards_text--active');
    //         block.classList.toggle('block_two_cards_text_span2_popup--active');
    //     }
    // })













