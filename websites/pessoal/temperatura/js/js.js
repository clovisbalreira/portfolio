const apiKey = '0bc2aaf9d46215a81b426f960c3f2722';
const apiCountryURL = "https://flagsapi.com/BR/shiny/64.png"
/* let cityInputs = document.querySelector("#city-input")
console.log(cityInputs) */
const getWeatherData = async(city) => {
  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`
  const res = await fetch(apiWeatherURL)
  const data = await res.json()
  return data
}

const showWeatherData = async(city) => {
    const data = await getWeatherData(city)
    const cityElement = document.querySelector("#city")
    const tempElement = document.querySelector("#temperature span")
    const descElement = document.querySelector("#description")
    const weatherIconElement = document.querySelector("#weather-icon")
    const countryElement = document.querySelector("#country")
    const humidityElement = document.querySelector("#humidity span")
    const windElement = document.querySelector("#wind span")
    
    cityElement.innerHTML = data.name
    tempElement.innerHTML = parseInt(data.main.temp)
    descElement.innerHTML = data.weather[0].description
    weatherIconElement.setAttribute('src',`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
    countryElement.setAttribute('src',`https://flagsapi.com/${data.sys.country}/shiny/64.png`)
    humidityElement.innerHTML = data.main.humidity
    windElement.innerHTML = data.wind.speed
    const weatherContainer = document.querySelector("#weather-data") 
    weatherContainer.classList.remove('hide')
}


function apertou(){
    const cityInput = document.querySelector("#city-input")
    const city = cityInput.value
    showWeatherData(city)
}

document.addEventListener("DOMContentLoaded", () => {
    const cityInput = document.querySelector("#city-input");
    cityInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            apertou();
        }
    });
});