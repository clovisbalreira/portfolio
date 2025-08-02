export function criarAleatorioMensal(){
    let hoje = new Date();
    let contas = []
    for (let i = 0; i < 5; i++) {
        let data = new Date(hoje); 
        data.setDate(data.getDate() - (i * 30));
        let valor = Math.floor(Math.random() * 300)
        let consumo = valor * 1
        contas.push({ data : data.toLocaleDateString('pt-BR'), valor: valor, consumo : consumo})

    }
    return contas
}
