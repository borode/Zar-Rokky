const container = document.querySelector('.block_two_two');
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



// const container_two = document.querySelector('.block_two_cards_text');
// const container_three = container_two.querySelector('.block_two_cards_text_span');
// console.log(container_two);
// container_two.addEventListener("mouseover", function() {
//     container_three.textContent ='Подробнее'
// })
// container_two.addEventListener("mouseout", function() {
//     container_three.innerHTML ='Анализ Целевой Аудитории <div class="block_two_cards_after"></div>'
//
//
// })
//
//
