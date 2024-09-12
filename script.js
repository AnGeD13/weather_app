const inputCity = document.querySelector('.header__input')
const inputBtn = document.querySelector('.header__button')
const closeBtn = document.querySelector('.header__button_close')

const ACTIVE = 'active'
const HIDDEN = 'hidden'
const DEFAULT_STATE = ''

inputCity.addEventListener('input', function(event) {
    console.log(event.target.value)
})

inputCity.addEventListener('click', function() {
    inputBtn.classList.add(HIDDEN)
    closeBtn.classList.add(ACTIVE)
})

closeBtn.addEventListener('click', function(event) {
    event.preventDefault()
    inputBtn.classList.remove(HIDDEN)
        closeBtn.classList.remove(ACTIVE)
    inputCity.value = DEFAULT_STATE
})
