export function atualizarMes(){
    try{
        let dataAtual = new Date();
        let diaAtual = dataAtual.getDate();
        let mesAtual = dataAtual.getMonth();
        let select = document.getElementById('mes')
        select.querySelectorAll('option').forEach( mes => {
            if(parseInt(mes.getAttribute('value')) == mesAtual + 2 && diaAtual > 15){
                parseInt(mes.setAttribute('selected', 'selected'));
            }else if(parseInt(mes.getAttribute('value')) == mesAtual + 1 && diaAtual <= 15){
                parseInt(mes.setAttribute('selected', 'selected'));
            }
        })
    }catch(e){}
}