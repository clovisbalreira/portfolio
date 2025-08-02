export function menu() {
    let header = document.querySelector('header')
    let nav = document.createElement('nav')
    let ul = document.createElement('ul')
    let links = [
        { href: './index.html', text: 'Fatura' },
        { href: './mensal.html', text: 'Contas Mensal' },
        { href: './essencial.html', text: 'Contas Essencial' },
    ]
    links.forEach(link => {    
        let li = document.createElement('li')
        let a = document.createElement('a')
        a.href = link.href
        a.textContent = link.text
        li.appendChild(a)
        ul.appendChild(li)
        nav.appendChild(ul)
        header.appendChild(nav)
    })
}