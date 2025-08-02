export function mostrarPrestacoesAcoes(classe){
    let classes = document.querySelectorAll(`[class^="${classe}"]`)
    classes.forEach(  ( classe ) => {
        classe.addEventListener('click' , () => {
            let id = classe.getAttribute('class')
            let trs = classe.parentNode.querySelectorAll('tr')
            trs.forEach( (tr, index) => {
                let classe = tr.getAttribute('class');
                if(tr.getAttribute('class') == id){
                    if(trs[index + 1].querySelector('td').querySelector('table').style.display == 'table'){
                        trs[index + 1].querySelector('td').querySelector('table').style.display = 'none' 
                    }else{
                        trs[index + 1].querySelector('td').querySelector('table').style.display = 'table'
                        trs[index + 1].querySelector('td').querySelector('table').style.width = '100%'
                    }
                }else if (classe && classe.includes(`${classe}`)) {
                  trs[index + 1].querySelector('td').querySelector('table').style.display = 'none'
                }
            })
        })
    })
}