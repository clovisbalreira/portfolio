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
    let temperatura = document.querySelector('.temp .number')
    /* temperatura */
    temperatura.innerHTML = parseInt(data.list[0].main.temp)
    let div = document.createElement('div')
    div.classList.add('maxmin')
    div.innerHTML = parseInt(data.list[0].main.temp_max) + "º "
    let span = document.createElement('span')
    span.innerHTML = parseInt(data.list[0].main.temp_min) + "º"
    div.appendChild(span)
    temperatura.appendChild(div)
    /* vento */
    let ventoUmidadeChuva = document.querySelectorAll('.stats .info h5')
    ventoUmidadeChuva[0].innerHTML = data.list[0].wind.speed
    let vento = document.createElement('span')
    vento.innerHTML = 'km/h'
    ventoUmidadeChuva[0].appendChild(vento)
    /* umidadde */
    ventoUmidadeChuva[1].innerHTML = data.list[0].main.humidity
    let umidade = document.createElement('span')
    umidade.innerHTML = '%'
    ventoUmidadeChuva[1].appendChild(umidade)
    /* chuva */
    ventoUmidadeChuva[2].innerHTML = data.list[0].clouds.all
    let chuva = document.createElement('span')
    chuva.innerHTML = '%'
    ventoUmidadeChuva[2].appendChild(chuva)
    /* qualidade do ar */
    let ar = document.querySelector('.air-qualify')
    ar.querySelector('.title img').setAttribute('src',`http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`)
    ar.querySelector('.good').innerHTML = data.list[0].weather[0].description
    ar.querySelector('.number').innerHTML = parseInt(data.list[0].main.temp)
    ar.querySelectorAll('.info .number')[0].querySelector('p').innerHTML = data.list[0].main.pressure
    ar.querySelectorAll('.info .number')[1].querySelector('p').innerHTML = data.list[0].wind.deg
    ar.querySelectorAll('.info .number')[2].querySelector('p').innerHTML = data.list[0].wind.gust
    /* horario */
    let horaAgora = new Date()
    let hora = document.querySelector('.now').innerHTML = horaAgora.getHours() + ':' + horaAgora.getMinutes()
    /* outros dias */
    let diaHoje = data.list[0].dt_txt.slice(8,10)
    let inicioDia = 0
    let atualDias = 0
    let dias = document.querySelectorAll('.week-weather .day')
    let n = 0
    for(let i = 0; i < data.list.length; i ++){
      let dataLista = data.list[i].dt_txt
      inicioDia = dataLista.slice(8,10)
      if(inicioDia != atualDias && diaHoje != inicioDia){
        dias[n].querySelector('h4').innerHTML = dataLista.slice(8,10) + '/' + dataLista.slice(5,7) + '/' + dataLista.slice(0,4)
        dias[n].querySelector('img').setAttribute('src',`http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}.png`)
        let p = dias[n].querySelector('p')
        p.innerHTML = parseInt(data.list[i].main.temp_max) + "º "
        let spanP = document.createElement('span')
        spanP.innerHTML = parseInt(data.list[i].main.temp_min) + "º "
        p.appendChild(spanP)
        n++
      }
      atualDias = inicioDia
    }

}

/* eventos */
function apertou(){
    showWeatherData('canoas')
}
apertou()