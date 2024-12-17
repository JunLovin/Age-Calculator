const labelDay = document.getElementById('labelDay')
const inputDays = document.getElementById('day')
const spanDay = document.getElementById('days')
const errorDay = document.getElementById('errorDay')
const labelMonth = document.getElementById('labelMonth')
const inputMonths = document.getElementById('month')
const spanMonth = document.getElementById('months')
const errorMonth = document.getElementById('errorMonth')
const labelYear = document.getElementById('labelYear')
const inputYear = document.getElementById('year')
const spanYear = document.getElementById('years')
const errorYear = document.getElementById('errorYear')
const submitBtn = document.getElementById('submitBtn')
const date = new Date();
const day = date.getDate()
const month = date.getMonth() + 1
const year = date.getFullYear()

const saveBtn = () => {
    dayValue = inputDays.value
    monthValue = inputMonths.value
    yearValue = inputYear.value
    console.log(yearValue.length)
    console.log(typeof dayValue)

    if (!dayValue) {
        spanDay.innerHTML = "--"
    } else if (dayValue && dayValue.length === 2) {
        spanDay.innerHTML = day - dayValue
    } else if (dayValue.length !== 2) {
        errorDay.style.display = 'block'
        if(errorDay.style.display === 'block') {
            labelDay.style.color = 'hsl(0, 100%, 67%)'
            inputDays.style.borderColor = 'hsl(0, 100%, 67%)'
        }
    }
    if (!monthValue) {
        spanMonth.innerHTML = '--'
    } else if (monthValue && monthValue.length === 2) {
        spanMonth.innerHTML = month - monthValue
    } else if (monthValue.length !== 2) {
        errorMonth.style.display = 'block'
        if(errorDay.style.display === 'block') {
            labelMonth.style.color = 'hsl(0, 100%, 67%)'
            inputMonths.style.borderColor = 'hsl(0, 100%, 67%)'
        }
    }
    if(!yearValue) {
        spanYear.innerHTML = '--'
    } else if (yearValue && yearValue.length === 4){
        spanYear.innerHTML = year - yearValue
    } else if (yearValue.length !== 4) {
        errorYear.style.display = 'block'
        if(errorDay.style.display === 'block') {
            labelYear.style.color = 'hsl(0, 100%, 67%)'
            inputYear.style.borderColor = 'hsl(0, 100%, 67%)'
        }
    }
}

submitBtn.addEventListener('click', saveBtn)
