// mob menu accordion
const container = document.querySelector('.block_two_mobile');
const items = document.querySelectorAll('.accordion_content');
// const vector = document.querySelector('.block_two_mobile_cards_after');
container.addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target.closest('.accordion_title')) {
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
        if (menu.classList.contains('header_menu_burger--active')&& burger.classList.contains('header_menu_link_burger--active')) {
            menu.classList.remove("header_menu_burger--active");
            burger.classList.remove("header_menu_link_burger--active");
        }
    }

})
// popup window open
const popup = document.querySelectorAll('.block_two_cards_text');
const windowpup = document.querySelector('.block_two_window_text');
const overlay = document.querySelector('.block_two_window_overlay');
const popupTexts = [ "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto atque blanditiis, cumque cupiditate error est facere illum, ipsam iste, maxime molestiae non numquam optio recusandae sapiente tempora vel vero vitae voluptates. Aliquid commodi earum eius eos hic ipsum iste nostrum, officia porro quae quaerat, quia quibusdam, tempore unde vero01?"  , "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto atque blanditiis, cumque cupiditate error est facere illum, ipsam iste, maxime molestiae non numquam optio recusandae sapiente tempora vel vero vitae voluptates. Aliquid commodi earum eius eos hic ipsum iste nostrum, officia porro quae quaerat, quia quibusdam, tempore unde vero02?", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto atque blanditiis, cumque cupiditate error est facere illum, ipsam iste, maxime molestiae non numquam optio recusandae sapiente tempora vel vero vitae voluptates. Aliquid commodi earum eius eos hic ipsum iste nostrum, officia porro quae quaerat, quia quibusdam, tempore unde vero03?" , "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto atque blanditiis, cumque cupiditate error est facere illum, ipsam iste, maxime molestiae non numquam optio recusandae sapiente tempora vel vero vitae voluptates. Aliquid commodi earum eius eos hic ipsum iste nostrum, officia porro quae quaerat, quia quibusdam, tempore unde vero04?" , "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto atque blanditiis, cumque cupiditate error est facere illum, ipsam iste, maxime molestiae non numquam optio recusandae sapiente tempora vel vero vitae voluptates. Aliquid commodi earum eius eos hic ipsum iste nostrum, officia porro quae quaerat, quia quibusdam, tempore unde vero05?" , "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto atque blanditiis, cumque cupiditate error est facere illum, ipsam iste, maxime molestiae non numquam optio recusandae sapiente tempora vel vero vitae voluptates. Aliquid commodi earum eius eos hic ipsum iste nostrum, officia porro quae quaerat, quia quibusdam, tempore unde vero06?" ]
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
// popup window close
overlay.addEventListener('click', (e) => {
    console.log(e.target);
    e.stopPropagation()
    if (e.target.classList.contains('block_two_window_overlay')){
        overlay.classList.toggle('block_two_window_overlay--active');

    }
    if (e.target.classList.contains('block_two_window_x')) {
        overlay.classList.remove('block_two_window_overlay--active');
    }
})

// slider block four
const vector = document.querySelector('.block_four_wrapper')
const arrow_left = document.querySelector('.block_four_vector_wrapper_left')
const arrow_right = document.querySelector('.block_four_vector_wrapper_right')
const slider_element_count = vector.children.length
let current_slider = 0
arrow_right.addEventListener('click', (e) => {
    console.log(e.target);
    if (current_slider == 0){
        current_slider ++
    }
        if (current_slider!= slider_element_count) {
            vector.style.transform = `translate(-${current_slider * 25}%,0)`
            current_slider ++

        }
        else {
            vector.style.transform = `translate(0,0)`
            current_slider = 0
        }

})
arrow_left.addEventListener('click', (e) => {
    console.log(e.target);
    console.log(current_slider,slider_element_count);

        if (current_slider == slider_element_count){
            current_slider --
        }
    if (current_slider == 0) {
        vector.style.transform = `translate(-${(slider_element_count - 1) * 25}%,0)`
        current_slider = slider_element_count
        console.log(current_slider,slider_element_count);

    }
    else {
        current_slider --
        vector.style.transform = `translate(-${current_slider * 25}%,0)`
    }

})

// slider block four v.2
// const vector = document.querySelector('.block_four_wrapper');
// const arrow_left = document.querySelector('.block_four_vector_wrapper_left');
// const arrow_right = document.querySelector('.block_four_vector_wrapper_right');
// const slider_element_count = vector.children.length;
// let current_slider = 0;
//
// arrow_right.addEventListener('click', () => {
//     current_slider = (current_slider + 1) % slider_element_count;
//     vector.style.transform = `translate(-${current_slider * 25}%, 0)`;
// });
//
// arrow_left.addEventListener('click', () => {
//     current_slider = (current_slider - 1 + slider_element_count) % slider_element_count;
//     vector.style.transform = `translate(-${current_slider * 25}%, 0)`;
// });

// apryv form
const confim = document.querySelector('.block_five_confirm');
const checkbox = document.querySelector('.block_five_checkbox');
const checkbox_remove = document.querySelector('.block_five_checkbox--active');
confim.addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target.closest('.block_five_checkbox')) {
        checkbox.classList.toggle('block_five_checkbox--active');

    }
    if (e.target.closest('.block_five_checkbox--active')) {
        checkbox_remove.classList.remove('block_five_checkbox--active');
    }
})

