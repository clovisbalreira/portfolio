const filmes = [
    { img: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/34cc591f-ae1b-44ed-bf8a-c4bbef84d588/compose?aspectRatio=1.78&format=webp&width=1200", top5: true, badge: "Normal", badgeColor: "red", progress: 100, youtube: "https://www.youtube.com/watch?v=J57HnR6FPW0" },
    { img: "https://i0.wp.com/www.otakupt.com/wp-content/uploads/2023/02/Super-Mario-Bros.-O-Filme-poster-2.jpg?resize=696%2C392&ssl=1", top5: false, badge: "Sucesso", badgeColor: "red", progress: 100, youtube: "https://www.youtube.com/watch?v=Cb4WV4aXBpk" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSohhBy3tR59wFNyT56cSJp49XWsj7y-q_bQQ&s", top5: false, badge: "Normal", badgeColor: "red", progress: 100, youtube: "https://www.youtube.com/watch?v=yeegSMOA0fk" },
    { img: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/999ecdbe-a698-4bb2-a435-1f0ef896979f/compose?aspectRatio=1.78&format=webp&width=1200", top5: false, badge: "Normal", badgeColor: "red", progress: 100, youtube: "https://www.youtube.com/watch?v=zOZR0TRnSU8" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSooHrvfUHZtqKh9w2BwYCjC2xo9nn6J3_Ajw&s", top5: false, badge: "Normal", badgeColor: "red", progress: 100, youtube: "https://www.youtube.com/watch?v=xjbxG5VEo4M" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9kLilOzi_8xe9WoiV74zfDJyi_OxuGjR0vA&s", top5: true, badge: "Normal", badgeColor: "red", progress: 100, youtube: "https://www.youtube.com/watch?v=kCdQgFN1tJk" },
    { img: "https://s2.glbimg.com/CmWTDCoo6xoRbr0ApqiVNH3ET3M=/smart/e.glbimg.com/og/ed/f/original/2015/12/18/tfa_poster_wide_header-1536x864-959818851016.jpg", top5: false, badge: "Normal", badgeColor: "red", progress: 100, youtube: "https://www.youtube.com/watch?v=4r0287tUEgk" },
    { img: "https://almanaquedacultura.com.br/wp-content/uploads/2025/02/jurassic-world-recomeco.jpg", top5: false, badge: "Normal", badgeColor: "red", progress: 100, youtube: "https://www.youtube.com/watch?v=dAdTQzckRjY" },
    { img: "https://i.ytimg.com/vi/E9pJa7GIR1Y/maxresdefault.jpg", top5: false, badge: "Sucesso", badgeColor: "red", progress: 100, youtube: "https://www.youtube.com/watch?v=E9pJa7GIR1Y" },
    { img: "https://i.ytimg.com/vi/t91oTW408Os/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA13NhenstmauZKqh0xtmqRXoDoxg", top5: false, badge: "Normal", badgeColor: "red", progress: 100, youtube: "https://www.youtube.com/watch?v=t91oTW408Os" },
    { img: "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/08/friends-1.jpeg?w=984", top5: false, badge: "Sucesso", badgeColor: "red", progress: 100, youtube: "https://www.youtube.com/watch?v=8wThS5WCzs4" },
    { img: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/675ff99a-d60c-456a-a510-c48c77db008d/compose?aspectRatio=1.78&format=webp&width=1200" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVx0eDToBmHXUI6WJeOgoc43dXJlV9gdPybQ&s", top5: true, badge: "Normal", badgeColor: "red", progress: 100, youtube: "https://www.youtube.com/watch?v=VR9PkssmnU8" },
    { img: "https://br.web.img3.acsta.net/newsv7/15/10/11/20/50/0981140.jpg", top5: false, badge: "Normal", badgeColor: "red", progress: 100, youtube: "https://www.youtube.com/watch?v=WBb3fojgW0Q" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHcSC4lerthmCCg-VyCCiY4aahQGmJoWPbwQ&s", top5: false, badge: "Normal", badgeColor: "red", progress: 100, youtube: "https://www.youtube.com/watch?v=iS5xXr-GOnM" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl4fudMEUSifNkdTZSTh-K6cjS2aGbko8JJg&s", top5: false, badge: "Normal", badgeColor: "red", progress: 100, youtube: "https://www.youtube.com/watch?v=Eq3pF5OhlJk" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlg0_3xHe5kBDGEiVUn71E6A7YAjbLLj--wA&s", top5: true, badge: "Normal", badgeColor: "red", progress: 100, youtube: "https://www.youtube.com/watch?v=T-WXbbvdFOw" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB667gK3PYepgl6EDMxdAJlveunid_amCu6w&s", top5: false, badge: "Sucesso", badgeColor: "red", progress: 100, youtube: "https://www.youtube.com/watch?v=dGzGUQ2CDzQ" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvvyGW4m3q0nrGhbnkKl1MnrwbB04AlOVcTQ&s", top5: false, badge: "Normal", badgeColor: "red", progress: 100, youtube: "https://www.youtube.com/watch?v=eqoFWLQQDyU" },
    { img: "https://m.media-amazon.com/images/S/pv-target-images/26af95fe4f36019092f711ed76615d151fb52dc0fa6847b2185ea7f28d0a80f4.jpg", top5: false, badge: "Normal", badgeColor: "red", progress: 100, youtube: "https://www.youtube.com/watch?v=LTtjZnAntac" },
    { img: "https://pge.se.gov.br/wp-content/uploads/2018/05/Guardians-of-the-Galaxy-Avengers-Infinity-War-Banner1.jpg", top5: false, badge: "Sucesso", badgeColor: "red", progress: 100, youtube: "https://www.youtube.com/watch?v=4jGRyEa2jhE" },
    { img: "https://m.media-amazon.com/images/S/pv-target-images/aea8e05996cc6f01055b2cf4262e42ed02ef8951490ebaa6ab36a72f8761ed4a.jpg", top5: false, badge: "Normal", badgeColor: "red", progress: 100, youtube: "https://www.youtube.com/watch?v=MXIMvjsp9II" },
    { img: "https://akamai.sscdn.co/uploadfile/letras/playlists/5/d/4/0/5d40de076fc02aa7115c879026fd91fb.jpg", top5: false, badge: "Normal", badgeColor: "red", progress: 100, youtube: "https://www.youtube.com/watch?v=zqfz04yCTnE" },
    { img: "https://m.media-amazon.com/images/S/pv-target-images/6877d5ae45496ba55521459452a64179662a78d6df01491b40f6b5dfcfa6847b.jpg", top5: true, badge: "Normal", badgeColor: "red", progress: 100, youtube: "https://www.youtube.com/watch?v=ZtoEXyNUXUI" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjuPXOM72SoAlGgVYRfSK_S57Qlye0QY8FUw&s", top5: false, badge: "Normal", badgeColor: "red", progress: 100, youtube: "https://www.youtube.com/watch?v=jfVTJm9NilA" },
]



export const usuarios = [
    { nome: "O Mestre da Animação (Desenhos e Animações)",    
        categories: [
            {
                title: "Favoritos",
                items: [
                    filmes[0],
                    filmes[1],
                    filmes[2],
                    filmes[3],
                    filmes[4],
                ]
            },
            {
                title: "Top 5",
                items: top5()
            },
            {
                title: "Sucessos",
                items: Sucesso()
            }
        ]
    },
    {
        nome: "Campo de Batalha (Duelos, Guerras e Esportes)",    
        categories: [
            {
                title: "Favoritos",
                items: [
                    filmes[5],
                    filmes[6],
                    filmes[7],
                    filmes[8],
                    filmes[9],
                ]
            },
            {
                title: "Top 5",
                items: top5()
            },
            {
                title: "Sucessos",
                items: Sucesso()
            },
            
        ]
    },
    {
        nome: "Maratonista (Séries)",    
        categories: [
            {
                title: "Favoritos",
                items: [
                    filmes[10],
                    filmes[11],
                    filmes[12],
                    filmes[13],
                    filmes[14],
                ]
            },
            {
                title: "Top 5",
                items: top5()
            },
            {
                title: "Sucessos",
                items: Sucesso()
            },
            
        ]
    },
    {
        nome: "Agente Secreto (Aventuras, Ações e Investigação)",    
        categories: [
            {
                title: "Favoritos",
                items: [
                    filmes[15],
                    filmes[16],
                    filmes[17],
                    filmes[18],
                    filmes[19],
                ]
            },
            {
                title: "Top 5",
                items: top5()
            },
            {
                title: "Sucessos",
                items: Sucesso()
            },
            
        ]
    },
    {
        nome: "O Guardião do Multiverso (Super-heróis)",    
        categories: [
            {
                title: "Favoritos",
                items: [
                    filmes[20],
                    filmes[21],
                    filmes[22],
                    filmes[23],
                    filmes[24],
                ]
            },
            {
                title: "Top 5",
                items: top5()
            },
            {
                title: "Sucessos",
                items: Sucesso()
            },
            
        ]
    },
]

function top5(){
    let top5 = []
    filmes.forEach( filme => {
        if(filme.top5) top5.push(filme)
    })
    return top5
}

function Sucesso(){
    let sucesso = []
    filmes.forEach( filme => {
        if(filme.badge == "Sucesso") sucesso.push(filme)
    })
    return sucesso
}
