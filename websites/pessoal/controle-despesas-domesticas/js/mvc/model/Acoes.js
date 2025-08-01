export class Acoes{
    constructor(nome, sigla, ativo, dividendos, dataRendimento){
        this.nome = nome
        this.sigla = sigla
        this.ativo = ativo
        this.dividendos = dividendos
        this.dataRendimento = this.formatandoData(dataRendimento)
    }

    formatandoData(data){
        let formatada = data.toLocaleDateString("pt-BR", {
            year: "numeric",
            month: "numeric",
            day: "numeric"
        });
        return formatada
    }
}