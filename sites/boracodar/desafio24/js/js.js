const colorPreview = document.querySelector('.preview')
const colorSlider = document.getElementById('hue-slider')
const brightnessSlider = document.getElementById('brightness-slider')
const contrastSlider = document.getElementById('contrast-slider')
const spanColor = document.querySelector('.span-color')
const spanBrightness = document.querySelector('.span-brightness')
const spanContrast = document.querySelector('.span-contrast')

colorSlider.addEventListener('input', function(){
    const hue = this.value 
    const color = `hsl(${hue}, 100%, 50%)`
    colorPreview.style.background = color
    colorPreview.style.boxShadow = `0px 0px 53px 13px ${color}`
    spanColor.style.background = color
})

brightnessSlider.addEventListener('input', function(){
    const brightness = this.value
    colorPreview.style.filter = `brightness(${brightness}%)`
    spanBrightness.innerHTML = `${brightness}%`
})

contrastSlider.addEventListener('input', function(){
    const contrast = this.value
    colorPreview.style.filter = `contrast(${contrast}%)`
    spanContrast.innerHTML = `${contrast}%`
})