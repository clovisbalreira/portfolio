var cardapios = [
    {prato:'Niguiri-Zushi',descricao:'Tradicionalíssimo ma culiníria japonesa. São bolinhos de arroz, temperados com vinagre, açúcar, sal, ajinomoto e alga, sobre os quais são colocados peixes e frutos do mar frescos.',imagem:'niguirizushi.png',preco: 00},
    {prato:'Tirashi-Zushi',descricao:'São fatias de peixes, ovas de peixes e frutos do mar frescos dispostos sobre o arroz de sushi, servidos em uma caixa de laca.',imagem:'tirashizushi.png',preco: 00},
    {prato:'Temaki-Zushi',descricao:'Numa folha de Nori (alga), espalha-se o arroz de sushi, coloca-se atum a gosto, salmão, camarão ou  qualquer outro produto do sushi bar e, finalmente, enrolamos em forma de cone. Devem ser degustados imediatamente para não perder a sua textura crocante.',imagem:'temakizushi.png',preco: 00},
    {prato:'Unagui-Zushi',descricao:'Enguia previamente cozida no vapor. A porção com oito pedaços é preparada no KATA (forma de madeira), no qual são dispostas uma camada de arroz de sushi e, sobre esta, uma camada de enguia e, em seguida, prensada e cortada. Depois de pronto, pincela-se a enguia com TARÊ (molho adocicado a base de mel e shoyu).',imagem:'unaguizushi.png',preco: 00},
    {prato:'Tekka-Domburi',descricao:'Pouco conhecido pelos brasileiros, esta é uma outra maneira de se degustar o sushi de aum. Sobre o arroz de sushi, dispõem-se tenras fatias de atum, que são servidas no DOMBURI (tigela de porcelana japonesa) e acompanhado de missoshiru.',imagem:'tekkadomburi.png',preco: 00},
    {prato:'Futomaki-Zushi',descricao:'É uma espécie de rocambole. Sobre a folha de NORI (alga), espalha-se o arroz de sushi, recheia-se com SOBORO (peixe cozido, es migalhado e desidratado), tiras de omelete japonês, kampyô e espinafre japonês, enrola-se tudo e corta-se em pedaços.',imagem:'futomakizushi.png',preco: 00},
    {prato:'Combinado Sushi-Sashimi',descricao:'Criado para atender a sugestão de nossos clientes, o prato é uma combinação de três espécies de peixes, geralmente, atum, salmão e robalo fatiados, bolinhos de uramaki e sushis variados. Porção para duas pessoas.',imagem:'combinadosushisashimi.png',preco: 00},
    {prato:'Hossomaki-Zushi',descricao:'É uma espécie de rocambole fino. Sobre a folha de NORI, espalha-se o arroz de sushi, recheia-se a gosto com pepino, atum, salmão, salmão-skin, NATTO (soja fermentada), kani-kama, negui-salmon, negui-maguro, ou qualquer produto do sushi bar, enrola-se e corta-se em pedaços.',imagem:'hossomakizushi.png',preco: 00},
    {prato:'Uramaki',descricao:'Também conhecido por califórnia roll, os uramakis são rolinhos recheados com peixe cru, kani-kama, camarão, pepino e cortados em pedaços.',imagem:'uramaki.png',preco: 00},
    {prato:'Batayaki',descricao:'Legumes, cogumelos e fatias de filé mignon, frango ou salmão dispostas sobre uma panela de ferro untada com pouca manteiga e cozida no próprio vapor. Servido com o molho ponzu e momijioroshi.',imagem:'batayaki.png',preco: 00},
    {prato:'Chawan-Mushi',descricao:'Aperitivo bastante apreciado pelos japoneses. São pedaços de peixe branco, cogumelo e camarão, mergulhados em ovo temperado com Dashi (caldo à base de lascas de peixe seco e algas), cozidos no vapor por alguns minutos e servido em seguida.',imagem:'chawanmushi.png',preco: 00},
    {prato:'Hiyayakko',descricao:'Tofu frito, polvilhado com Katsuobushi (lascas de peixe seco), gengibre ralado e cebolinha.',imagem:'hiyayakko.png',preco: 00},
    {prato:'Dobinmushi',descricao:'É um suave caldo à base de algas com pedaço de peixe branco, cogumelo e WAKAME (espécie de alga). Pode ser tomado tanto antes como depois das refeições. Rico em vitaminas e proteínas, substitui o missoshiru.',imagem:'dobinmushi.png',preco: 00},
    {prato:'Ohitashi',descricao:'Espinafre japonês ou acelga cozidos e servidos com Katsuobushi.',imagem:'ohitashi.png',preco: 00},
    {prato:'Tororo Senguiri',descricao:'Cará cortado em tiras, sobre o qual colocamos algas desidratadas e molho Ponzu.',imagem:'tororosenguiri.png',preco: 00},
    {prato:'Sunomono',descricao:'Aperitivo a base de frutos do mar, pepino e algas temperados com Sambaizu (molho à base de vinagre, de arroz, sake e shoyu). - Especial: pepino, frutos do mar e Wakame (algas).',imagem:'sunomono.png',preco: 00},
]

var sectionCardapio = document.getElementById('cardapio') 
cardapios.forEach( cardapio => {
    var div = document.createElement('div')
    var divTextos = document.createElement('div')
    var h2Nome = document.createElement('h2')
    h2Nome.innerHTML = cardapio.prato 
    divTextos.appendChild(h2Nome)
    var pDescricao = document.createElement('p')
    pDescricao.innerHTML = cardapio.descricao 
    divTextos.appendChild(pDescricao)
    div.appendChild(divTextos)
    var divImagem = document.createElement('div')
    var img = document.createElement('img')
    img.setAttribute('src', './img/cardapio/'+cardapio.imagem)
    img.setAttribute('alt', cardapio.nome)
    divImagem.appendChild(img)
    var span = document.createElement('span')
    span.innerHTML = 'R$: ' + cardapio.preco
    divImagem.appendChild(span)
    div.appendChild(divImagem)
    sectionCardapio.appendChild(div)
})