// valid form
const formElement = document.querySelector('form')
formElement.addEventListener('submit', (event) => {
    event.preventDefault()

    const formData = new FormData(formElement)

    console.log( Object.fromEntries(formData) )
})


const input = document.getElementById('name');
input.addEventListener('keypress', function (event) {
    const char =
        String.fromCharCode(event.which);
        if (!isNaN(char)){
            event.preventDefault();
        }
})

const input_number = document.getElementById('number');
input_number.addEventListener('input', function () {
    if (this.value.length > 11) {
        this.value = this.value.slice(0,11);
    }
//     let value = this.value.replace(/\D/g,'');
//     let format = '(XXX) XXX-XX-XX';
//     let i = 0;
//     let formattedValue = format.replace(/X/g,function() {
//         return value.charAt(i++) ||'';
//     });
//     this.value = formattedValue;
});
//
//
//
// class FormsValidation {
//     selectors = {
//         form: '[data-js-form]',
//         fieldErrors: '[data-js-form-field-errors]'
//     }
//
//     errorMessages = {
//         valueMissing: () => 'Пожалуйста, заполните это поле',
//         patternMismatch: ({ title }) => title || 'Данные не соответствуют формату',
//         tooShort: ({ minLength }) => `Слишком короткое значение, минимум символов — ${minLength}`,
//         tooLong: ({ maxLength }) => `Слишком длинное значение, ограничение символов — ${maxLength}`,
//     }
//
//     constructor() {
//         this.bindEvents()
//     }
//
//     manageErrors(fieldControlElement, errorMessages) {
//         const fieldErrorsElement = fieldControlElement.parentElement.querySelector(this.selectors.fieldErrors)
//
//         fieldErrorsElement.innerHTML = errorMessages
//             .map((message) => `<span class="field__error">${message}</span>`)
//             .join('')
//     }
//
//     validateField(block_five_label_nameElement) {
//         const errors = block_five_label_nameElement.validity
//         const errorMessages = []
//
//         Object.entries(this.errorMessages).forEach(([errorType, getErrorMessage]) => {
//             if (errors[errorType]) {
//                 errorMessages.push(getErrorMessage(block_five_label_nameElement))
//             }
//         })
//
//
//         this.manageErrors(block_five_label_nameElement, errorMessages)
//
//         const isValid = errorMessages.length === 0
//
//         block_five_label_nameElement.ariaInvalid = !isValid
//
//         return isValid
//     }
//
//     onBlur(event) {
//         const { target } = event
//         const isFormField = target.closest(this.selectors.form)
//         const isRequired = target.required
//
//         if (isFormField && isRequired) {
//             this.validateField(target)
//         }
//     }
//
//     onChange(event) {
//         const { target } = event
//         const isRequired = target.required
//         const isToggleType = ['radio', 'checkbox'].includes(target.type)
//
//         if (isToggleType && isRequired) {
//             this.validateField(target)
//         }
//     }
//
//     onSubmit(event) {
//         const isFormElement = event.target.matches(this.selectors.form)
//         if (!isFormElement) {
//             return
//         }
//
//         const requiredControlElements = [...event.target.elements].filter(({ required }) => required)
//         let isFormValid = true
//         let firstInvalidFieldControl = null
//
//         requiredControlElements.forEach((element) => {
//             const isFieldValid = this.validateField(element)
//
//             if (!isFieldValid) {
//                 isFormValid = false
//
//                 if (!firstInvalidFieldControl) {
//                     firstInvalidFieldControl = element
//                 }
//             }
//         })
//
//         if (!isFormValid) {
//             event.preventDefault()
//             firstInvalidFieldControl.focus()
//         }
//     }
//
//     bindEvents() {
//         document.addEventListener('blur', (event) => {
//             this.onBlur(event)
//         }, { capture: true })
//         document.addEventListener('change', (event) => this.onChange(event))
//         document.addEventListener('submit', (event) => this.onSubmit(event))
//     }
// }
//
// new FormsValidation()





















