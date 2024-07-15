const container = document.querySelector('.block_three');
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