// Variables

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

    // Functionality of day input

    if (!dayValue) {
        spanDay.innerHTML = "--"
        errorDay.innerHTML = 'This field is required'
        errorDay.style.display = 'block'
        labelDay.style.color = 'hsl(0, 100%, 67%)'
        inputDays.style.borderColor = 'hsl(0, 100%, 67%)'
    } else if (dayValue > 31 || dayValue === 0) {
        spanDay.innerHTML = "--"
        errorDay.innerHTML = 'Must be a valid day'
        errorDay.style.display = 'block'
        errorDay.style.color = 'hsl(0, 100%, 67%)'
        inputDays.style.borderColor = 'hsl(0, 100%, 67%)'
        labelDay.style.color = 'hsl(0, 100%, 67%)'
    } else if (dayValue > day) {
        spanDay.innerHTML = dayValue - day
    } else if (dayValue && dayValue.length === 2) {
        if (dayValue <= 31) {
            spanDay.innerHTML = day - dayValue
        }
    } else if (dayValue.length !== 2) {
        errorDay.innerHTML = 'Pleae enter two numbers'
        labelDay.style.color = 'hsl(0, 100%, 67%)'
        inputDays.style.borderColor = 'hsl(0, 100%, 67%)'
    } 

    // Functionality of month input

    if (!monthValue) {
        spanMonth.innerHTML = '--'
        errorMonth.innerHTML = 'This field is required'
        inputMonths.style.borderColor = 'hsl(0, 100%, 67%)'
        labelMonth.style.color = 'hsl(0, 100%, 67%)' 
    } else if (monthValue && monthValue.length === 2) {
        if (monthValue <= 12 && monthValue > 0){ 
            spanMonth.innerHTML = month - monthValue
        } else if (monthValue > 12) {
            errorMonth.innerHTML = 'Must be a valid month'
            labelMonth.style.color = 'hsl(0, 100%, 67%)'
            inputMonths.style.borderColor = 'hsl(0, 100%, 67%)'
        }
        if (monthValue > month && monthValue <= 12) {
            spanMonth.innerHTML = monthValue - month
        }
    } else if (monthValue.length !== 2) {
        errorMonth.innerHTML = 'Please enter two numbers'
        errorMonth.style.fontSize = '.7rem'
        if(errorDay.style.display === 'block') {
            labelMonth.style.color = 'hsl(0, 100%, 67%)'
            inputMonths.style.borderColor = 'hsl(0, 100%, 67%)'
        }
    }

    // Functionality of year input

    if(!yearValue) {
        spanYear.innerHTML = '--'
        errorYear.innerHTML = 'This field is required'
        errorYear.style.display = 'block'
        errorYear.color = 'hsl(0, 100%, 67%)'
        inputYear.style.borderColor = 'hsl(0, 100%, 67%)'
        labelYear.style.color = 'hsl(0, 100%, 67%)'
    } else if (yearValue && yearValue.length === 4){
        spanYear.innerHTML = year - yearValue
        if (yearValue >=  year || yearValue === 0) {
            errorYear.innerHTML = "Must be in the past"
            spanYear.innerHTML = '--'
            errorYear.style.display = 'block'
            labelYear.style.color = 'hsl(0, 100%, 67%)'
            inputYear.style.borderColor = 'hsl(0, 100%, 67%)'
        }
    } else if (yearValue.length !== 4) {
        errorYear.innerHTML = 'Please enter a valid year'
        labelYear.style.color = 'hsl(0, 100%, 67%)'
        inputYear.style.borderColor = 'hsl(0, 100%, 67%)'
    }

    // Add 30 days to specific months

    if (monthValue === '04' && dayValue === '31') {
        spanDay.innerHTML = '--'
        spanMonth.innerHTML = '--'
        spanYear.innerHTML = '--'
        labelDay.style.color = 'hsl(0, 100%, 67%)'
        errorDay.innerHTML = 'Must be a valid date'
        inputDays.style.borderColor = 'hsl(0, 100%, 67%)'
        labelMonth.style.color = 'hsl(0, 100%, 67%)'
        inputMonths.style.borderColor = 'hsl(0, 100%, 67%)'
        labelYear.style.color = 'hsl(0, 100%, 67%)'
        inputYear.style.borderColor = 'hsl(0, 100%, 67%)'
    } else if (monthValue === '06' && dayValue === '31') {
        spanDay.innerHTML = '--'
        spanMonth.innerHTML = '--'
        spanYear.innerHTML = '--'
        labelDay.style.color = 'hsl(0, 100%, 67%)'
        errorDay.innerHTML = 'Must be a valid date'
        inputDays.style.borderColor = 'hsl(0, 100%, 67%)'
        labelMonth.style.color = 'hsl(0, 100%, 67%)'
        inputMonths.style.borderColor = 'hsl(0, 100%, 67%)'
        labelYear.style.color = 'hsl(0, 100%, 67%)'
        inputYear.style.borderColor = 'hsl(0, 100%, 67%)'
    } else if (monthValue === '09' && dayValue === '31') {
        spanDay.innerHTML = '--'
        spanMonth.innerHTML = '--'
        spanYear.innerHTML = '--'
        labelDay.style.color = 'hsl(0, 100%, 67%)'
        errorDay.innerHTML = 'Must be a valid date'
        inputDays.style.borderColor = 'hsl(0, 100%, 67%)'
        labelMonth.style.color = 'hsl(0, 100%, 67%)'
        inputMonths.style.borderColor = 'hsl(0, 100%, 67%)'
        labelYear.style.color = 'hsl(0, 100%, 67%)'
        inputYear.style.borderColor = 'hsl(0, 100%, 67%)'
    } else if (monthValue === '11' && dayValue === '31') {
        spanDay.innerHTML = '--'
        spanMonth.innerHTML = '--'
        spanYear.innerHTML = '--'
        labelDay.style.color = 'hsl(0, 100%, 67%)'
        errorDay.innerHTML = 'Must be a valid date'
        inputDays.style.borderColor = 'hsl(0, 100%, 67%)'
        labelMonth.style.color = 'hsl(0, 100%, 67%)'
        inputMonths.style.borderColor = 'hsl(0, 100%, 67%)'
        labelYear.style.color = 'hsl(0, 100%, 67%)'
        inputYear.style.borderColor = 'hsl(0, 100%, 67%)'
    }
    if (monthValue === '02' && dayValue === '29') {
        spanDay.innerHTML = '--'
        spanMonth.innerHTML = '--'
        spanYear.innerHTML = '--'
        labelDay.style.color = 'hsl(0, 100%, 67%)'
        errorDay.innerHTML = 'Must be a valid date'
        inputDays.style.borderColor = 'hsl(0, 100%, 67%)'
        labelMonth.style.color = 'hsl(0, 100%, 67%)'
        inputMonths.style.borderColor = 'hsl(0, 100%, 67%)'
        labelYear.style.color = 'hsl(0, 100%, 67%)'
        inputYear.style.borderColor = 'hsl(0, 100%, 67%)'
    } else if (monthValue === '02' && dayValue === '30') {
        spanDay.innerHTML = '--'
        spanMonth.innerHTML = '--'
        spanYear.innerHTML = '--'
        labelDay.style.color = 'hsl(0, 100%, 67%)'
        errorDay.innerHTML = 'Must be a valid date'
        inputDays.style.borderColor = 'hsl(0, 100%, 67%)'
        labelMonth.style.color = 'hsl(0, 100%, 67%)'
        inputMonths.style.borderColor = 'hsl(0, 100%, 67%)'
        labelYear.style.color = 'hsl(0, 100%, 67%)'
        inputYear.style.borderColor = 'hsl(0, 100%, 67%)'
    } else if (monthValue === '02' && dayValue === '31') {
        spanDay.innerHTML = '--'
        spanMonth.innerHTML = '--'
        spanYear.innerHTML = '--'
        labelDay.style.color = 'hsl(0, 100%, 67%)'
        errorDay.innerHTML = 'Must be a valid date'
        inputDays.style.borderColor = 'hsl(0, 100%, 67%)'
        labelMonth.style.color = 'hsl(0, 100%, 67%)'
        inputMonths.style.borderColor = 'hsl(0, 100%, 67%)'
        labelYear.style.color = 'hsl(0, 100%, 67%)'
        inputYear.style.borderColor = 'hsl(0, 100%, 67%)'
    }
}

// Call function for button

submitBtn.addEventListener('click', saveBtn)