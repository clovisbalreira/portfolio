var nomeFilmes = ['Escola de rock', 'A chegada', 'Aranha verso', 'Dez coisas que odeio em você', 'Matrix']
var listaFilmes = ['https://www.cafecomfilme.com.br/media/k2/items/cache/e65a3cb5bf8ddad3661b23ae64e6228c_XL.jpg?t=1499545054','https://i1.wp.com/umtigrenocinema.com/wp-content/uploads/2016/11/Chegada-Poster.jpg','https://th.bing.com/th/id/R.671941d5100c9db61135e3a0e27feba0?rik=E6rCTKUylR7Gxg&pid=ImgRaw&r=0','https://www.themoviedb.org/t/p/original/ngc3XoF4WWsFtuiEGefQoCFKDWW.jpg','https://th.bing.com/th/id/R.982af7c7dd21b9bac1cb1c76c69db513?rik=Kv3Y8c4LDp12Nw&riu=http%3a%2f%2fimage.tmdb.org%2ft%2fp%2foriginal%2fdXNAPwY7VrqMAo51EKhhCJfaGb5.jpg&ehk=YhYH6gfflGFs9QhZGc1xQA9GiJyklcMG4ZWo%2bQ5%2fUyE%3d&risl=&pid=ImgRaw&r=0']
var cantores = ['https://i.ytimg.com/vi/9V72SiyF6x0/maxresdefault.jpg','https://www.rbsdirect.com.br/imagesrc/25518056.jpg?w=800&h=535&a=c%201x','https://rollingstone.uol.com.br/media/_versions/legacy/2011/img-1001098-jupiter-maca_widelg.jpg']
var mostrarFilme = document.getElementById('mostrarFilmes')
function adicionarFilme(){
    var url = document.getElementById('filme').value
    var repetido = true
    listaFilmes.forEach( filme => {
        if( filme == url ){
            repetido = false
        }
    })
    console.log(repetido)
    if(repetido && url.slice(url.length - 3) == 'jpg'){
        listaFilmes.push(url)
        mostrarFilme.innerHTML +='<img src='+listaFilmes[listaFilmes.length-1]+'>'
    }
}



for(var i = 0; i < listaFilmes.length; i++){
    if(listaFilmes[i].slice(listaFilmes[i].length-3) == 'jpg'){
        mostrarFilme.innerHTML += '<img src='+listaFilmes[i]+'>'
        //document.write('<p>'+ nomeFilmes[i] +'</p>')    
    }
}

var i = 0
cantores.forEach( cantor => {
    document.write('<img src=' + cantor + '>')
})