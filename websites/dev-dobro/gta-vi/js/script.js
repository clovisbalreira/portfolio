// OBJETIVO: dar comportamento ao site do GTA VI com JavaScript.
// Passos:
// 1. MENU QUE SOME AO ROLAR
//  - achar o menu no html
const menu = document.getElementById('menu')

//  - executar o evento de rolagem da janela

if (menu) {
    window.addEventListener( 'scroll', () => {
        //  - se a pagina descer mais de 50px, adicionar a classe "menu-rolado" - se voltar pro top, remover a classe
        window.scrollY > 50 ? menu.classList.add('menu-rolado')
        : menu.classList.remove('menu-rolado')
    })
}

// 2. BLOCOS QUE APARECEM   
//  - achar todos os elementos "aparecer"
const blocos = document.querySelectorAll('.aparecer')

//  - avisar quando cada um entra na tela

if (blocos.length) {
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach( entrada => {
            //  - ao entrar, adicionar a classe 'visivel'
            if(entrada.isIntersecting) entrada.target.classList.add('visivel')
        })
    })
    blocos.forEach( bloco => {
        observador.observe(bloco)
    })
}

// 3. VÍDEO QUE ANDA COM O SCROLL
//    - achar o vídeo da capa
const video = document.querySelector(".capa-video");
const capa = document.querySelector(".capa");
const capaPainel = document.querySelector(".capa-painel");
const capaConteudo = document.querySelector(".capa-conteudo");
const capaBarra = document.querySelector(".capa-barra");
const capaSeta = document.querySelector(".capa-seta");

//    - prender a capa na tela enquanto a pessoa rola
//    - sumir com o conteúdo da capa e revelar o vídeo
//    - avançar o tempo do vídeo conforme o scroll

if (window.gsap && window.ScrollTrigger && video && capa && capaPainel && capaConteudo) {
    gsap.registerPlugin(ScrollTrigger);

    video.muted = true;
    video.playsInline = true;
    video.setAttribute("playsinline", "true");

    const tocarVideo = function () {
        const playPromise = video.play();

        if (playPromise && typeof playPromise.catch === "function") {
            playPromise.catch(function () {
                // autoplay pode ser bloqueado até o usuário interagir
            });
        }
    };

    if (video.readyState >= 2) {
        tocarVideo();
    } else {
        video.addEventListener("loadeddata", tocarVideo, { once: true });
    }

    gsap.timeline({
        scrollTrigger: {
            trigger: capa,
            start: "top top",
            end: "+=2500",
            scrub: 1,
            pin: true,
        }
    })
        .to(video, { opacity: 1, ease: "none" }, 0)
        .to(".capa-conteudo, .capa-barra, .capa-seta", {
            opacity: 0,
            y: -40,
            scale: 0.6,
            duration: 0.1,
            ease: "none",
        }, 0.02)

    gsap.to(video, {
        currentTime: function () {
            if (!video.duration || Number.isNaN(video.duration)) {
                return 0;
            }

            return video.duration;
        },
        ease: "none",
        scrollTrigger: {
            trigger: capa,
            start: "top top",
            end: "+=1200",
            scrub: 1.2,
            invalidateOnRefresh: true,
        }
    });
}