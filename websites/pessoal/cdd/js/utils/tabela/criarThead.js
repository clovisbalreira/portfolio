export function criarThead(titulos, id){
    let thead = document.createElement('thead')
    let tr = document.createElement('tr')
    titulos.forEach( (titulo, index) => {
        let th = document.createElement('th')
        if(id != undefined && index == 0){
            th.setAttribute('id', id)
        } 
        if(titulo[0] == undefined){
            th.appendChild(titulo)
        }
        else{
            th.textContent = titulo
        }
        tr.appendChild(th)
        thead.appendChild(tr)
    })
    return thead
}