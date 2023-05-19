/* variaveis e seleção de elementos */
const apiKey = '0bc2aaf9d46215a81b426f960c3f2722';
const apiCountryURL = "https://flagsapi.com/BR/shiny/64.png"

/* funções */
const getWeatherData = async(city) => {
  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`
  const res = await fetch(apiWeatherURL)
  const data = await res.json()
  return data
}
const showWeatherData = async(city) => {
    const data = await getWeatherData(city)
    console.log(data)
}

/* eventos */
function apertou(){
    showWeatherData('canoas')
}
apertou()
