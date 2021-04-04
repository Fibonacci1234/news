const name = document.querySelector("#name")
const description = document.querySelector("#description")
const temp = document.querySelector("#temp")
const humidity = document.querySelector("#humidity")
const img = document.querySelector("#img")
const wind = document.querySelector("#wind")
const pressure = document.querySelector("#pressure")
const date = document.querySelector("#date")

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true})
 

function successLocation(position) { 
    // console.log(position)
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=58eb9b73c6ff15206d68a765952d5d49&units=metric&lang=vi`)
    .then(response => {
        if(response.ok) {
            return response.json()
        }
    }
)
    .then((data => {
        // console.log(data)
        name.innerText = 'Thời tiết ' + data.name
        img.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"
        description.innerText =   data.weather[0].description
        temp.innerText =  + data.main.temp + " ℃"
        date.innerText = new Date().toLocaleString('vi-VN')
        humidity.innerText = '💧 '+ data.main.humidity + ' %'
        wind.innerText = "💨" + data.wind.speed + " m/s"
        pressure.innerText = "⏲" + data.main.pressure + " Pa"

    }))
}
function errorLocation() {}
