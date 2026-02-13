export function ordenarProdutos(array){
    return [...array].sort((a, b) => a.produto.localeCompare(b.produto, 'pt-BR')) 
}