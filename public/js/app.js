

console.log('Client side javascript folder')


const weahterForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


weahterForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    fetch('/weather?address=' + location).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            messageTwo.textContent = data.error
            console.log(data.error)
        } else {
    
            messageOne.textContent = `${data.location}.`
            messageTwo.textContent = `${data.forecast.description}. It's currently ${data.forecast.temperature} degrees out. 
                        It feels like ${data.forecast.feelslike} degrees out`
        }
    })
    }) 
})