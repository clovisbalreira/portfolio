export function mostrarSetList(setlist) {
    setlist.sort((a, b) => {
        let dataA = moment(a.dia, 'DD/MM/YY').toDate();
        let dataB = moment(b.dia, 'DD/MM/YY').toDate();        
        return dataB - dataA;
    });
    let section = document.querySelector('section')
    setlist.forEach( set => {
        let h2 = document.createElement('h2')
        h2.textContent = set.dia
        section.appendChild(h2)
        set.musicas.forEach( musica => {
            let p = document.createElement('p')
            p.textContent = `${musica[0].interprete.interprete.interprete} - ${musica[0].musica.musica.musica}`
            section.appendChild(p)
        })
    });
}