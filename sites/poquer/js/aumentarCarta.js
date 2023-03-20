function aumentarCarta(img, naipe, valor){
    if(naipe != '' || valor == true){
        img.forEach( (i) => {
            i.classList.add('cartaMaior')           
        });
    }else if(Array.isArray(valor)){
        valor.forEach( v => {
            img.forEach( i => {
                if(i.className == v){
                    i.classList.add('cartaMaior')           
                }
            })
        })
    }else{
        img.forEach( i => {
            if(i.className == valor){
                i.classList.add('cartaMaior')           
            }
        })
    }
}
