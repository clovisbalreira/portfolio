export function mudarVisualisacaoLista(){
    let profiles = document.querySelectorAll('.profile')
    profiles.forEach( profile => {
        let ul = profile.querySelector('ul')
        profile.addEventListener('click', () => {
            if (ul.style.display === 'block') {
                ul.style.display = 'none'
            } else {
                ul.style.display = 'block'
            }
        })
        profile.addEventListener('mouseleave', () => {
            ul.style.display = 'none';
        });
    })
}