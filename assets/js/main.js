const inputDays = document.getElementById('day')
const inputMonths = document.getElementById('month')
const inputYear = document.getElementById('year')
const spanDay = document.getElementById('days')
const spanMonth = document.getElementById('months')
const spanYear = document.getElementById('years')
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

    if (!dayValue) {
        spanDay.innerHTML = "--"
    } else if (dayValue && dayValue.length === 2) {
        spanDay.innerHTML = day - dayValue
    }
    if (!monthValue) {
        spanMonth.innerHTML = '--'
    } else if (monthValue && monthValue.length === 2) {
        spanMonth.innerHTML = month - monthValue
    }
    if(!yearValue) {
        spanYear.innerHTML = '--'
    } else if (yearValue && yearValue.length === 4){
        spanYear.innerHTML = year - yearValue
    }
}

submitBtn.addEventListener('click', saveBtn)

