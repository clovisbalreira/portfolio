const dropArea = document.querySelector(".drag-files")
dropArea.addEventListener('dragover', () => {
    dropArea.classList.add("dragover")
})
dropArea.addEventListener('dragleave', () => {
    dropArea.classList.remove("dragover")
})

let download = document.querySelectorAll('.bar')
let numero = parseInt(Math.random() * 100)
download[0].querySelector('progress').value = numero
download[0].querySelector('span').innerHTML = `${numero}%`
numero = parseInt(Math.random() * 100)
download[1].querySelector('progress').value = numero
download[1].querySelector('span').innerHTML = `${numero}%`