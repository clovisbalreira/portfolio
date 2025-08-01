export function filtrarDatasAteXDias(dataRef, contas, dias) {
    let refTime = dataRef.getTime();
    let diffMs = dias * 24 * 60 * 60 * 1000;
    let contaMes = [] 
    
    contas.forEach(conta => {
        let condicao = false
        if(conta.valorTotal.length == undefined){
            if(conta.dataPagamento.length == undefined){
                let diff = refTime - conta.dataPagamento.getTime()
                condicao = diff >= 0 && diff <= diffMs
                if(condicao) contaMes.push(conta) 
            }else{
                condicao = conta.dataPagamento.filter(dataPagamento => {
                    let diff = refTime - dataPagamento.vencimento.getTime();
                    return diff >= 0 && diff <= diffMs;
                });
                if(condicao) contaMes.push(conta)
            }
        }else{
            condicao = conta.valorTotal.filter(data => {
                let diff = refTime - data.data.getTime();
                return diff >= 0 && diff <= diffMs;
            });
            if(condicao) contaMes.push(conta)
        }
    })
    return contaMes
}

