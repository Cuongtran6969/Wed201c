const selectOption = document.getElementById('tour')
const priceOption = document.getElementById('price-option')
const numberPeople = document.getElementById('number-people')
const bookingBtn = document.querySelector('.booking-btn')
const bookingTotal = document.querySelector('.booking-total')
selectOption.addEventListener('change', () => {
    priceOption.innerHTML = selectOption.value+"$/Person"
})
bookingBtn.addEventListener('click', () => {
    bookingTotal.style.display = 'block'
    bookingTotal.innerHTML = "Total amount: " +numberPeople.value * Number(selectOption.value)+"$"
})