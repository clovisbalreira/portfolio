setInterval(() => {
    let data = new Date()
    let dia =  `${data.getDate() < 10 ? '0' + data.getDate() : data.getDate()}/${data.getMonth() + 1 < 10 ? '0' + (data.getMonth() + 1) : (data.getMonth() + 1)}`
    document.getElementById('hour').textContent = `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`
    document.getElementById('noturno').textContent = dia
    document.getElementById('tarde').textContent = dia
}, 1000)