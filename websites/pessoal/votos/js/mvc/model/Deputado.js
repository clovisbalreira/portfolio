export class Deputado{
    constructor(id, nome, foto, estado, fotoEstado, partido, fotoPartido){
        this.id = id
        this.nome = nome
        this.foto = foto
        this.estado = estado
        this.fotoEstado = fotoEstado
        this.partido = partido
        this.fotoPartido = fotoPartido
        this.leis = []
    }
}