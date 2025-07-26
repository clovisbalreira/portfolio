import { Competicoes } from "../model/Competicoes.js";
import { Campeonato } from "../model/Campeonato.js";
import { DatasCampeonatos } from "../model/DatasCampeonatos.js";

export const competicoes = [
    new Competicoes(
        1, 
        'Calendário atual', 
        '<p>O calendário do futebol brasileiro é um dos mais intensos e complexos do mundo. Diferente de muitos países da Europa, onde as competições nacionais seguem o calendário europeu (de agosto a maio), o Brasil adota o calendário anual, com início em janeiro e término em dezembro. Essa estrutura impacta diretamente clubes, atletas e torcedores, gerando debates frequentes sobre sua eficácia.</p><h2>Estrutura do Calendário</h2><p>O ano futebolístico no Brasil é dividido basicamente em três grandes blocos:<ul><li><strong>Campeonatos Estaduais (janeiro a abril):</strong><p>Cada estado brasileiro organiza seu próprio campeonato, como o Paulistão (SP), Carioca (RJ), Gauchão (RS) e Mineiro (MG). Essas competições têm grande tradição, rivalidades históricas e importância regional, mas vêm perdendo espaço frente ao calendário apertado e ao desgaste dos jogadores.</ul></li><li><strong>Competições Nacionais (abril a dezembro):</strong><p>Incluem o Campeonato Brasileiro (Séries A, B, C e D) e a Copa do Brasil. A Série A, principal torneio do país, segue um formato de pontos corridos, com 38 rodadas. Já a Copa do Brasil é um torneio eliminatório que envolve clubes de todas as divisões, aumentando a imprevisibilidade e o interesse nacional.</p></li><li><strong>Competições Internacionais (março a novembro):</strong><p>Clubes brasileiros também disputam torneios como a Copa Libertadores da América e a Copa Sul-Americana, organizados pela Conmebol. Esses campeonatos geram viagens longas e sobrecarga de jogos, agravando ainda mais a disputa por datas.</p></li></ul><h2>Impactos e Desafios</h2><p>O calendário atual gera uma série de desafios para os clubes e atletas:</p><ul><li><strong>Excesso de jogos:</strong> A combinação de estaduais, nacionais e internacionais resulta em um número elevado de partidas, o que pode levar a lesões e desgaste físico.</li><li><strong>Falta de datas para treinos:</strong> Com tantos jogos, os clubes têm dificuldade em realizar treinos táticos e recuperar fisicamente seus jogadores.</li><li><strong>Sobreposição de torneios:</strong> Muitas vezes, os clubes precisam escalar times mistos ou reservas em competições importantes devido à sobrecarga de jogos.</li><li><strong>Desvalorização dos estaduais:</strong> Com o calendário tão apertado, muitos veem os campeonatos estaduais como meras formalidades, prejudicando a qualidade técnica e o interesse do público.</li></ul><h2>Propostas de Reformas</h2><p>Debates sobre mudanças no calendário são frequentes, com propostas que incluem:</p><ul><li>Redução ou extinção dos estaduais;</li><li>Adoção do calendário europeu, facilitando a janela de transferências e o intercâmbio com clubes internacionais;</li><li>Criação de uma Liga Nacional de Clubes para organizar o calendário de maneira mais racional.</li></ul>', 
        new Date('01/01/2025'), 
        
        [
            new Campeonato('Data F.I.F.A.', 'Seleções', 'blue', [
                new DatasCampeonatos('Eliminatórias', [
                    new Date('03/17/2025'),
                    new Date('03/18/2025'),
                    new Date('03/19/2025'),
                    new Date('03/20/2025'),
                    new Date('03/21/2025'),
                    new Date('03/22/2025'),
                    new Date('03/23/2025'),
                    new Date('03/24/2025'),
                    new Date('03/25/2025')
                    ],
                    
                ),
                new DatasCampeonatos('Eliminatórias', [
                    new Date('06/02/2025'),
                    new Date('06/03/2025'),
                    new Date('06/04/2025'),
                    new Date('06/05/2025'),
                    new Date('06/06/2025'),
                    new Date('06/07/2025'),
                    new Date('06/08/2025'),
                    new Date('06/09/2025'),
                    new Date('06/10/2025')
                    ],
                    
                ),
                new DatasCampeonatos('Eliminatórias', [
                    new Date('09/01/2025'),
                    new Date('09/02/2025'),
                    new Date('09/03/2025'),
                    new Date('09/04/2025'),
                    new Date('09/05/2025'),
                    new Date('09/06/2025'),
                    new Date('09/07/2025'),
                    new Date('09/08/2025'),
                    new Date('09/09/2025')
                    ],
                    
                ),
                new DatasCampeonatos('Amistosos Internacionais', [
                    new Date('10/06/2025'),
                    new Date('10/07/2025'),
                    new Date('10/08/2025'),
                    new Date('10/09/2025'),
                    new Date('10/10/2025'),
                    new Date('10/11/2025'),
                    new Date('10/12/2025'),
                    new Date('10/13/2025'),
                    new Date('10/14/2025')
                    ],
                    
                ),
                new DatasCampeonatos('Amistosos Internacionais', [
                    new Date('11/10/2025'),
                    new Date('11/11/2025'),
                    new Date('11/12/2025'),
                    new Date('11/13/2025'),
                    new Date('11/14/2025'),
                    new Date('11/15/2025'),
                    new Date('11/16/2025'),
                    new Date('11/17/2025'),
                    new Date('11/18/2025')
                    ],
                    
                ),
            ]),
            new Campeonato('Copa do Mundo de Clubes', 'Internacional', 'green', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('06/14/2025'),
                    new Date('06/15/2025'),
                    new Date('06/16/2025'),
                    new Date('06/17/2025'),
                    new Date('06/18/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('06/19/2025'),
                    new Date('06/20/2025'),
                    new Date('06/21/2025'),
                    new Date('06/22/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('06/23/2025'),
                    new Date('06/24/2025'),
                    new Date('06/25/2025'),
                    new Date('06/26/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Oitavas de final', [
                    new Date('06/28/2025'),
                    new Date('06/29/2025'),
                    new Date('06/30/2025'),
                    new Date('07/01/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('07/04/2025'),
                    new Date('07/05/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('07/08/2025'),
                    new Date('07/09/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('07/13/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Interclubes', 'Internacional', 'green', [
                new DatasCampeonatos('Dérbi das Américas', [
                    new Date('12/10/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Copa Challenger', [
                    new Date('12/13/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final da Copa Intercontinental', [
                    new Date('12/17/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Libertadores da america', 'Continental', 'red', [
                new DatasCampeonatos('Primeira Etapa', [
                    new Date('02/04/2025'),
                    new Date('02/05/2025'),
                    new Date('02/06/2025'),
                    new Date('02/11/2025'),
                    new Date('02/12/2025'),
                    new Date('02/13/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Segunda Etapa', [
                    new Date('02/18/2025'),
                    new Date('02/19/2025'),
                    new Date('02/20/2025'),
                    new Date('02/25/2025'),
                    new Date('02/26/2025'),
                    new Date('02/27/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Terceira Etapa', [
                    new Date('03/04/2025'),
                    new Date('03/05/2025'),
                    new Date('03/06/2025'),
                    new Date('03/11/2025'),
                    new Date('03/12/2025'),
                    new Date('03/13/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('1º Rodada', [
                    new Date('04/01/2025'),
                    new Date('04/02/2025'),
                    new Date('04/03/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('04/08/2025'),
                    new Date('04/09/2025'),
                    new Date('04/10/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('04/22/2025'),
                    new Date('04/23/2025'),
                    new Date('04/24/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('05/06/2025'),
                    new Date('05/07/2025'),
                    new Date('05/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('05/13/2025'),
                    new Date('05/14/2025'),
                    new Date('05/15/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('05/27/2025'),
                    new Date('05/28/2025'),
                    new Date('05/29/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Oitavas de final', [
                    new Date('08/12/2025'),
                    new Date('08/13/2025'),
                    new Date('08/14/2025'),
                    new Date('08/19/2025'),
                    new Date('08/20/2025'),
                    new Date('08/21/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('09/16/2025'),
                    new Date('09/17/2025'),
                    new Date('09/18/2025'),
                    new Date('09/23/2025'),
                    new Date('09/24/2025'),
                    new Date('09/25/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('10/21/2025'),
                    new Date('10/22/2025'),
                    new Date('10/23/2025'),
                    new Date('10/28/2025'),
                    new Date('10/29/2025'),
                    new Date('10/30/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/29/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Copa Sul Americana', 'Continental', 'red', [
                new DatasCampeonatos('Primeira fase', [
                    new Date('03/04/2025'),
                    new Date('03/05/2025'),
                    new Date('03/06/2025'),
                    new Date('03/11/2025'),
                    new Date('03/12/2025'),
                    new Date('03/13/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('1º Rodada', [
                    new Date('04/01/2025'),
                    new Date('04/02/2025'),
                    new Date('04/03/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('04/08/2025'),
                    new Date('04/09/2025'),
                    new Date('04/10/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('04/22/2025'),
                    new Date('04/23/2025'),
                    new Date('04/24/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('05/06/2025'),
                    new Date('05/07/2025'),
                    new Date('05/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('05/13/2025'),
                    new Date('05/14/2025'),
                    new Date('05/15/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('05/27/2025'),
                    new Date('05/28/2025'),
                    new Date('05/29/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Playoffs de Oitavas de final', [
                    new Date('07/15/2025'),
                    new Date('07/16/2025'),
                    new Date('07/17/2025'),
                    new Date('07/22/2025'),
                    new Date('07/23/2025'),
                    new Date('07/24/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Oitavas de final', [
                    new Date('08/12/2025'),
                    new Date('08/13/2025'),
                    new Date('08/14/2025'),
                    new Date('08/19/2025'),
                    new Date('08/20/2025'),
                    new Date('08/21/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('09/16/2025'),
                    new Date('09/17/2025'),
                    new Date('09/18/2025'),
                    new Date('09/23/2025'),
                    new Date('09/24/2025'),
                    new Date('09/25/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('10/21/2025'),
                    new Date('10/22/2025'),
                    new Date('10/23/2025'),
                    new Date('10/28/2025'),
                    new Date('10/29/2025'),
                    new Date('10/30/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/22/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Recopa Sul Americana', 'Continental', 'red', [
                new DatasCampeonatos('Final', [
                    new Date('02/20/2025'),
                    new Date('02/27/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Copa do Brasil', 'Nacional', 'yellow', [
                new DatasCampeonatos('Primeira fase', [
                    new Date('02/18/2025'),
                    new Date('02/19/2025'),
                    new Date('02/20/2025'),
                    new Date('02/25/2025'),
                    new Date('02/26/2025'),
                    new Date('02/27/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('Segunda fase', [
                    new Date('03/04/2025'),
                    new Date('03/05/2025'),
                    new Date('03/06/2025'),
                    new Date('03/11/2025'),
                    new Date('03/12/2025'),
                    new Date('03/13/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('Terceira fase', [
                    new Date('04/29/2025'),
                    new Date('04/30/2025'),
                    new Date('05/01/2025'),
                    new Date('05/20/2025'),
                    new Date('05/21/2025'),
                    new Date('05/22/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('Oitavas de final', [
                    new Date('07/29/2025'),
                    new Date('07/30/2025'),
                    new Date('07/31/2025'),
                    new Date('08/05/2025'),
                    new Date('08/06/2025'),
                    new Date('08/07/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('08/26/2025'),
                    new Date('08/27/2025'),
                    new Date('08/28/2025'),
                    new Date('09/09/2025'),
                    new Date('09/10/2025'),
                    new Date('09/11/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('10/04/2025'),
                    new Date('10/05/2025'),
                    new Date('10/18/2025'),
                    new Date('10/19/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/02/2025'),
                    new Date('11/09/2025'),
                    ],
                    'yellow'
                ),
            ]),
            new Campeonato('Supercopa do Brasil', 'Nacional', 'yellow', [
                new DatasCampeonatos('Final', [
                    new Date('02/02/2025'),
                    ],
                    'yellow'
                ),
            ]),
            new Campeonato('Campeonato Brasileiro A', 'Nacional', 'yellow', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('03/29/2025'),
                    new Date('03/30/2025'),
                    new Date('03/31/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('04/05/2025'),
                    new Date('04/06/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('04/12/2025'),
                    new Date('04/13/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('04/15/2025'),
                    new Date('04/16/2025'),
                    new Date('04/17/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('04/19/2025'),
                    new Date('04/20/2025'),
                    new Date('04/21/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('04/26/2025'),
                    new Date('04/27/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('05/02/2025'),
                    new Date('05/03/2025'),
                    new Date('05/04/2025'),
                    new Date('05/05/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('05/10/2025'),
                    new Date('05/11/2025'),
                    new Date('05/12/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('05/17/2025'),
                    new Date('05/18/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('10º Rodada', [
                    new Date('05/24/2025'),
                    new Date('05/25/2025'),
                    new Date('05/26/2025'),
                    new Date('06/04/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('11º Rodada', [
                    new Date('05/31/2025'),
                    new Date('06/01/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('12º Rodada', [
                    new Date('06/12/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('13º Rodada', [
                    new Date('07/12/2025'),
                    new Date('07/13/2025'),
                    new Date('07/14/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('14º Rodada', [
                    new Date('07/16/2025'),
                    new Date('07/17/2025'),
                    new Date('07/29/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('15º Rodada', [
                    new Date('07/19/2025'),
                    new Date('07/20/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('16º Rodada', [
                    new Date('07/23/2025'),
                    new Date('07/24/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('17º Rodada', [
                    new Date('07/26/2025'),
                    new Date('07/27/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('18º Rodada', [
                    new Date('08/02/2025'),
                    new Date('08/03/2025'),
                    new Date('08/04/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('19º Rodada', [
                    new Date('08/09/2025'),
                    new Date('08/10/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('20º Rodada', [
                    new Date('08/16/2025'),
                    new Date('08/17/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('21º Rodada', [
                    new Date('08/23/2025'),
                    new Date('08/24/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('22º Rodada', [
                    new Date('08/30/2025'),
                    new Date('08/31/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('23º Rodada', [
                    new Date('09/13/2025'),
                    new Date('09/14/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('24º Rodada', [
                    new Date('09/20/2025'),
                    new Date('09/21/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('25º Rodada', [
                    new Date('09/27/2025'),
                    new Date('09/28/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('26º Rodada', [
                    new Date('09/30/2025'),
                    new Date('10/01/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('27º Rodada', [
                    new Date('10/15/2025'),
                    new Date('10/16/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('28º Rodada', [
                    new Date('10/25/2025'),
                    new Date('10/26/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('29º Rodada', [
                    new Date('11/05/2025'),
                    new Date('11/06/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('30º Rodada', [
                    new Date('11/19/2025'),
                    new Date('11/20/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('31º Rodada', [
                    new Date('11/22/2025'),
                    new Date('11/23/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('32º Rodada', [
                    new Date('11/29/2025'),
                    new Date('11/30/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('33º Rodada', [
                    new Date('12/03/2025'),
                    new Date('12/04/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('34º Rodada', [
                    new Date('12/06/2025'),
                    new Date('12/07/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('35º Rodada', [
                    new Date('12/10/2025'),
                    new Date('12/11/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('36º Rodada', [
                    new Date('12/13/2025'),
                    new Date('12/14/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('37º Rodada', [
                    new Date('12/17/2025'),
                    new Date('12/18/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('38º Rodada', [
                    new Date('12/20/2025'),
                    new Date('12/21/2025'),
                    ],
                    'yellow'
                ),
            ]),
            new Campeonato('Campeonato Brasileiro B', 'Nacional', 'yellow', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('04/04/2025'),
                    new Date('04/05/2025'),
                    new Date('04/06/2025'),
                    new Date('04/07/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('04/10/2025'),
                    new Date('04/12/2025'),
                    new Date('04/13/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('04/15/2025'),
                    new Date('04/16/2025'),
                    new Date('04/17/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('04/19/2025'),
                    new Date('04/20/2025'),
                    new Date('04/21/2025'),
                    new Date('04/22/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('04/24/2025'),
                    new Date('04/25/2025'),
                    new Date('04/26/2025'),
                    new Date('04/27/2025'),
                    new Date('04/28/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('05/02/2025'),
                    new Date('05/03/2025'),
                    new Date('05/04/2025'),
                    new Date('05/05/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('05/08/2025'),
                    new Date('05/10/2025'),
                    new Date('05/11/2025'),
                    new Date('05/12/2025'),
                    new Date('05/14/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('05/15/2025'),
                    new Date('05/16/2025'),
                    new Date('05/17/2025'),
                    new Date('05/18/2025'),
                    new Date('05/19/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('05/23/2025'),
                    new Date('05/24/2025'),
                    new Date('05/25/2025'),
                    new Date('05/26/2025'),
                    new Date('07/27/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('10º Rodada', [
                    new Date('05/29/2025'),
                    new Date('05/30/2025'),
                    new Date('05/31/2025'),
                    new Date('06/01/2025'),
                    new Date('06/02/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('11º Rodada', [
                    new Date('06/05/2025'),
                    new Date('06/06/2025'),
                    new Date('06/07/2025'),
                    new Date('06/08/2025'),
                    new Date('06/09/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('12º Rodada', [
                    new Date('06/13/2025'),
                    new Date('06/14/2025'),
                    new Date('06/15/2025'),
                    new Date('06/16/2025'),
                    new Date('06/17/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('13º Rodada', [
                    new Date('06/20/2025'),
                    new Date('06/21/2025'),
                    new Date('06/22/2025'),
                    new Date('06/23/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('14º Rodada', [
                    new Date('06/26/2025'),
                    new Date('06/27/2025'),
                    new Date('06/28/2025'),
                    new Date('06/29/2025'),
                    new Date('06/30/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('15º Rodada', [
                    new Date('07/03/2025'),
                    new Date('07/04/2025'),
                    new Date('07/05/2025'),
                    new Date('07/06/2025'),
                    new Date('07/07/2025'),
                    new Date('07/08/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('16º Rodada', [
                    new Date('07/10/2025'),
                    new Date('07/11/2025'),
                    new Date('07/12/2025'),
                    new Date('07/13/2025'),
                    new Date('07/14/2025'),
                    new Date('07/15/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('17º Rodada', [
                    new Date('07/17/2025'),
                    new Date('07/18/2025'),
                    new Date('07/19/2025'),
                    new Date('07/20/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('18º Rodada', [
                    new Date('07/22/2025'),
                    new Date('07/23/2025'),
                    new Date('07/24/2025'),
                    new Date('07/25/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('19º Rodada', [
                    new Date('07/26/2025'),
                    new Date('07/27/2025'),
                    new Date('07/28/2025'),
                    new Date('07/29/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('20º Rodada', [
                    new Date('07/31/2025'),
                    new Date('08/01/2025'),
                    new Date('08/02/2025'),
                    new Date('08/03/2025'),
                    new Date('08/04/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('21º Rodada', [
                    new Date('08/09/2025'),
                    new Date('08/10/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('22º Rodada', [
                    new Date('08/16/2025'),
                    new Date('08/17/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('23º Rodada', [
                    new Date('08/23/2025'),
                    new Date('08/24/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('24º Rodada', [
                    new Date('08/30/2025'),
                    new Date('08/31/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('25º Rodada', [
                    new Date('09/13/2025'),
                    new Date('09/14/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('26º Rodada', [
                    new Date('09/20/2025'),
                    new Date('09/21/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('27º Rodada', [
                    new Date('09/23/2025'),
                    new Date('09/24/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('28º Rodada', [
                    new Date('09/27/2025'),
                    new Date('09/28/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('29º Rodada', [
                    new Date('10/04/2025'),
                    new Date('10/05/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('30º Rodada', [
                    new Date('10/07/2025'),
                    new Date('10/08/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('31º Rodada', [
                    new Date('10/11/2025'),
                    new Date('10/12/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('32º Rodada', [
                    new Date('10/18/2025'),
                    new Date('10/19/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('33º Rodada', [
                    new Date('10/25/2025'),
                    new Date('10/26/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('34º Rodada', [
                    new Date('11/01/2025'),
                    new Date('11/02/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('35º Rodada', [
                    new Date('11/04/2025'),
                    new Date('11/05/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('36º Rodada', [
                    new Date('11/08/2025'),
                    new Date('11/09/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('37º Rodada', [
                    new Date('11/15/2025'),
                    new Date('11/16/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('38º Rodada', [
                    new Date('11/22/2025'),
                    new Date('11/23/2025'),
                    ],
                    'yellow'
                ),
            ]),
            new Campeonato('Campeonato Brasileiro C', 'Nacional', 'yellow', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('04/12/2025'),
                    new Date('04/13/2025'),
                    new Date('04/14/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('04/19/2025'),
                    new Date('04/20/2025'),
                    new Date('04/21/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('04/26/2025'),
                    new Date('04/27/2025'),
                    new Date('04/28/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('05/03/2025'),
                    new Date('05/04/2025'),
                    new Date('05/05/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('05/10/2025'),
                    new Date('05/11/2025'),
                    new Date('05/12/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('05/17/2025'),
                    new Date('05/18/2025'),
                    new Date('05/19/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('05/24/2025'),
                    new Date('05/25/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('05/31/2025'),
                    new Date('06/01/2025'),
                    new Date('06/02/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('06/14/2025'),
                    new Date('06/15/2025'),
                    new Date('06/16/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('10º Rodada', [
                    new Date('06/28/2025'),
                    new Date('06/29/2025'),
                    new Date('06/30/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('11º Rodada', [
                    new Date('07/05/2025'),
                    new Date('07/06/2025'),
                    new Date('07/07/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('12º Rodada', [
                    new Date('07/12/2025'),
                    new Date('07/13/2025'),
                    new Date('07/14/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('13º Rodada', [
                    new Date('07/19/2025'),
                    new Date('07/20/2025'),
                    new Date('07/21/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('14º Rodada', [
                    new Date('07/26/2025'),
                    new Date('07/27/2025'),
                    new Date('07/28/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('15º Rodada', [
                    new Date('08/02/2025'),
                    new Date('08/03/2025'),
                    new Date('08/04/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('16º Rodada', [
                    new Date('08/09/2025'),
                    new Date('08/10/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('17º Rodada', [
                    new Date('08/16/2025'),
                    new Date('08/17/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('18º Rodada', [
                    new Date('08/23/2025'),
                    new Date('08/24/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('19º Rodada', [
                    new Date('08/30/2025'),
                    new Date('08/31/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('2º Fase - 1º Rodada', [
                    new Date('09/20/2025'),
                    new Date('09/21/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('2º Fase - 2º Rodada', [
                    new Date('09/23/2025'),
                    new Date('09/24/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('2º Fase - 3º Rodada', [
                    new Date('09/27/2025'),
                    new Date('09/28/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('2º Fase - 4º Rodada', [
                    new Date('10/04/2025'),
                    new Date('10/05/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('2º Fase - 5º Rodada', [
                    new Date('10/07/2025'),
                    new Date('10/08/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('2º Fase - 6º Rodada', [
                    new Date('10/11/2025'),
                    new Date('10/12/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('Final', [
                    new Date('10/18/2025'),
                    new Date('10/26/2025'),
                    ],
                    'yellow'
                ),
            ]),
            new Campeonato('Campeonato Brasileiro D', 'Nacional', 'yellow', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('04/19/2025'),
                    new Date('04/20/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('04/26/2025'),
                    new Date('04/27/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('05/03/2025'),
                    new Date('05/04/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('05/09/2025'),
                    new Date('05/10/2025'),
                    new Date('05/11/2025'),
                    new Date('05/14/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('05/17/2025'),
                    new Date('05/18/2025'),
                    new Date('05/21/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('05/24/2025'),
                    new Date('05/25/2025'),
                    new Date('05/26/2025'),
                    new Date('05/27/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('05/30/2025'),
                    new Date('05/31/2025'),
                    new Date('06/01/2025'),
                    new Date('06/02/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('06/06/2025'),
                    new Date('06/07/2025'),
                    new Date('06/08/2025'),
                    new Date('06/11/2025'),
                    new Date('06/21/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('06/13/2025'),
                    new Date('06/14/2025'),
                    new Date('06/15/2025'),
                    new Date('06/16/2025'),
                    new Date('06/19/2025'),
                    new Date('06/21/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('10º Rodada', [
                    new Date('06/27/2025'),
                    new Date('06/28/2025'),
                    new Date('06/29/2025'),
                    new Date('06/30/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('11º Rodada', [
                    new Date('07/05/2025'),
                    new Date('07/06/2025'),
                    new Date('07/07/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('12º Rodada', [
                    new Date('07/12/2025'),
                    new Date('07/13/2025'),
                    new Date('07/14/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('13º Rodada', [
                    new Date('07/19/2025'),
                    new Date('07/20/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('14º Rodada', [
                    new Date('07/26/2025'),
                    new Date('07/27/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('Segunda fase', [
                    new Date('08/03/2025'),
                    new Date('08/04/2025'),
                    new Date('08/09/2025'),
                    new Date('08/10/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('Oitavas de final', [
                    new Date('08/10/2025'),
                    new Date('08/11/2025'),
                    new Date('08/17/2025'),
                    new Date('08/18/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('08/23/2025'),
                    new Date('08/24/2025'),
                    new Date('09/01/2025'),
                    new Date('09/02/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('09/07/2025'),
                    new Date('09/15/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('Final', [
                    new Date('09/22/2025'),
                    new Date('09/29/2025'),
                    ],
                    'yellow'
                ),
            ]),
            new Campeonato('Nordeste', 'Regional', 'orange', [
                new DatasCampeonatos('Primeira fase', [
                    new Date('01/04/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Segunda fase', [
                    new Date('01/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/21/2025'),
                    new Date('01/22/2025'),
                    new Date('01/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('02/04/2025'),
                    new Date('02/05/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('02/11/2025'),
                    new Date('02/12/2025'),
                    new Date('02/13/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('02/18/2025'),
                    new Date('02/19/2025'),
                    new Date('02/26/2025'),
                    new Date('03/26/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('03/03/2025'),
                    new Date('03/04/2025'),
                    new Date('03/05/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('03/18/2025'),
                    new Date('03/19/2025'),
                    new Date('03/20/2025'),
                    new Date('03/21/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('07/08/2025'),
                    new Date('07/09/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('08/13/2025'),
                    new Date('08/20/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('09/03/2025'),
                    new Date('09/07/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Copa Verde ( Centro Oeste e Norte )', 'Regional', 'orange', [
                new DatasCampeonatos('Primeira fase', [
                    new Date('01/22/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Oitavas de final', [
                    new Date('02/04/2025'),
                    new Date('02/05/2025'),
                    new Date('02/06/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('02/12/2025'),
                    new Date('02/13/2025'),
                    new Date('02/19/2025'),
                    new Date('02/26/2025'),
                    new Date('02/27/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('03/12/2025'),
                    new Date('03/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('04/09/2025'),
                    new Date('04/23/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Acreano', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/25/2025'),
                    new Date('01/27/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('02/01/2025'),
                    new Date('02/02/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('02/08/2025'),
                    new Date('02/09/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('02/15/2025'),
                    new Date('02/16/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('02/22/2025'),
                    new Date('02/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('03/08/2025'),
                    new Date('03/09/2025'),
                    new Date('03/11/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('03/15/2025'),
                    new Date('03/16/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('03/22/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('03/29/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Alagoano', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/11/2025'),
                    new Date('01/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/15/2025'),
                    new Date('01/16/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/18/2025'),
                    new Date('01/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('01/25/2025'),
                    new Date('01/26/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('01/29/2025'),
                    new Date('01/30/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('02/01/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('02/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('02/15/2025'),
                    new Date('02/16/2025'),
                    new Date('02/22/2025'),
                    new Date('02/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('03/08/2025'),
                    new Date('03/15/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Amapaense', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('03/08/2025'),
                    new Date('03/09/2025'),
                    new Date('03/11/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('03/13/2025'),
                    new Date('03/14/2025'),
                    new Date('03/15/2025'),
                    new Date('03/17/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('03/19/2025'),
                    new Date('03/21/2025'),
                    new Date('03/22/2025'),
                    new Date('03/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('03/25/2025'),
                    new Date('03/27/2025'),
                    new Date('03/29/2025'),
                    new Date('03/31/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('04/01/2025'),
                    new Date('04/03/2025'),
                    new Date('04/05/2025'),
                    new Date('04/06/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('04/08/2025'),
                    new Date('04/10/2025'),
                    new Date('04/12/2025'),
                    new Date('04/14/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('04/16/2025'),
                    new Date('04/17/2025'),
                    new Date('04/19/2025'),
                    new Date('04/21/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('04/23/2025'),
                    new Date('04/26/2025'),
                    new Date('04/30/2025'),
                    new Date('05/03/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('05/10/2025'),
                    new Date('05/17/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Amazonense', 'Estadual', 'purple', [
                new DatasCampeonatos('Primeiro Turno - 1º Rodada', [
                    new Date('01/25/2025'),
                    new Date('01/26/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Primeiro Turno - 2º Rodada', [
                    new Date('01/29/2025'),
                    new Date('01/30/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Primeiro Turno - 3º Rodada', [
                    new Date('02/01/2025'),
                    new Date('02/02/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Primeiro Turno - 4º Rodada', [
                    new Date('02/08/2025'),
                    new Date('02/09/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Playoffs (Primeiro turno)', [
                    new Date('02/15/2025'),
                    new Date('02/16/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final (Primeiro turno)', [
                    new Date('02/23/2025'),
                    new Date('02/24/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final (Primeiro turno)', [
                    new Date('03/09/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Segundo Turno - 1º Rodada', [
                    new Date('03/11/2025'),
                    new Date('03/13/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Segundo Turno - 2º Rodada', [
                    new Date('03/16/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Segundo Turno - 3º Rodada', [
                    new Date('03/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Playoffs (Segundo turno)', [
                    new Date('03/22/2025'),
                    new Date('03/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final (Segundo turno)', [
                    new Date('03/25/2025'),
                    new Date('03/26/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final (Segundo turno)', [
                    new Date('03/29/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('04/01/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Baiano', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/11/2025'),
                    new Date('01/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/14/2025'),
                    new Date('01/15/2025'),
                    new Date('01/16/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/18/2025'),
                    new Date('01/19/2025'),
                    new Date('01/21/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('01/22/2025'),
                    new Date('01/25/2025'),
                    new Date('01/26/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('01/28/2025'),
                    new Date('01/29/2025'),
                    new Date('01/30/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('02/01/2025'),
                    new Date('02/02/2025'),
                    new Date('02/04/2025'),
                    new Date('02/05/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('02/08/2025'),
                    new Date('02/09/2025'),
                    new Date('02/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('02/15/2025'),
                    new Date('02/16/2025'),
                    new Date('02/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('02/22/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('03/01/2025'),
                    new Date('03/08/2025'),
                    new Date('03/09/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('03/16/2025'),
                    new Date('03/23/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Brasiliense', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/18/2025'),
                    new Date('01/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/25/2025'),
                    new Date('01/26/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/29/2025'),
                    new Date('01/30/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('02/01/2025'),
                    new Date('02/02/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('02/08/2025'),
                    new Date('02/09/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('02/12/2025'),
                    new Date('02/13/2025'),
                    new Date('02/27/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('02/15/2025'),
                    new Date('02/16/2025'),
                    new Date('02/17/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('02/22/2025'),
                    new Date('02/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('03/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('03/15/2025'),
                    new Date('03/16/2025'),
                    new Date('03/22/2025'),
                    new Date('03/26/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('03/29/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Capixaba', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/18/2025'),
                    new Date('01/19/2025'),
                    new Date('01/20/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/24/2025'),
                    new Date('01/25/2025'),
                    new Date('01/26/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/28/2025'),
                    new Date('01/29/2025'),
                    new Date('01/30/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('01/31/2025'),
                    new Date('02/01/2025'),
                    new Date('02/02/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('02/04/2025'),
                    new Date('02/05/2025'),
                    new Date('02/06/2025'),
                    new Date('02/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('02/08/2025'),
                    new Date('02/09/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('02/11/2025'),
                    new Date('02/12/2025'),
                    new Date('02/13/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('02/15/2025'),
                    new Date('02/16/2025'),
                    new Date('02/17/2025'),
                    new Date('02/18/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('02/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('03/05/2025'),
                    new Date('03/06/2025'),
                    new Date('03/07/2025'),
                    new Date('03/08/2025'),
                    new Date('03/09/2025'),
                    new Date('03/10/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('03/15/2025'),
                    new Date('03/17/2025'),
                    new Date('03/22/2025'),
                    new Date('03/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('04/01/2025'),
                    new Date('04/05/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Carioca', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/11/2025'),
                    new Date('01/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/14/2025'),
                    new Date('01/15/2025'),
                    new Date('01/16/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/18/2025'),
                    new Date('01/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('01/22/2025'),
                    new Date('01/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('01/25/2025'),
                    new Date('01/26/2025'),
                    new Date('01/27/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('01/29/2025'),
                    new Date('01/30/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('02/01/2025'),
                    new Date('02/02/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('02/05/2025'),
                    new Date('02/06/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('02/08/2025'),
                    new Date('02/09/2025'),
                    new Date('02/10/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('10º Rodada', [
                    new Date('02/15/2025'),
                    new Date('02/16/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('11º Rodada', [
                    new Date('02/22/2025'),
                    new Date('02/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Taça Rio (Semifinal)', [
                    new Date('03/01/2025'),
                    new Date('03/06/2025'),
                    new Date('03/08/2025'),
                    new Date('03/09/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Taça Rio (Final)', [
                    new Date('03/12/2025'),
                    new Date('03/15/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('03/01/2025'),
                    new Date('03/02/2025'),
                    new Date('03/08/2025'),
                    new Date('03/09/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('03/12/2025'),
                    new Date('03/16/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Catarinense', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/11/2025'),
                    new Date('01/15/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/18/2025'),
                    new Date('01/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/22/2025'),
                    new Date('01/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('01/25/2025'),
                    new Date('01/26/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('01/29/2025'),
                    new Date('01/30/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('02/01/2025'),
                    new Date('02/02/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('02/05/2025'),
                    new Date('02/06/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('02/08/2025'),
                    new Date('02/09/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('02/12/2025'),
                    new Date('02/13/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('10º Rodada', [
                    new Date('02/15/2025'),
                    new Date('02/16/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('11º Rodada', [
                    new Date('02/22/2025'),
                    new Date('02/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('03/01/2025'),
                    new Date('03/02/2025'),
                    new Date('03/04/2025'),
                    new Date('03/05/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('03/08/2025'),
                    new Date('03/09/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('03/15/2025'),
                    new Date('03/22/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Cearense', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/18/2025'),
                    new Date('01/19/2025'),
                    new Date('01/27/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/23/2025'),
                    new Date('01/25/2025'),
                    new Date('01/26/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/28/2025'),
                    new Date('01/29/2025'),
                    new Date('01/30/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('02/01/2025'),
                    new Date('02/02/2025'),
                    new Date('02/03/2025'),
                    new Date('02/04/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('02/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quadrangular do rebaixamento - 1º Rodada', [
                    new Date('02/15/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quadrangular do rebaixamento - 2º Rodada', [
                    new Date('02/21/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quadrangular do rebaixamento - 3º Rodada', [
                    new Date('02/27/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('02/15/2025'),
                    new Date('02/16/2025'),
                    new Date('02/22/2025'),
                    new Date('02/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('03/01/2025'),
                    new Date('03/02/2025'),
                    new Date('03/08/2025'),
                    new Date('03/09/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Disputa do 3º lugar', [
                    new Date('03/15/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('03/15/2025'),
                    new Date('03/22/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Gaúcho', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/22/2025'),
                    new Date('01/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/25/2025'),
                    new Date('01/26/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/28/2025'),
                    new Date('01/29/2025'),
                    new Date('01/30/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('02/01/2025'),
                    new Date('02/02/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('02/05/2025'),
                    new Date('02/06/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('02/08/2025'),
                    new Date('02/09/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('02/11/2025'),
                    new Date('02/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('02/15/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quadrangular do rebaixamento - 1º Rodada', [
                    new Date('02/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quadrangular do rebaixamento - 2º Rodada', [
                    new Date('02/22/2025'),
                    new Date('02/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quadrangular do rebaixamento - 3º Rodada', [
                    new Date('03/02/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quadrangular do rebaixamento - 4º Rodada', [
                    new Date('03/05/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quadrangular do rebaixamento - 5º Rodada', [
                    new Date('03/08/2025'),
                    new Date('03/09/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quadrangular do rebaixamento - 6º Rodada', [
                    new Date('03/14/2025'),
                    new Date('03/15/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Troféu Farroupilha (Semi final)', [
                    new Date('02/20/2025'),
                    new Date('02/23/2025'),
                    new Date('02/24/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Troféu Farroupilha (Final)', [
                    new Date('03/01/2025'),
                    new Date('03/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('02/22/2025'),
                    new Date('03/03/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('03/08/2025'),
                    new Date('03/16/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Goiano', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/14/2025'),
                    new Date('01/15/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/18/2025'),
                    new Date('01/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/22/2025'),
                    new Date('01/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('01/25/2025'),
                    new Date('01/26/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('01/28/2025'),
                    new Date('01/29/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('02/01/2025'),
                    new Date('02/02/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('02/04/2025'),
                    new Date('02/05/2025'),
                    new Date('02/20/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('02/08/2025'),
                    new Date('02/09/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('02/11/2025'),
                    new Date('02/12/2025'),
                    new Date('02/13/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('10º Rodada', [
                    new Date('02/15/2025'),
                    new Date('02/16/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('11º Rodada', [
                    new Date('02/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('03/01/2025'),
                    new Date('03/02/2025'),
                    new Date('03/03/2025'),
                    new Date('03/04/2025'),
                    new Date('03/05/2025'),
                    new Date('03/06/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('03/08/2025'),
                    new Date('03/09/2025'),
                    new Date('03/15/2025'),
                    new Date('03/16/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('03/23/2025'),
                    new Date('03/30/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Maranhense', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/11/2025'),
                    new Date('01/12/2025'),
                    new Date('01/18/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/15/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/18/2025'),
                    new Date('01/19/2025'),
                    new Date('01/21/2025'),
                    new Date('01/25/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('01/25/2025'),
                    new Date('01/26/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('01/29/2025'),
                    new Date('01/30/2025'),
                    new Date('02/01/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('02/01/2025'),
                    new Date('02/02/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('02/08/2025'),
                    new Date('02/09/2025'),
                    new Date('02/15/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('02/26/2025'),
                    new Date('03/09/2025'),
                    new Date('03/18/2025'),
                    new Date('03/29/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('02/22/2025'),
                    new Date('03/03/2025'),
                    new Date('04/02/2025'),
                    new Date('04/04/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('10º Rodada', [
                    new Date('03/06/2025'),
                    new Date('03/23/2025'),
                    new Date('04/02/2025'),
                    new Date('04/09/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('11º Rodada', [
                    new Date('02/19/2025'),
                    new Date('03/16/2025'),
                    new Date('03/22/2025'),
                    new Date('04/15/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('12º Rodada', [
                    new Date('03/30/2025'),
                    new Date('04/02/2025'),
                    new Date('04/12/2025'),
                    new Date('04/13/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('13º Rodada', [
                    new Date('04/05/2025'),
                    new Date('04/06/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('14º Rodada', [
                    new Date('04/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('04/30/2025'),
                    new Date('05/07/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('05/14/2025'),
                    new Date('05/17/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Mato-Grossense', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/11/2025'),
                    new Date('01/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/15/2025'),
                    new Date('01/16/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/18/2025'),
                    new Date('01/19/2025'),
                    new Date('01/20/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('01/25/2025'),
                    new Date('01/26/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('01/29/2025'),
                    new Date('01/30/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('02/01/2025'),
                    new Date('02/02/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('02/08/2025'),
                    new Date('02/09/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('02/15/2025'),
                    new Date('02/16/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('02/22/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('03/01/2025'),
                    new Date('03/02/2025'),
                    new Date('03/05/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('03/08/2025'),
                    new Date('03/10/2025'),
                    new Date('03/15/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Disputa do 3º lugar', [
                    new Date('03/22/2025'),
                    new Date('03/29/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('03/22/2025'),
                    new Date('03/29/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Mineiro', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/18/2025'),
                    new Date('01/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/22/2025'),
                    new Date('01/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/25/2025'),
                    new Date('01/26/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('01/29/2025'),
                    new Date('01/30/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('02/01/2025'),
                    new Date('02/02/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('02/04/2025'),
                    new Date('02/05/2025'),
                    new Date('02/06/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('02/08/2025'),
                    new Date('02/09/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('02/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Troféu Inconfidência (Semi final)', [
                    new Date('02/16/2025'),
                    new Date('02/21/2025'),
                    new Date('02/22/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Troféu Inconfidência (Final)', [
                    new Date('03/08/2025'),
                    new Date('03/15/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('02/15/2025'),
                    new Date('03/16/2025'),
                    new Date('03/22/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('03/08/2025'),
                    new Date('03/15/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Paraense', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/18/2025'),
                    new Date('01/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/25/2025'),
                    new Date('01/26/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/28/2025'),
                    new Date('01/29/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('02/01/2025'),
                    new Date('02/02/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('02/08/2025'),
                    new Date('02/09/2025'),
                    new Date('02/10/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('02/15/2025'),
                    new Date('02/16/2025'),
                    new Date('02/17/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('02/22/2025'),
                    new Date('02/23/2025'),
                    new Date('02/24/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('02/03/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('03/28/2025'),
                    new Date('03/29/2025'),
                    new Date('03/30/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('04/01/2025'),
                    new Date('04/02/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('05/07/2025'),
                    new Date('05/11/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Paraibano', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/11/2025'),
                    new Date('01/12/2025'),
                    new Date('01/13/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/15/2025'),
                    new Date('01/16/2025'),
                    new Date('01/22/2025'),
                    new Date('02/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/18/2025'),
                    new Date('01/19/2025'),
                    new Date('01/20/2025'),
                    new Date('01/22/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('01/25/2025'),
                    new Date('01/26/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('01/29/2025'),
                    new Date('01/30/2025'),
                    new Date('02/16/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('02/01/2025'),
                    new Date('02/02/2025'),
                    new Date('02/03/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('02/08/2025'),
                    new Date('02/09/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('02/13/2025'),
                    new Date('02/15/2025'),
                    new Date('02/16/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('02/19/2025'),
                    new Date('02/22/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('03/08/2025'),
                    new Date('03/09/2025'),
                    new Date('03/15/2025'),
                    new Date('03/16/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('03/23/2025'),
                    new Date('03/30/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Paranaense', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/11/2025'),
                    new Date('01/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/14/2025'),
                    new Date('01/15/2025'),
                    new Date('01/16/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/18/2025'),
                    new Date('01/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('01/22/2025'),
                    new Date('01/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('01/25/2025'),
                    new Date('01/26/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('01/28/2025'),
                    new Date('01/29/2025'),
                    new Date('01/30/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('02/01/2025'),
                    new Date('02/02/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('02/04/2025'),
                    new Date('02/05/2025'),
                    new Date('02/06/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('02/08/2025'),
                    new Date('02/09/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('10º Rodada', [
                    new Date('02/11/2025'),
                    new Date('02/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('11º Rodada', [
                    new Date('02/15/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('02/21/2025'),
                    new Date('02/22/2025'),
                    new Date('02/23/2025'),
                    new Date('03/01/2025'),
                    new Date('03/08/2025'),
                    new Date('03/09/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('03/15/2025'),
                    new Date('03/16/2025'),
                    new Date('03/18/2025'),
                    new Date('03/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('03/22/2025'),
                    new Date('03/29/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Paulistão', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/15/2025'),
                    new Date('01/16/2025'),
                    new Date('02/10/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/18/2025'),
                    new Date('01/19/2025'),
                    new Date('01/20/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/21/2025'),
                    new Date('01/22/2025'),
                    new Date('01/23/2025'),
                    new Date('01/24/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('01/25/2025'),
                    new Date('01/26/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('01/28/2025'),
                    new Date('01/29/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('01/31/2025'),
                    new Date('02/01/2025'),
                    new Date('02/02/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('02/04/2025'),
                    new Date('02/05/2025'),
                    new Date('02/06/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('02/07/2025'),
                    new Date('02/08/2025'),
                    new Date('02/09/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('02/11/2025'),
                    new Date('02/12/2025'),
                    new Date('02/13/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('10º Rodada', [
                    new Date('02/15/2025'),
                    new Date('02/16/2025'),
                    new Date('02/17/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('11º Rodada', [
                    new Date('02/03/2025'),
                    new Date('02/19/2025'),
                    new Date('02/20/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('12º Rodada', [
                    new Date('02/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('03/01/2025'),
                    new Date('03/02/2025'),
                    new Date('03/03/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('03/09/2025'),
                    new Date('03/10/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('03/16/2025'),
                    new Date('03/27/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Pernambucano', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/11/2025'),
                    new Date('01/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/14/2025'),
                    new Date('01/15/2025'),
                    new Date('01/16/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/18/2025'),
                    new Date('01/19/2025'),
                    new Date('01/20/2025'),
                    new Date('01/22/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('01/25/2025'),
                    new Date('01/26/2025'),
                    new Date('02/02/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('01/28/2025'),
                    new Date('01/29/2025'),
                    new Date('01/30/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('02/01/2025'),
                    new Date('02/02/2025'),
                    new Date('02/05/2025'),
                    new Date('02/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('02/07/2025'),
                    new Date('02/08/2025'),
                    new Date('02/09/2025'),
                    new Date('02/10/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('02/15/2025'),
                    new Date('02/16/2025'),
                    new Date('02/17/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('02/22/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Segunda fase', [
                    new Date('03/02/2025'),
                    new Date('03/03/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('03/08/2025'),
                    new Date('03/09/2025'),
                    new Date('03/15/2025'),
                    new Date('03/16/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('03/22/2025'),
                    new Date('04/04/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Piauiense', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/11/2025'),
                    new Date('01/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/18/2025'),
                    new Date('01/19/2025'),
                    new Date('01/20/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/25/2025'),
                    new Date('01/26/2025'),
                    new Date('01/27/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('01/31/2025'),
                    new Date('02/01/2025'),
                    new Date('02/02/2025'),
                    new Date('02/03/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('02/08/2025'),
                    new Date('02/09/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('02/14/2025'),
                    new Date('02/15/2025'),
                    new Date('02/16/2025'),
                    new Date('02/17/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Segunda fase', [
                    new Date('02/22/2025'),
                    new Date('02/23/2025'),
                    new Date('02/28/2025'),
                    new Date('03/01/2025'),
                    new Date('03/02/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('03/09/2025'),
                    new Date('03/15/2025'),
                    new Date('03/16/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('03/22/2025'),
                    new Date('03/29/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Potiguar', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/11/2025'),
                    new Date('01/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/15/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/18/2025'),
                    new Date('01/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('01/25/2025'),
                    new Date('01/26/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('01/29/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('02/01/2025'),
                    new Date('02/02/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('02/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Segunda fase', [
                    new Date('02/15/2025'),
                    new Date('02/16/2025'),
                    new Date('02/22/2025'),
                    new Date('02/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('03/08/2025'),
                    new Date('03/09/2025'),
                    new Date('03/15/2025'),
                    new Date('03/16/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('03/22/2025'),
                    new Date('03/29/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Rondoniense', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('02/01/2025'),
                    new Date('02/02/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('02/08/2025'),
                    new Date('02/09/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('02/12/2025'),
                    new Date('03/05/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('02/15/2025'),
                    new Date('02/16/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('02/19/2025'),
                    new Date('03/06/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('02/22/2025'),
                    new Date('02/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('02/25/2025'),
                    new Date('02/26/2025'),
                    new Date('03/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('03/02/2025'),
                    new Date('03/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('03/08/2025'),
                    new Date('03/09/2025'),
                    new Date('03/26/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('10º Rodada', [
                    new Date('03/12/2025'),
                    new Date('03/26/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('11º Rodada', [
                    new Date('03/15/2025'),
                    new Date('03/16/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('12º Rodada', [
                    new Date('03/22/2025'),
                    new Date('03/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('13º Rodada', [
                    new Date('03/29/2025'),
                    new Date('03/30/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('14º Rodada', [
                    new Date('04/02/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('04/05/2025'),
                    new Date('04/06/2025'),
                    new Date('04/09/2025'),
                    new Date('04/10/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('04/13/2025'),
                    new Date('04/16/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Roraimense', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('02/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('02/11/2025'),
                    new Date('03/07/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('02/15/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('02/18/2025'),
                    new Date('03/24/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('02/22/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('02/25/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('03/01/2025'),
                    new Date('03/02/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('03/04/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('03/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('10º Rodada', [
                    new Date('03/10/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('11º Rodada', [
                    new Date('03/15/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('12º Rodada', [
                    new Date('03/18/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('13º Rodada', [
                    new Date('03/22/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('14º Rodada', [
                    new Date('03/26/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('03/29/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('04/05/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Sergipano', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/11/2025'),
                    new Date('01/13/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/14/2025'),
                    new Date('01/15/2025'),
                    new Date('01/16/2025'),
                    new Date('01/22/2025'),
                    new Date('01/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/18/2025'),
                    new Date('01/19/2025'),
                    new Date('01/20/2025'),
                    new Date('01/29/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('01/25/2025'),
                    new Date('01/26/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('02/01/2025'),
                    new Date('02/02/2025'),
                    new Date('02/03/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('02/08/2025'),
                    new Date('02/09/2025'),
                    new Date('02/10/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('02/15/2025'),
                    new Date('02/16/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('02/22/2025'),
                    new Date('02/23/2025'),
                    new Date('02/24/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('03/01/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Segunda fase', [
                    new Date('03/05/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('03/08/2025'),
                    new Date('03/09/2025'),
                    new Date('03/15/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('03/22/2025'),
                    new Date('03/29/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Sul-Mato-Grossense', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/18/2025'),
                    new Date('01/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/22/2025'),
                    new Date('01/23/2025'),
                    new Date('01/29/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/25/2025'),
                    new Date('01/26/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('02/01/2025'),
                    new Date('02/02/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('02/05/2025'),
                    new Date('02/06/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('02/08/2025'),
                    new Date('02/09/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('02/15/2025'),
                    new Date('02/16/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('02/22/2025'),
                    new Date('02/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('03/02/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('03/05/2025'),
                    new Date('03/09/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('03/16/2025'),
                    new Date('03/22/2025'),
                    new Date('03/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('03/29/2025'),
                    new Date('04/06/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Tocantinense', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('02/04/2025'),
                    new Date('02/05/2025'),
                    new Date('02/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('02/08/2025'),
                    new Date('02/09/2025'),
                    new Date('03/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('02/15/2025'),
                    new Date('02/16/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('02/22/2025'),
                    new Date('02/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('03/01/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('02/08/2025'),
                    new Date('02/09/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('02/15/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('03/05/2025'),
                    new Date('03/09/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('03/18/2025'),
                    new Date('03/22/2025'),
                    new Date('03/23/2025'),
                    new Date('03/26/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('03/29/2025'),
                    new Date('04/05/2025'),
                    ],
                    
                ),
            ])
            ]
    ),
    new Competicoes(
        2,
        'Calendário modificado',
        '<h1>Uma Proposta de Reforma: Estaduais nas Datas FIFA e um Novo Caminho para o Futebol Brasileiro</h1><p>O calendário do futebol brasileiro, historicamente congestionado, é alvo de críticas constantes de jogadores, técnicos e dirigentes. Com jogos excessivos, pouco tempo para recuperação e treinos, além da sobreposição de torneios, a necessidade de uma reorganização mais eficiente é evidente. Uma proposta viável e cada vez mais debatida é a <strong>realocação dos campeonatos estaduais para as datas FIFA</strong>, criando um sistema mais racional e produtivo.</p><h2>O Problema Atual</h2><p>Hoje, o ano do futebol no Brasil começa com os campeonatos estaduais entre janeiro e abril, seguido por um calendário apertado de competições nacionais e internacionais até dezembro. As datas FIFA – períodos reservados para jogos de seleções – normalmente interrompem o Campeonato Brasileiro, afetando a sequência da competição e desfalcando os clubes que cedem jogadores às seleções.</p><p>Ao mesmo tempo, os estaduais são tratados por muitos clubes como uma obrigação desgastante, que atrapalha a preparação para as competições mais relevantes do ano. Isso gera estádios vazios, jogos com equipes reservas e uma perda de prestígio das competições regionais.</p><h2>A Proposta: Estaduais nas Datas FIFA</h2> <p>Uma alternativa viável seria <strong>mover os campeonatos estaduais para os períodos de datas FIFA</strong>. Durante essas janelas, em que o Campeonato Brasileiro e torneios da Conmebol seriam paralisados, os estaduais poderiam ser disputados com:</p><ul><li><strong>Jogadores das categorias de base e elencos alternativos</strong> (sem depender de convocados para seleções);</li><li><strong>Foco no futebol regional</strong>, aproveitando a ausência dos jogos nacionais para atrair mais atenção da mídia e do público local;</li><li><strong>Fórmulas de disputa mais curtas</strong>, com mata-mata ou grupos enxutos, preservando a tradição, mas adaptando à realidade atual.</li></ul> <h2>Vantagens da Mudança</h2><ul><li><strong>Calendário mais equilibrado</strong>: O Brasileiro e as competições continentais não seriam interrompidas por datas FIFA.</li><li><strong>Valorização dos estaduais</strong>: Com menos jogos paralelos, os estaduais ganhariam espaço na mídia e na programação esportiva.</li><li><strong>Menor desgaste dos atletas</strong>: Reduz o número de jogos seguidos e melhora a preparação física e técnica das equipes.</li><li><strong>Aproveitamento da base</strong>: Clubes poderiam testar jovens talentos e valorizar atletas locais.</li><li><strong>Maior engajamento regional</strong>: Com a atenção voltada para os estaduais durante as datas FIFA, o público teria uma nova relação com os clássicos regionais.</li></ul><h2>Um Exemplo Prático</h2><p>Atualmente, o calendário FIFA prevê cerca de 6 a 8 janelas por ano, com duração de 10 a 12 dias cada. Utilizando essas datas para jogos de estaduais ao longo do ano, seria possível distribuir as fases de grupos, quartas, semifinais e finais de forma estratégica, sem sobrecarregar o calendário.</p> <h2>Considerações Finais</h2><p>A proposta de encaixar os campeonatos estaduais nas datas FIFA é apenas uma das várias soluções possíveis para reorganizar o calendário brasileiro. No entanto, ela parte de uma lógica simples: usar os momentos de pausa dos campeonatos nacionais como espaço para valorizar o futebol regional, sem comprometer o desempenho dos clubes nas principais competições.</p><p>O futebol brasileiro tem tradição, paixão e talento de sobra. Falta apenas encontrar um modelo de calendário que respeite a qualidade do jogo e a saúde dos protagonistas: os atletas. Com diálogo, planejamento e coragem para mudar, é possível transformar o nosso futebol em um exemplo de gestão esportiva no mundo.</p>',
        new Date('01/01/2025'),
        [
            new Campeonato('Data F.I.F.A.', 'Seleções', 'blue', [
                new DatasCampeonatos('Eliminatórias', [
                    new Date('03/17/2025'),
                    new Date('03/18/2025'),
                    new Date('03/19/2025'),
                    new Date('03/20/2025'),
                    new Date('03/21/2025'),
                    new Date('03/22/2025'),
                    new Date('03/23/2025'),
                    new Date('03/24/2025'),
                    new Date('03/25/2025')
                    ],
                    
                ),
                new DatasCampeonatos('Eliminatórias', [
                    new Date('06/02/2025'),
                    new Date('06/03/2025'),
                    new Date('06/04/2025'),
                    new Date('06/05/2025'),
                    new Date('06/06/2025'),
                    new Date('06/07/2025'),
                    new Date('06/08/2025'),
                    new Date('06/09/2025'),
                    new Date('06/10/2025')
                    ],
                    
                ),
                new DatasCampeonatos('Eliminatórias', [
                    new Date('09/01/2025'),
                    new Date('09/02/2025'),
                    new Date('09/03/2025'),
                    new Date('09/04/2025'),
                    new Date('09/05/2025'),
                    new Date('09/06/2025'),
                    new Date('09/07/2025'),
                    new Date('09/08/2025'),
                    new Date('09/09/2025')
                    ],
                    
                ),
                new DatasCampeonatos('Amistosos Internacionais', [
                    new Date('10/06/2025'),
                    new Date('10/07/2025'),
                    new Date('10/08/2025'),
                    new Date('10/09/2025'),
                    new Date('10/10/2025'),
                    new Date('10/11/2025'),
                    new Date('10/12/2025'),
                    new Date('10/13/2025'),
                    new Date('10/14/2025')
                    ],
                    
                ),
                new DatasCampeonatos('Amistosos Internacionais', [
                    new Date('11/10/2025'),
                    new Date('11/11/2025'),
                    new Date('11/12/2025'),
                    new Date('11/13/2025'),
                    new Date('11/14/2025'),
                    new Date('11/15/2025'),
                    new Date('11/16/2025'),
                    new Date('11/17/2025'),
                    new Date('11/18/2025')
                    ],
                    
                ),
            ]),
            new Campeonato('Copa do Mundo de Clubes', 'Internacional', 'green', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('06/14/2025'),
                    new Date('06/15/2025'),
                    new Date('06/16/2025'),
                    new Date('06/17/2025'),
                    new Date('06/18/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('06/19/2025'),
                    new Date('06/20/2025'),
                    new Date('06/21/2025'),
                    new Date('06/22/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('06/23/2025'),
                    new Date('06/24/2025'),
                    new Date('06/25/2025'),
                    new Date('06/26/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Oitavas de Final', [
                    new Date('06/28/2025'),
                    new Date('06/29/2025'),
                    new Date('06/30/2025'),
                    new Date('07/01/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('07/04/2025'),
                    new Date('07/05/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi Final', [
                    new Date('07/08/2025'),
                    new Date('07/09/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('07/13/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Interclubes', 'Internacional', 'green', [
                new DatasCampeonatos('Dérbi das Américas', [
                    new Date('12/10/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Copa Challenger', [
                    new Date('12/13/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final da Copa Intercontinental', [
                    new Date('12/17/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Libertadores da america', 'Continental', 'red', [
                new DatasCampeonatos('Primeira Etapa', [
                    new Date('02/04/2025'),
                    new Date('02/05/2025'),
                    new Date('02/06/2025'),
                    new Date('02/11/2025'),
                    new Date('02/12/2025'),
                    new Date('02/13/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Segunda Etapa', [
                    new Date('02/18/2025'),
                    new Date('02/19/2025'),
                    new Date('02/20/2025'),
                    new Date('02/25/2025'),
                    new Date('02/26/2025'),
                    new Date('02/27/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Terceira Etapa', [
                    new Date('03/04/2025'),
                    new Date('03/05/2025'),
                    new Date('03/06/2025'),
                    new Date('03/11/2025'),
                    new Date('03/12/2025'),
                    new Date('03/13/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('1º Rodada', [
                    new Date('04/01/2025'),
                    new Date('04/02/2025'),
                    new Date('04/03/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('04/08/2025'),
                    new Date('04/09/2025'),
                    new Date('04/10/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('04/22/2025'),
                    new Date('04/23/2025'),
                    new Date('04/24/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('05/06/2025'),
                    new Date('05/07/2025'),
                    new Date('05/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('05/13/2025'),
                    new Date('05/14/2025'),
                    new Date('05/15/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('05/27/2025'),
                    new Date('05/28/2025'),
                    new Date('05/29/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Oitavas de final', [
                    new Date('08/12/2025'),
                    new Date('08/13/2025'),
                    new Date('08/14/2025'),
                    new Date('08/19/2025'),
                    new Date('08/20/2025'),
                    new Date('08/21/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('09/16/2025'),
                    new Date('09/17/2025'),
                    new Date('09/18/2025'),
                    new Date('09/23/2025'),
                    new Date('09/24/2025'),
                    new Date('09/25/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('10/21/2025'),
                    new Date('10/22/2025'),
                    new Date('10/23/2025'),
                    new Date('10/28/2025'),
                    new Date('10/29/2025'),
                    new Date('10/30/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/29/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Copa Sul Americana', 'Continental', 'red', [
                new DatasCampeonatos('Primeira fase', [
                    new Date('03/04/2025'),
                    new Date('03/05/2025'),
                    new Date('03/06/2025'),
                    new Date('03/11/2025'),
                    new Date('03/12/2025'),
                    new Date('03/13/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('1º Rodada', [
                    new Date('04/01/2025'),
                    new Date('04/02/2025'),
                    new Date('04/03/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('04/08/2025'),
                    new Date('04/09/2025'),
                    new Date('04/10/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('04/22/2025'),
                    new Date('04/23/2025'),
                    new Date('04/24/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('05/06/2025'),
                    new Date('05/07/2025'),
                    new Date('05/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('05/13/2025'),
                    new Date('05/14/2025'),
                    new Date('05/15/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('05/27/2025'),
                    new Date('05/28/2025'),
                    new Date('05/29/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Playoffs de Oitavas de final', [
                    new Date('07/15/2025'),
                    new Date('07/16/2025'),
                    new Date('07/17/2025'),
                    new Date('07/22/2025'),
                    new Date('07/23/2025'),
                    new Date('07/24/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Oitavas de final', [
                    new Date('08/12/2025'),
                    new Date('08/13/2025'),
                    new Date('08/14/2025'),
                    new Date('08/19/2025'),
                    new Date('08/20/2025'),
                    new Date('08/21/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('09/16/2025'),
                    new Date('09/17/2025'),
                    new Date('09/18/2025'),
                    new Date('09/23/2025'),
                    new Date('09/24/2025'),
                    new Date('09/25/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('10/21/2025'),
                    new Date('10/22/2025'),
                    new Date('10/23/2025'),
                    new Date('10/28/2025'),
                    new Date('10/29/2025'),
                    new Date('10/30/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/22/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Recopa Sul Americana', 'Continental', 'red', [
                new DatasCampeonatos('Final', [
                    new Date('02/20/2025'),
                    new Date('02/27/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Copa do Brasil', 'Nacional', 'yellow', [
                new DatasCampeonatos('Primeira fase', [
                    new Date('02/18/2025'),
                    new Date('02/19/2025'),
                    new Date('02/20/2025'),
                    new Date('02/25/2025'),
                    new Date('02/26/2025'),
                    new Date('02/27/2025'),  
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('Segunda fase', [
                    new Date('03/04/2025'),
                    new Date('03/05/2025'),
                    new Date('03/06/2025'),
                    new Date('03/11/2025'),
                    new Date('03/12/2025'),
                    new Date('03/13/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('Terceira fase', [
                    new Date('04/15/2025'),
                    new Date('04/16/2025'),
                    new Date('04/17/2025'),
                    new Date('04/29/2025'),
                    new Date('04/30/2025'),
                    new Date('05/01/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('Oitavas de final', [
                    new Date('07/29/2025'),
                    new Date('07/30/2025'),
                    new Date('07/31/2025'),
                    new Date('08/05/2025'),
                    new Date('08/06/2025'),
                    new Date('08/07/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('08/26/2025'),
                    new Date('08/27/2025'),
                    new Date('08/28/2025'),
                    new Date('09/20/2025'),
                    new Date('09/21/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('09/30/2025'),
                    new Date('10/01/2025'),
                    new Date('10/18/2025'),
                    new Date('10/19/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/02/2025'),
                    new Date('11/05/2025'),
                    ],
                    'yellow'
                ),
            ]),
            new Campeonato('Supercopa do Brasil', 'Nacional', 'yellow', [
                new DatasCampeonatos('Final', [
                    new Date('02/02/2025'),
                    ],
                    'yellow'
                ),
            ]),
            new Campeonato('Campeonato Brasileiro A', 'Nacional', 'yellow', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('02/05/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('02/09/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('02/12/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('02/16/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('02/23/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('03/02/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('03/09/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('03/16/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('03/26/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('10º Rodada', [
                    new Date('03/30/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('11º Rodada', [
                    new Date('04/06/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('12º Rodada', [
                    new Date('04/13/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('13º Rodada', [
                    new Date('04/20/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('14º Rodada', [
                    new Date('04/27/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('15º Rodada', [
                    new Date('05/04/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('16º Rodada', [
                    new Date('05/11/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('17º Rodada', [
                    new Date('05/18/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('18º Rodada', [
                    new Date('05/21/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('19º Rodada', [
                    new Date('05/25/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('20º Rodada', [
                    new Date('06/01/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('21º Rodada', [
                    new Date('06/11/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('22º Rodada', [
                    new Date('07/20/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('23º Rodada', [
                    new Date('07/27/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('24º Rodada', [
                    new Date('08/03/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('25º Rodada', [
                    new Date('08/10/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('26º Rodada', [
                    new Date('08/17/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('27º Rodada', [
                    new Date('08/24/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('28º Rodada', [
                    new Date('08/31/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('29º Rodada', [
                    new Date('09/10/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('30º Rodada', [
                    new Date('09/14/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('31º Rodada', [
                    new Date('09/28/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('32º Rodada', [
                    new Date('10/05/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('33º Rodada', [
                    new Date('10/15/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('34º Rodada', [
                    new Date('10/26/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('35º Rodada', [
                    new Date('11/09/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('36º Rodada', [
                    new Date('11/26/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('37º Rodada', [
                    new Date('12/03/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('38º Rodada', [
                    new Date('12/07/2025'),
                    ],
                    'yellow'
                ),
            ]),
            new Campeonato('Campeonato Brasileiro B', 'Nacional', 'yellow', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('02/02/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('02/05/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('02/09/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('02/12/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('02/16/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('02/23/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('03/02/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('03/09/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('03/16/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('10º Rodada', [
                    new Date('03/26/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('11º Rodada', [
                    new Date('03/30/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('12º Rodada', [
                    new Date('04/06/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('13º Rodada', [
                    new Date('04/13/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('14º Rodada', [
                    new Date('04/20/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('15º Rodada', [
                    new Date('04/27/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('16º Rodada', [
                    new Date('05/04/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('17º Rodada', [
                    new Date('05/11/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('18º Rodada', [
                    new Date('05/18/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('19º Rodada', [
                    new Date('05/21/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('20º Rodada', [
                    new Date('05/25/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('21º Rodada', [
                    new Date('06/01/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('22º Rodada', [
                    new Date('06/11/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('23º Rodada', [
                    new Date('07/20/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('24º Rodada', [
                    new Date('07/27/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('25º Rodada', [
                    new Date('08/03/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('26º Rodada', [
                    new Date('08/10/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('27º Rodada', [
                    new Date('08/17/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('28º Rodada', [
                    new Date('08/24/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('29º Rodada', [
                    new Date('08/31/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('30º Rodada', [
                    new Date('09/10/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('31º Rodada', [
                    new Date('09/14/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('32º Rodada', [
                    new Date('09/28/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('33º Rodada', [
                    new Date('10/05/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('34º Rodada', [
                    new Date('10/15/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('35º Rodada', [
                    new Date('10/26/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('36º Rodada', [
                    new Date('11/09/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('37º Rodada', [
                    new Date('11/26/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('38º Rodada', [
                    new Date('11/30/2025'),
                    ],
                    'yellow'
                ),
            ]),
            new Campeonato('Campeonato Brasileiro C', 'Nacional', 'yellow', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('02/02/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('02/05/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('02/09/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('02/12/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('02/16/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('02/23/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('03/02/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('03/09/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('03/16/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('10º Rodada', [
                    new Date('03/26/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('11º Rodada', [
                    new Date('03/30/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('12º Rodada', [
                    new Date('04/06/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('13º Rodada', [
                    new Date('04/13/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('14º Rodada', [
                    new Date('04/20/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('15º Rodada', [
                    new Date('04/27/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('16º Rodada', [
                    new Date('05/04/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('17º Rodada', [
                    new Date('05/11/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('18º Rodada', [
                    new Date('05/18/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('19º Rodada', [
                    new Date('05/21/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('2º Fase - 1º Rodada', [
                    new Date('08/31/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('2º Fase - 2º Rodada', [
                    new Date('09/14/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('2º Fase - 3º Rodada', [
                    new Date('09/21/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('2º Fase - 4º Rodada', [
                    new Date('09/28/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('2º Fase - 5º Rodada', [
                    new Date('10/19/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('2º Fase - 6º Rodada', [
                    new Date('10/26/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/02/2025'),
                    new Date('11/23/2025'),
                    ],
                    'yellow'
                ),
            ]),
            new Campeonato('Campeonato Brasileiro D', 'Nacional', 'yellow', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('02/02/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('02/05/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('02/09/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('02/12/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('02/16/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('02/23/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('03/02/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('03/09/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('03/30/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('10º Rodada', [
                    new Date('04/06/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('11º Rodada', [
                    new Date('04/13/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('12º Rodada', [
                    new Date('04/20/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('13º Rodada', [
                    new Date('04/27/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('14º Rodada', [
                    new Date('05/04/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('Segunda fase', [
                    new Date('08/10/2025'),
                    new Date('08/17/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('Oitavas de final', [
                    new Date('08/24/2025'),
                    new Date('08/31/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('09/14/2025'),
                    new Date('09/21/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('09/28/2025'),
                    new Date('10/19/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('Final', [
                    new Date('10/26/2025'),
                    new Date('11/02/2025'),
                    ],
                    'yellow'
                ),
            ]),
            new Campeonato('Nordeste', 'Regional', 'orange', [
                new DatasCampeonatos('Primeira fase', [
                    new Date('04/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Segunda fase', [
                    new Date('05/07/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('1º Rodada', [
                    new Date('05/14/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('05/28/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('07/16/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('07/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('08/13/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('08/20/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('09/17/2025'),
                    new Date('09/24/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('10/22/2025'),
                    new Date('10/29/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/22/2025'),
                    new Date('11/29/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Copa Verde ( Centro Oeste e Norte )', 'Regional', 'orange', [
                new DatasCampeonatos('Primeira fase', [
                    new Date('04/23/2025'),
                    new Date('05/07/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Oitavas de final', [
                    new Date('05/14/2025'),
                    new Date('05/28/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('07/16/2025'),
                    new Date('07/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('08/13/2025'),
                    new Date('08/20/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('09/17/2025'),
                    new Date('09/24/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Acreano', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('06/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('09/03/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('09/07/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('10/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('10/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('11/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('11/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('11/16/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/19/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Alagoano', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/29/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('03/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('03/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('06/04/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('06/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('09/03/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('09/07/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('10/12/2025'),
                    new Date('11/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/16/2025'),
                    new Date('11/19/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Amapaense', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/29/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('03/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('03/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('06/04/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('09/03/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('09/07/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    
                    new Date('10/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('10/12/2025'),
                    new Date('11/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/16/2025'),
                    new Date('11/19/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Amazonense', 'Estadual', 'purple', [
                new DatasCampeonatos('Primeiro Turno - 1º Rodada', [
                    new Date('01/22/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Primeiro Turno - 2º Rodada', [
                    new Date('01/26/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Primeiro Turno - 3º Rodada', [
                    new Date('01/29/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Primeiro Turno - 4º Rodada', [
                    new Date('03/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Playoffs (Primeiro turno)', [
                    new Date('03/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final (Primeiro turno)', [
                    new Date('06/04/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final (Primeiro turno)', [
                    new Date('06/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Segundo Turno - 1º Rodada', [
                    new Date('09/03/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Segundo Turno - 2º Rodada', [
                    new Date('09/07/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Segundo Turno - 3º Rodada', [
                    new Date('10/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Playoffs (Segundo turno)', [
                    new Date('10/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final (Segundo turno)', [
                    new Date('11/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final (Segundo turno)', [
                    new Date('11/16/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/19/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Baiano', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/29/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('03/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('03/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('06/04/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('06/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('09/03/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('09/07/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('10/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('10/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('11/12/2025'),
                    new Date('11/16/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/19/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Brasiliense', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/29/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('03/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('03/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('06/04/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('06/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('09/03/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('09/07/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('10/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('10/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('11/12/2025'),
                    new Date('11/16/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/19/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Capixaba', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/22/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/26/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('01/29/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('03/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('03/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('06/04/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('06/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('09/03/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('09/07/2025'),
                    new Date('10/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('10/12/2025'),
                    new Date('11/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/16/2025'),
                    new Date('11/19/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Carioca', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/22/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/26/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('01/29/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('03/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('03/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('06/04/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('06/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('09/03/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('10º Rodada', [
                    new Date('09/07/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('11º Rodada', [
                    new Date('10/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Taça Rio (Semifinal)', [
                    new Date('10/12/2025'),
                    new Date('11/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Taça Rio (Final)', [
                    new Date('11/16/2025'),
                    new Date('11/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('10/12/2025'),
                    new Date('11/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/16/2025'),
                    new Date('11/19/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Catarinense', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/22/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/26/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('01/29/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('03/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('03/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('06/04/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('06/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('09/03/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('10º Rodada', [
                    new Date('09/07/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('11º Rodada', [
                    new Date('10/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('10/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('11/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/16/2025'),
                    new Date('11/19/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Cearense', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/29/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('03/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('03/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('06/04/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('06/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quadrangular do rebaixamento - 1º Rodada', [
                    new Date('09/03/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quadrangular do rebaixamento - 2º Rodada', [
                    new Date('09/07/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quadrangular do rebaixamento - 3º Rodada', [
                    new Date('10/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('09/07/2025'),
                    new Date('10/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('10/12/2025'),
                    new Date('11/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Disputa do 3º lugar', [
                    new Date('11/16/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/16/2025'),
                    new Date('11/19/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Gaúcho', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/22/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/26/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('01/29/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('03/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('03/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('06/04/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('06/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quadrangular do rebaixamento - 1º Rodada', [
                    new Date('09/07/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quadrangular do rebaixamento - 2º Rodada', [
                    new Date('10/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quadrangular do rebaixamento - 3º Rodada', [
                    new Date('10/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quadrangular do rebaixamento - 4º Rodada', [
                    new Date('11/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quadrangular do rebaixamento - 5º Rodada', [
                    new Date('11/16/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quadrangular do rebaixamento - 6º Rodada', [
                    new Date('11/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Troféu Farroupilha (Semi final)', [
                    new Date('10/12/2025'),
                    new Date('11/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Troféu Farroupilha (Final)', [
                    new Date('11/16/2025'),
                    new Date('11/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('10/12/2025'),
                    new Date('11/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/16/2025'),
                    new Date('11/19/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Goiano', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/22/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/26/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('01/29/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('03/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('03/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('06/04/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('06/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('09/03/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('10º Rodada', [
                    new Date('09/07/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('11º Rodada', [
                    new Date('10/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('10/12/2025'),
                    new Date('11/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('11/16/2025'),
                    new Date('11/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('12/10/2025'),
                    new Date('12/14/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Maranhense', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/15/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/22/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('01/26/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('01/29/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('03/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('03/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('06/04/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('06/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('10º Rodada', [
                    new Date('09/03/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('11º Rodada', [
                    new Date('09/07/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('12º Rodada', [
                    new Date('10/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('13º Rodada', [
                    new Date('10/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('14º Rodada', [
                    new Date('11/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('11/16/2025'),
                    new Date('11/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('12/10/2025'),
                    new Date('12/14/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Mato-Grossense', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/22/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/26/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('01/29/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('03/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('03/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('06/04/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('06/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('09/03/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('09/07/2025'),
                    new Date('10/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('10/12/2025'),
                    new Date('11/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Disputa do 3º lugar', [
                    new Date('11/16/2025'),
                    new Date('11/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/16/2025'),
                    new Date('11/19/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Mineiro', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/29/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('03/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('03/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('06/04/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('06/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('09/03/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('09/07/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('10/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Troféu Inconfidência (Semi final)', [
                    new Date('10/12/2025'),
                    new Date('11/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Troféu Inconfidência (Final)', [
                    new Date('11/16/2025'),
                    new Date('11/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('10/12/2025'),
                    new Date('11/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/16/2025'),
                    new Date('11/19/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Paraense', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/29/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('03/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('03/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('06/04/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('06/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('09/03/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('09/07/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('10/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('10/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('11/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/16/2025'),
                    new Date('11/19/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Paraibano', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/26/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/29/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('03/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('03/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('06/04/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('06/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('09/03/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('09/07/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('10/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('10/12/2025'),
                    new Date('11/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/16/2025'),
                    new Date('11/19/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Paranaense', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/22/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/26/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('01/29/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('03/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('03/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('06/04/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('06/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('09/03/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('10º Rodada', [
                    new Date('09/07/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('11º Rodada', [
                    new Date('10/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('10/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('11/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/16/2025'),
                    new Date('11/19/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Paulistão', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/15/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/22/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('01/26/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('01/29/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('03/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('03/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('06/04/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('06/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('10º Rodada', [
                    new Date('09/03/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('11º Rodada', [
                    new Date('09/07/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('12º Rodada', [
                    new Date('10/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('10/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    
                    new Date('11/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/16/2025'),
                    new Date('11/19/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Pernambucano', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/22/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/26/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/29/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('03/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('03/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('06/04/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('06/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('09/03/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('09/07/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Segunda fase', [
                    new Date('10/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('10/12/2025'),
                    new Date('11/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/16/2025'),
                    new Date('11/19/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Piauiense', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/29/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('03/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('03/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('06/04/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('06/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('09/03/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Segunda fase', [
                    new Date('09/07/2025'),
                    new Date('10/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('10/12/2025'),
                    new Date('11/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/16/2025'),
                    new Date('11/19/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Potiguar', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/26/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/29/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('03/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('03/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('06/04/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('06/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('09/03/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Segunda fase', [
                    new Date('09/07/2025'),
                    new Date('10/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('10/12/2025'),
                    new Date('11/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/16/2025'),
                    new Date('11/19/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Rondoniense', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/15/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/22/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('01/26/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('01/29/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('03/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('03/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('06/04/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('06/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('10º Rodada', [
                    new Date('09/03/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('11º Rodada', [
                    new Date('09/07/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('12º Rodada', [
                    new Date('10/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('13º Rodada', [
                    new Date('10/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('14º Rodada', [
                    new Date('11/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('11/16/2025'),
                    new Date('11/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('12/10/2025'),
                    new Date('12/14/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Roraimense', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/15/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/22/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('01/26/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('01/29/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('03/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('03/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('06/04/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('06/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('10º Rodada', [
                    new Date('09/03/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('11º Rodada', [
                    new Date('09/07/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('12º Rodada', [
                    new Date('10/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('13º Rodada', [
                    new Date('10/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('14º Rodada', [
                    new Date('11/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('11/16/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/19/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Sergipano', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/22/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/26/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/29/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('03/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('03/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('06/04/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('06/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('09/03/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('09/07/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Segunda fase', [
                    new Date('10/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('10/12/2025'),
                    new Date('11/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/16/2025'),
                    new Date('11/19/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Sul-Mato-Grossense', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/22/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/26/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('01/29/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('03/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('03/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('06/04/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('06/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('09/03/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('09/07/2025'),
                    new Date('10/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('10/12/2025'),
                    new Date('11/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/16/2025'),
                    new Date('11/19/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Tocantinense', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/22/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/26/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/29/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('03/19/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('03/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('06/04/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('06/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('09/07/2025'),
                    new Date('10/08/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('10/12/2025'),
                    new Date('11/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/16/2025'),
                    new Date('11/19/2025'),
                    ],
                    
                ),
            ])
            ],
    ),
    new Competicoes(
        3,
        'Calendário 2026',
        '<p>O calendário do futebol brasileiro, historicamente congestionado, é alvo de críticas constantes de jogadores, técnicos e dirigentes. Com jogos excessivos, pouco tempo para recuperação e treinos, além da sobreposição de torneios, a necessidade de uma reorganização mais eficiente é evidente. Uma proposta viável e cada vez mais debatida é a <strong>realocação dos campeonatos estaduais para as datas FIFA</strong>, além da criação de <strong>competições regionais durante os torneios continentais</strong>, criando um sistema mais racional e produtivo.</p><h2>O Problema Atual</h2><p>Hoje, o ano do futebol no Brasil começa com os campeonatos estaduais entre janeiro e abril, seguido por um calendário apertado de competições nacionais e internacionais até dezembro. As datas FIFA – períodos reservados para jogos de seleções – normalmente interrompem o Campeonato Brasileiro, afetando a sequência da competição e desfalcando os clubes que cedem jogadores às seleções.</p><p>Além disso, os clubes que disputam torneios internacionais, como a Libertadores ou a Sul-Americana, enfrentam um acúmulo de jogos em um curto espaço de tempo. Isso exige rodízio de elenco, viagens longas e compromete a performance física e técnica das equipes.</p>  <h2>Propostas para Reformar o Calendário</h2><h3>1. Estaduais nas Datas FIFA</h3><p>Durante as janelas reservadas à seleção brasileira, os campeonatos estaduais poderiam ser disputados com:</p><ul><li><strong>Jogadores da base e reservas</strong>, sem depender dos atletas convocados;</li><li><strong>Mais foco na mídia local</strong>, com ausência de jogos nacionais e internacionais;</li><li><strong>Fórmulas de disputa mais curtas e objetivas</strong>.</li></ul><h3>2. Campeonatos Sul e Sudeste durante Competições Continentais</h3><p>Durante os períodos de jogos da <strong>Copa Libertadores</strong> e <strong>Copa Sul-Americana</strong>, os clubes não envolvidos nesses torneios poderiam disputar competições regionais de alto nível como o <strong>Campeonato Sul</strong> e o <strong>Campeonato Sudeste</strong>. Essas competições teriam foco técnico e de desenvolvimento, com destaque para:</p><ul><li><strong>Clubes da região que não estão em torneios continentais</strong> disputando partidas entre si;</li><li><strong>Clubes participantes da Libertadores/Sul-Americana jogando com times alternativos</strong>, permitindo dar ritmo a jogadores que atuam pouco;</li><li><strong>Desenvolvimento de jovens talentos</strong> e manutenção da forma física de todo o elenco;</li><li><strong>Redução do número de semanas "ociosas"</strong> para clubes menores;</li><li><strong>Mais jogos de apelo regional</strong>, com clássicos e rivalidades locais fora dos estaduais.</li></ul><h2>Vantagens da Mudança</h2><ul><li><strong>Calendário mais equilibrado</strong>: Reduz sobrecarga e respeita as datas FIFA.</li><li><strong>Maior visibilidade para clubes médios</strong> durante os regionais Sul/Sudeste.</li><li><strong>Valorização dos estaduais</strong>, com atenção exclusiva em datas sem competições nacionais.</li>       <li><strong>Desenvolvimento técnico</strong> com uso de elencos mais amplos.</li><li><strong>Engajamento do torcedor regional</strong> em mais momentos do ano.</li></ul><h2>Exemplo Prático</h2><p>Um clube que disputa a Libertadores poderia escalar um time alternativo no Campeonato Sudeste, dando minutos a reservas e jovens atletas. Enquanto isso, clubes que não participam de competições continentais manteriam calendário ativo, enfrentando rivais regionais com boas condições físicas e técnicas.</p><h2>Considerações Finais</h2><p>Reformular o calendário do futebol brasileiro com lógica e inteligência é essencial para a evolução do esporte. Ao aproveitar as datas FIFA para os estaduais e criar torneios regionais como o Campeonato Sul e o Campeonato Sudeste durante os torneios continentais, o futebol brasileiro poderá reduzir a sobrecarga, dar mais oportunidades aos jogadores e manter o torcedor engajado durante todo o ano.</p><p>Com diálogo entre federações, clubes e atletas, é possível construir um calendário mais justo, competitivo e atrativo para todos os envolvidos.</p>',
        new Date('01/01/2025'),
        [
            new Campeonato('Data F.I.F.A.', 'Seleções', 'blue', [
                new DatasCampeonatos('Amistosos', [
                    new Date('03/23/2026'),
                    new Date('03/24/2026'),
                    new Date('03/25/2026'),
                    new Date('03/26/2026'),
                    new Date('03/27/2026'),
                    new Date('03/28/2026'),
                    new Date('03/29/2026'),
                    new Date('03/30/2026'),
                    new Date('03/31/2026')
                    ],
                    
                ),
                new DatasCampeonatos('Amistosos', [
                    new Date('06/01/2026'),
                    new Date('06/02/2026'),
                    new Date('06/03/2026'),
                    new Date('06/04/2026'),
                    new Date('06/05/2026'),
                    new Date('06/06/2026'),
                    new Date('06/07/2026'),
                    new Date('06/08/2026'),
                    new Date('06/09/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Amistosos', [
                    new Date('09/21/2026'),
                    new Date('09/22/2026'),
                    new Date('09/23/2026'),
                    new Date('09/24/2026'),
                    new Date('09/25/2026'),
                    new Date('09/26/2026'),
                    new Date('09/27/2026'),
                    new Date('09/28/2026'),
                    new Date('09/29/2026'),
                    new Date('09/30/2026'),
                    new Date('10/01/2026'),
                    new Date('10/02/2026'),
                    new Date('10/03/2026'),
                    new Date('10/04/2026'),
                    new Date('10/05/2026'),
                    new Date('10/06/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Amistosos', [
                    new Date('11/09/2026'),
                    new Date('11/10/2026'),
                    new Date('11/11/2026'),
                    new Date('11/12/2026'),
                    new Date('11/13/2026'),
                    new Date('11/14/2026'),
                    new Date('11/15/2026'),
                    new Date('11/16/2026'),
                    new Date('11/17/2026'),
                    ],
                    
                ),
            ]),
            new Campeonato('Copa do Mundo', 'Internacional', 'green', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('06/11/2026'),
                    new Date('06/12/2026'),
                    new Date('06/13/2026'),
                    new Date('06/14/2026'),
                    new Date('06/15/2026'),
                    new Date('06/16/2026'),
                    new Date('06/17/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('06/18/2026'),
                    new Date('06/19/2026'),
                    new Date('06/20/2026'),
                    new Date('06/21/2026'),
                    new Date('06/22/2026'),
                    new Date('06/23/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('06/24/2026'),
                    new Date('06/25/2026'),
                    new Date('06/26/2026'),
                    new Date('06/27/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('32 avos', [
                    new Date('06/28/2026'),
                    new Date('06/29/2026'),
                    new Date('06/30/2026'),
                    new Date('07/01/2026'),
                    new Date('07/02/2026'),
                    new Date('07/03/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Oitavas de final', [
                    new Date('07/04/2026'),
                    new Date('07/05/2026'),
                    new Date('07/06/2026'),
                    new Date('07/07/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('07/09/2026'),
                    new Date('07/10/2026'),
                    new Date('07/11/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('07/14/2026'),
                    new Date('07/15/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('3º lugar', [
                    new Date('07/18/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('07/19/2026'),
                    ],
                    
                ),
            ]),
            new Campeonato('Interclubes', 'Internacional', 'green', [
                new DatasCampeonatos('Dérbi das Américas', [
                    new Date('12/09/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Copa Challenger', [
                    new Date('12/12/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Final da Copa Intercontinental', [
                    new Date('12/16/2026'),
                    ],
                    
                ),
            ]),
            new Campeonato('Libertadores da america', 'Continental', 'red', [
                new DatasCampeonatos('Primeira Etapa', [
                    new Date('02/03/2026'),
                    new Date('02/04/2026'),
                    new Date('02/05/2026'),
                    new Date('02/10/2026'),
                    new Date('02/11/2026'),
                    new Date('02/12/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Segunda Etapa', [
                    new Date('02/17/2026'),
                    new Date('02/18/2026'),
                    new Date('02/19/2026'),
                    new Date('02/24/2026'),
                    new Date('02/25/2026'),
                    new Date('02/26/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Terceira Etapa', [
                    new Date('03/03/2026'),
                    new Date('03/04/2026'),
                    new Date('03/05/2026'),
                    new Date('03/10/2026'),
                    new Date('03/11/2026'),
                    new Date('03/12/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('1º Rodada', [
                    new Date('04/07/2026'),
                    new Date('04/08/2026'),
                    new Date('04/09/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('04/14/2026'),
                    new Date('04/15/2026'),
                    new Date('04/16/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('04/21/2026'),
                    new Date('04/22/2026'),
                    new Date('04/23/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('05/05/2026'),
                    new Date('05/06/2026'),
                    new Date('05/07/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('05/12/2026'),
                    new Date('05/13/2026'),
                    new Date('05/14/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('05/26/2026'),
                    new Date('05/27/2026'),
                    new Date('05/28/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Oitavas de final', [
                    new Date('08/11/2026'),
                    new Date('08/12/2026'),
                    new Date('08/13/2026'),
                    new Date('08/18/2026'),
                    new Date('08/19/2026'),
                    new Date('08/20/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('09/08/2026'),
                    new Date('09/09/2026'),
                    new Date('09/10/2026'),
                    new Date('09/15/2026'),
                    new Date('09/16/2026'),
                    new Date('09/17/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('10/20/2026'),
                    new Date('10/21/2026'),
                    new Date('10/22/2026'),
                    new Date('10/27/2026'),
                    new Date('10/28/2026'),
                    new Date('10/29/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/28/2026'),
                    ],
                    
                ),
            ]),
            new Campeonato('Copa Sul Americana', 'Continental', 'red', [
                new DatasCampeonatos('Primeira fase', [
                    new Date('03/03/2026'),
                    new Date('03/04/2026'),
                    new Date('03/05/2026'),
                    new Date('03/10/2026'),
                    new Date('03/11/2026'),
                    new Date('03/12/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('1º Rodada', [
                    new Date('04/07/2026'),
                    new Date('04/08/2026'),
                    new Date('04/09/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('04/14/2026'),
                    new Date('04/15/2026'),
                    new Date('04/16/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('04/21/2026'),
                    new Date('04/22/2026'),
                    new Date('04/23/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('05/05/2026'),
                    new Date('05/06/2026'),
                    new Date('05/07/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('05/12/2026'),
                    new Date('05/13/2026'),
                    new Date('05/14/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('05/26/2026'),
                    new Date('05/27/2026'),
                    new Date('05/28/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Playoffs de Oitavas de final', [
                    new Date('07/21/2026'),
                    new Date('07/22/2026'),
                    new Date('07/23/2026'),
                    new Date('07/28/2026'),
                    new Date('07/29/2026'),
                    new Date('07/30/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Oitavas de final', [
                    new Date('08/11/2026'),
                    new Date('08/12/2026'),
                    new Date('08/13/2026'),
                    new Date('08/18/2026'),
                    new Date('08/19/2026'),
                    new Date('08/20/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('09/08/2026'),
                    new Date('09/09/2026'),
                    new Date('09/10/2026'),
                    new Date('09/15/2026'),
                    new Date('09/16/2026'),
                    new Date('09/17/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('10/20/2026'),
                    new Date('10/21/2026'),
                    new Date('10/22/2026'),
                    new Date('10/27/2026'),
                    new Date('10/28/2026'),
                    new Date('10/29/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/21/2026'),
                    ],
                    
                ),
            ]),
            new Campeonato('Recopa Sul Americana', 'Continental', 'red', [
                new DatasCampeonatos('Final', [
                    new Date('02/19/2026'),
                    new Date('02/26/2026'),
                    ],
                    
                ),
            ]),
            new Campeonato('Copa do Brasil', 'Nacional', 'yellow', [
                new DatasCampeonatos('Primeira fase', [
                    new Date('02/17/2026'),
                    new Date('02/18/2026'),
                    new Date('02/19/2026'),
                    new Date('02/24/2026'),  
                    new Date('02/25/2026'),
                    new Date('02/26/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('Segunda fase', [
                    new Date('03/03/2026'),
                    new Date('03/04/2026'),
                    new Date('03/05/2026'),
                    new Date('03/10/2026'),
                    new Date('03/11/2026'),
                    new Date('03/12/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('Terceira fase', [
                    new Date('04/28/2026'),
                    new Date('04/29/2026'),
                    new Date('04/30/2026'),
                    new Date('05/19/2026'),
                    new Date('05/20/2026'),
                    new Date('05/21/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('Oitavas de final', [
                    new Date('08/04/2026'),
                    new Date('08/05/2026'),
                    new Date('08/06/2026'),
                    new Date('08/25/2026'),
                    new Date('08/26/2026'),
                    new Date('08/27/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('09/01/2026'),
                    new Date('09/02/2026'),
                    new Date('09/03/2026'),
                    new Date('10/13/2026'),
                    new Date('10/14/2026'),
                    new Date('10/15/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('10/24/2026'),
                    new Date('10/25/2026'),
                    new Date('10/31/2026'),
                    new Date('11/01/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('Final', [
                    new Date('12/06/2026'),
                    new Date('12/13/2026'),
                    ],
                    'yellow'
                ),
            ]),
            new Campeonato('Supercopa do Brasil', 'Nacional', 'yellow', [
                new DatasCampeonatos('Final', [
                    new Date('02/01/2026'),
                    ],
                    'yellow'
                ),
            ]),
            new Campeonato('Campeonato Brasileiro A', 'Nacional', 'yellow', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('02/04/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('02/08/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('02/11/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('02/15/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('02/22/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('03/01/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('03/08/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('03/15/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('03/18/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('10º Rodada', [
                    new Date('03/22/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('11º Rodada', [
                    new Date('04/01/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('12º Rodada', [
                    new Date('04/05/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('13º Rodada', [
                    new Date('04/12/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('14º Rodada', [
                    new Date('04/19/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('15º Rodada', [
                    new Date('04/26/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('16º Rodada', [
                    new Date('05/03/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('17º Rodada', [
                    new Date('05/10/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('18º Rodada', [
                    new Date('05/17/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('19º Rodada', [
                    new Date('05/24/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('20º Rodada', [
                    new Date('07/26/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('21º Rodada', [
                    new Date('08/02/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('22º Rodada', [
                    new Date('08/09/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('23º Rodada', [
                    new Date('08/16/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('24º Rodada', [
                    new Date('08/23/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('25º Rodada', [
                    new Date('08/30/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('26º Rodada', [
                    new Date('09/06/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('27º Rodada', [
                    new Date('09/13/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('28º Rodada', [
                    new Date('09/20/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('29º Rodada', [
                    new Date('10/07/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('30º Rodada', [
                    new Date('10/11/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('31º Rodada', [
                    new Date('10/18/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('32º Rodada', [
                    new Date('11/04/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('33º Rodada', [
                    new Date('11/08/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('34º Rodada', [
                    new Date('11/18/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('35º Rodada', [
                    new Date('11/25/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('36º Rodada', [
                    new Date('12/02/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('37º Rodada', [
                    new Date('12/08/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('38º Rodada', [
                    new Date('12/15/2026'),
                    ],
                    'yellow'
                ),
            ]),
            new Campeonato('Campeonato Brasileiro B', 'Nacional', 'yellow', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('02/01/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('02/04/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('02/08/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('02/11/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('02/15/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('02/22/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('03/01/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('03/08/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('03/15/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('10º Rodada', [
                    new Date('03/18/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('11º Rodada', [
                    new Date('03/22/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('12º Rodada', [
                    new Date('04/01/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('13º Rodada', [
                    new Date('04/05/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('14º Rodada', [
                    new Date('04/12/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('15º Rodada', [
                    new Date('04/19/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('16º Rodada', [
                    new Date('04/26/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('17º Rodada', [
                    new Date('05/03/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('18º Rodada', [
                    new Date('05/10/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('19º Rodada', [
                    new Date('05/17/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('20º Rodada', [
                    new Date('05/24/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('21º Rodada', [
                    new Date('07/26/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('22º Rodada', [
                    new Date('08/02/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('23º Rodada', [
                    new Date('08/09/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('24º Rodada', [
                    new Date('08/16/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('25º Rodada', [
                    new Date('08/23/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('26º Rodada', [
                    new Date('08/30/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('27º Rodada', [
                    new Date('09/06/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('28º Rodada', [
                    new Date('09/13/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('29º Rodada', [
                    new Date('09/20/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('30º Rodada', [
                    new Date('10/07/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('31º Rodada', [
                    new Date('10/11/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('32º Rodada', [
                    new Date('10/18/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('33º Rodada', [
                    new Date('11/04/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('34º Rodada', [
                    new Date('11/08/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('35º Rodada', [
                    new Date('11/18/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('36º Rodada', [
                    new Date('11/25/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('37º Rodada', [
                    new Date('12/02/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('38º Rodada', [
                    new Date('12/08/2026'),
                    ],
                    'yellow'
                ),
            ]),
            new Campeonato('Campeonato Brasileiro C', 'Nacional', 'yellow', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('03/22/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('04/01/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('04/05/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('04/12/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('04/19/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('04/26/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('05/03/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('05/10/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('05/17/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('10º Rodada', [
                    new Date('05/24/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('11º Rodada', [
                    new Date('07/26/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('12º Rodada', [
                    new Date('08/02/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('13º Rodada', [
                    new Date('08/09/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('14º Rodada', [
                    new Date('08/16/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('15º Rodada', [
                    new Date('08/23/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('16º Rodada', [
                    new Date('08/30/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('17º Rodada', [
                    new Date('09/06/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('18º Rodada', [
                    new Date('09/13/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('19º Rodada', [
                    new Date('09/20/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('2º Fase - 1º Rodada', [
                    new Date('10/07/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('2º Fase - 2º Rodada', [
                    new Date('10/11/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('2º Fase - 3º Rodada', [
                    new Date('10/18/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('2º Fase - 4º Rodada', [
                    new Date('11/04/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('2º Fase - 5º Rodada', [
                    new Date('11/08/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('2º Fase - 6º Rodada', [
                    new Date('11/18/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/25/2026'),
                    new Date('12/02/2026'),
                    ],
                    'yellow'
                ),
            ]),
            new Campeonato('Campeonato Brasileiro D', 'Nacional', 'yellow', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('04/05/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('04/12/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('04/19/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('04/26/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('05/03/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('05/10/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('05/17/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('05/24/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('07/26/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('10º Rodada', [
                    new Date('08/02/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('11º Rodada', [
                    new Date('08/09/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('12º Rodada', [
                    new Date('08/16/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('13º Rodada', [
                    new Date('08/23/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('14º Rodada', [
                    new Date('08/30/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('Segunda fase', [
                    new Date('09/06/2026'),
                    new Date('09/13/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('Oitavas de final', [
                    new Date('09/20/2026'),
                    new Date('10/07/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('10/11/2026'),
                    new Date('10/18/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('11/04/2026'),
                    new Date('11/08/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/18/2026'),
                    new Date('11/25/2026'),
                    ],
                    'yellow'
                ),
            ]),
            new Campeonato('Nordeste', 'Regional', 'orange', [
                new DatasCampeonatos('Primeira fase', [
                    new Date('04/22/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Segunda fase', [
                    new Date('05/06/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('1º Rodada', [
                    new Date('05/13/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('05/27/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('07/22/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('07/29/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('08/12/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('08/19/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('09/09/2026'),
                    new Date('09/16/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('10/21/2026'),
                    new Date('10/28/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/22/2026'),
                    new Date('11/29/2026'),
                    ],
                    
                ),
            ]),
            new Campeonato('Copa Verde ( Centro Oeste e Norte )', 'Regional', 'orange', [
                new DatasCampeonatos('Primeira fase', [
                    new Date('04/22/2026'),
                    new Date('05/06/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Oitavas de final', [
                    new Date('05/13/2026'),
                    new Date('05/27/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('07/22/2026'),
                    new Date('07/29/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('08/12/2026'),
                    new Date('08/19/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('09/09/2026'),
                    new Date('09/16/2026'),
                    ],
                    
                ),
            ]),
            new Campeonato('Sul', 'Regional', 'orange', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('04/08/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('04/15/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('04/22/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('05/06/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('05/13/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('05/27/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('32 avos',  [
                    new Date('07/22/2026'),
                    new Date('07/29/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Oitavas de final', [
                    new Date('08/12/2026'),
                    new Date('08/19/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('09/09/2026'),
                    new Date('09/16/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('10/21/2026'),
                    new Date('10/28/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/22/2026'),
                    new Date('11/29/2026'),
                    ],
                    
                ),
            ]),
            new Campeonato('Sudeste', 'Regional', 'orange', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('04/08/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('04/15/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('04/22/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('05/06/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('05/13/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('05/27/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('32 avos',  [
                    new Date('07/22/2026'),
                    new Date('07/29/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Oitavas de final', [
                    new Date('08/12/2026'),
                    new Date('08/19/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('09/09/2026'),
                    new Date('09/16/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('10/21/2026'),
                    new Date('10/28/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/22/2026'),
                    new Date('11/29/2026'),
                    ],
                    
                ),
            ]),
            new Campeonato('Acreano', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('06/03/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('06/07/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('09/03/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('09/23/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('09/27/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('09/30/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('10/04/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('11/11/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/15/2026'),
                    ],
                    
                ),
            ]),
            new Campeonato('Alagoano', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/28/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('03/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('03/29/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('06/03/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('06/07/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('09/23/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('09/27/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('09/30/2026'),
                    new Date('10/04/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/11/2026'),
                    new Date('11/15/2026'),
                    ],
                    
                ),
            ]),
            new Campeonato('Amapaense', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/28/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('03/29/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('06/03/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('06/07/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('09/23/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    
                    new Date('09/27/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('09/30/2026'),
                    new Date('10/04/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/11/2026'),
                    new Date('11/15/2026'),
                    ],
                    
                ),
            ]),
            new Campeonato('Amazonense', 'Estadual', 'purple', [
                new DatasCampeonatos('Primeiro Turno - 1º Rodada', [
                    new Date('01/18/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Primeiro Turno - 2º Rodada', [
                    new Date('01/21/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Primeiro Turno - 3º Rodada', [
                    new Date('01/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Primeiro Turno - 4º Rodada', [
                    new Date('01/28/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Playoffs (Primeiro turno)', [
                    new Date('03/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final (Primeiro turno)', [
                    new Date('03/29/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Final (Primeiro turno)', [
                    new Date('06/03/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Segundo Turno - 1º Rodada', [
                    new Date('06/07/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Segundo Turno - 2º Rodada', [
                    new Date('09/23/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Segundo Turno - 3º Rodada', [
                    new Date('09/27/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Playoffs (Segundo turno)', [
                    new Date('09/30/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final (Segundo turno)', [
                    new Date('10/04/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Final (Segundo turno)', [
                    new Date('11/11/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/15/2026'),
                    ],
                    
                ),
            ]),
            new Campeonato('Baiano', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/28/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('03/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('03/29/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('06/03/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('06/07/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('09/23/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('09/27/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('09/30/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('10/04/2026'),
                    new Date('11/11/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/15/2026'),
                    ],
                    
                ),
            ]),
            new Campeonato('Brasiliense', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/28/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('03/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('03/29/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('06/03/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('06/07/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('09/23/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('09/27/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('09/30/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('10/04/2026'),
                    new Date('11/11/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/15/2026'),
                    ],
                    
                ),
            ]),
            new Campeonato('Capixaba', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/18/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/21/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('01/28/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('03/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('03/29/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('06/03/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('06/07/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('09/03/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('09/23/2026'),
                    new Date('09/27/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('09/30/2026'),
                    new Date('10/04/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/11/2026'),
                    new Date('11/15/2026'),
                    ],
                    
                ),
            ]),
            new Campeonato('Carioca', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/14/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/18/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/21/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('01/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('01/28/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('03/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('03/29/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('06/03/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('06/07/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('10º Rodada', [
                    new Date('09/23/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('11º Rodada', [
                    new Date('09/27/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Taça Rio (Semifinal)', [
                    new Date('09/30/2026'),
                    new Date('10/04/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Taça Rio (Final)', [
                    new Date('11/11/2026'),
                    new Date('11/15/2026')
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('09/30/2026'),
                    new Date('10/04/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/11/2026'),
                    new Date('11/15/2026')
                    ],
                    
                ),
            ]),
            new Campeonato('Catarinense', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/14/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/18/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/21/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('01/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('01/28/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('03/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('03/29/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('06/03/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('06/07/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('10º Rodada', [
                    new Date('09/23/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('11º Rodada', [
                    new Date('09/27/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('09/30/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('10/04/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/11/2026'),
                    new Date('11/15/2026'),
                    ],
                    
                ),
            ]),
            new Campeonato('Cearense', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/21/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/28/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('03/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('03/29/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Quadrangular do rebaixamento - 1º Rodada', [
                    new Date('06/07/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Quadrangular do rebaixamento - 2º Rodada', [
                    new Date('09/23/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Quadrangular do rebaixamento - 3º Rodada', [
                    new Date('09/27/2026'),,
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('09/23/2026'),
                    new Date('09/27/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('09/30/2026'),
                    new Date('10/04/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Disputa do 3º lugar', [
                    new Date('11/11/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/11/2026'),
                    new Date('11/15/2026'),
                    ],
                    
                ),
            ]),
            new Campeonato('Gaúcho', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/18/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/21/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('01/28/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('03/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('03/29/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('06/03/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('06/07/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Quadrangular do rebaixamento - 1º Rodada', [
                    new Date('09/23/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Quadrangular do rebaixamento - 2º Rodada', [
                    new Date('09/27/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Quadrangular do rebaixamento - 3º Rodada', [
                    new Date('09/30/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Quadrangular do rebaixamento - 4º Rodada', [
                    new Date('10/04/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Quadrangular do rebaixamento - 5º Rodada', [
                    new Date('11/11/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Quadrangular do rebaixamento - 6º Rodada', [
                    new Date('11/15/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Troféu Farroupilha (Semi final)', [
                    new Date('09/30/2026'),
                    new Date('10/04/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Troféu Farroupilha (Final)', [
                    new Date('11/11/2026'),
                    new Date('11/15/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('09/30/2026'),
                    new Date('10/04/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/11/2026'),
                    new Date('11/15/2026'),
                    ],
                    
                ),
            ]),
            new Campeonato('Goiano', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/14/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/18/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/21/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('01/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('01/28/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('03/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('03/29/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('06/03/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('06/07/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('10º Rodada', [
                    new Date('09/23/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('11º Rodada', [
                    new Date('09/27/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('09/30/2026'),
                    new Date('10/04/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('11/11/2026'),
                    new Date('11/15/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('12/10/2026'),
                    new Date('12/17/2026'),
                    ],
                    
                ),
            ]),
            new Campeonato('Maranhense', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/14/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/18/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/21/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('01/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('01/28/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('03/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('03/29/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('06/03/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('06/07/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('10º Rodada', [
                    new Date('09/23/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('11º Rodada', [
                    new Date('09/27/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('12º Rodada', [
                    new Date('09/30/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('13º Rodada', [
                    new Date('10/04/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('14º Rodada', [
                    new Date('11/11/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('11/15/2026'),
                    new Date('12/10/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('12/17/2026'),
                    new Date('12/20/2026'),
                    ],
                    
                ),
            ]),
            new Campeonato('Mato-Grossense', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/14/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/18/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/21/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('01/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('01/28/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('03/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('03/29/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('06/03/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('06/07/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('09/23/2026'),
                    new Date('09/27/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('09/30/2026'),
                    new Date('10/04/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Disputa do 3º lugar', [
                    new Date('11/11/2026'),
                    new Date('11/15/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/11/2026'),
                    new Date('11/15/2026'),
                    ],
                    
                ),
            ]),
            new Campeonato('Mineiro', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/28/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('03/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('03/29/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('06/03/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('06/07/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('09/23/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('09/27/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Troféu Inconfidência (Semi final)', [
                    new Date('09/30/2026'),
                    new Date('10/04/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Troféu Inconfidência (Final)', [
                    new Date('11/11/2026'),
                    new Date('11/15/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('09/30/2026'),
                    new Date('10/04/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/11/2026'),
                    new Date('11/15/2026'),
                    ],
                    
                ),
            ]),
            new Campeonato('Paraense', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/28/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('03/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('03/29/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('06/03/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('06/07/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('09/23/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('09/27/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('09/30/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('10/04/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/11/2026'),
                    new Date('11/15/2026'),
                    ],
                    
                ),
            ]),
            new Campeonato('Paraibano', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/21/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/28/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('03/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('03/29/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('06/03/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('06/07/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('09/23/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('09/27/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('09/30/2026'),
                    new Date('10/04/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/11/2026'),
                    new Date('11/15/2026')
                    ],
                    
                ),
            ]),
            new Campeonato('Paranaense', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/14/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/18/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/21/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('01/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('01/28/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('03/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('03/29/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('06/03/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('06/07/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('10º Rodada', [
                    new Date('09/23/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('11º Rodada', [
                    new Date('09/27/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('09/30/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('10/04/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/11/2026'),
                    new Date('11/15/2026'),
                    ],
                    
                ),
            ]),
            new Campeonato('Paulistão', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/14/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/18/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/21/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('01/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('01/28/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('03/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('03/29/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('06/03/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('06/07/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('10º Rodada', [
                    new Date('09/23/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('11º Rodada', [
                    new Date('09/27/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('12º Rodada', [
                    new Date('09/30/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('10/04/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    
                    new Date('11/11/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/15/2026'),
                    new Date('12/10/2026'),
                    ],
                    
                ),
            ]),
            new Campeonato('Pernambucano', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/18/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/21/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('01/28/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('03/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('03/29/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('06/03/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('06/07/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('09/23/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Segunda fase', [
                    new Date('09/27/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('09/30/2026'),
                    new Date('10/04/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/11/2026'),
                    new Date('11/15/2026'),
                    ],
                    
                ),
            ]),
            new Campeonato('Piauiense', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/28/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('03/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('03/29/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('06/03/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('06/07/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Segunda fase', [
                    new Date('09/23/2026'),
                    new Date('09/27/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('09/30/2026'),
                    new Date('10/04/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/11/2026'),
                    new Date('11/15/2026'),
                    ],
                    
                ),
            ]),
            new Campeonato('Potiguar', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/21/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/28/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('03/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('03/29/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('06/03/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('06/07/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Segunda fase', [
                    new Date('09/23/2026'),
                    new Date('09/27/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('09/30/2026'),
                    new Date('10/04/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/11/2026'),
                    new Date('11/15/2026'),
                    ],
                    
                ),
            ]),
            new Campeonato('Rondoniense', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/14/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/18/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/21/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('01/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('01/28/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('03/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('03/29/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('06/03/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('06/07/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('10º Rodada', [
                    new Date('09/23/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('11º Rodada', [
                    new Date('09/27/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('12º Rodada', [
                    new Date('09/30/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('13º Rodada', [
                    new Date('10/04/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('14º Rodada', [
                    new Date('11/11/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('11/15/2026'),
                    new Date('12/10/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('12/17/2026'),
                    new Date('12/20/2026'),
                    ],
                    
                ),
            ]),
            new Campeonato('Roraimense', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/14/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/18/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/21/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('01/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('01/28/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('03/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('03/29/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('06/03/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('06/07/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('10º Rodada', [
                    new Date('09/23/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('11º Rodada', [
                    new Date('09/27/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('12º Rodada', [
                    new Date('09/30/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('13º Rodada', [
                    new Date('10/04/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('14º Rodada', [
                    new Date('11/11/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('11/15/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('12/10/2026'),
                    ],
                    
                ),
            ]),
            new Campeonato('Sergipano', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/18/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/21/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('01/28/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('03/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('03/29/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('06/03/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('06/07/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('09/23/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Segunda fase', [
                    new Date('09/27/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('09/30/2026'),
                    new Date('10/04/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/11/2026'),
                    new Date('11/15/2026'),
                    ],
                    
                ),
            ]),
            new Campeonato('Sul-Mato-Grossense', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/14/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/18/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/21/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('01/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('01/28/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('03/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('03/29/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('06/03/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('06/07/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('09/23/2026'),
                    new Date('09/27/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('09/30/2026'),
                    new Date('10/04/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/11/2026'),
                    new Date('11/15/2026'),
                    ],
                    
                ),
            ]),
            new Campeonato('Tocantinense', 'Estadual', 'purple', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('01/21/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('01/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('01/28/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('03/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('03/29/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('06/03/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('06/07/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('09/23/2026'),
                    new Date('09/27/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('09/30/2026'),
                    new Date('10/04/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('11/11/2026'),
                    new Date('11/15/2026')
                    ],
                    
                ),
            ])
            ]
    ),
    new Competicoes(
        4,
        'Calendário Europeu',
        '<p>O calendário europeu de futebol é considerado um dos mais bem organizados do mundo. Ele serve de modelo para diversas ligas e competições internacionais, incluindo torneios da FIFA e da UEFA. Seguindo o ritmo das estações do hemisfério norte, o calendário europeu é estruturado de <strong>agosto a maio</strong>, com uma pausa de verão no meio do ano.</p><h2>Estrutura do Calendário</h2><p>A temporada europeia é dividida em blocos bem definidos:</p><ul><li><strong>Competições Nacionais (agosto a maio):</strong> ligas como Premier League, La Liga, Bundesliga e Serie A.</li><li><strong>Copas Nacionais:</strong> torneios eliminatórios paralelos às ligas, como a FA Cup ou a Copa do Rei.</li><li><strong>Competições Continentais:</strong> Champions League, Europa League e Conference League (setembro a maio).</li>      <li><strong>Datas FIFA:</strong> pausas para jogos de seleções nacionais (março, junho, setembro, outubro e novembro).</li>     <li><strong>Pré-temporada e férias:</strong> junho e julho reservados para descanso e preparação.</li></ul><h2>Vantagens do Modelo Europeu</h2><ul><li><strong>Previsibilidade e organização</strong> para clubes e torcedores.</li><li><strong>Integração com o mercado internacional</strong> e alinhamento com as janelas de transferências.</li><li><strong>Respeito às datas FIFA</strong> com paralisação das ligas.</li><li><strong>Menor sobrecarga física</strong> em comparação com o modelo sul-americano.</li><li><strong>Maior atratividade comercial</strong> e visibilidade global.</li></ul><h2>A Influência no Futebol Global</h2><p>Devido à sua eficiência esportiva, econômica e estrutural, o calendário europeu é usado como <strong>referência mundial</strong>. Diversas federações, inclusive sul-americanas, cogitam adaptar suas temporadas para coincidir com o modelo europeu, facilitando transferências e intercâmbio esportivo.</p><h2>Desafios e Críticas</h2><ul><li><strong>Alta exigência física</strong> para clubes que disputam todas as competições.</li><li><strong>Desigualdade financeira</strong> entre grandes e pequenos clubes.</li><li><strong>Calendário apertado</strong> em anos de Copa do Mundo ou Eurocopa.</li></ul><p>Apesar dos desafios, o calendário europeu é um exemplo de como a boa organização e o respeito às janelas internacionais podem beneficiar atletas, clubes, torcedores e a indústria do futebol como um todo.</p>',
        new Date('07/01/2025'),
        [
            new Campeonato('Data F.I.F.A.', 'Seleções', 'blue', [
                new DatasCampeonatos('Eliminatórias', [
                    new Date('09/01/2025'),
                    new Date('09/02/2025'),
                    new Date('09/03/2025'),
                    new Date('09/04/2025'),
                    new Date('09/05/2025'),
                    new Date('09/06/2025'),
                    new Date('09/07/2025'),
                    new Date('09/08/2025'),
                    new Date('09/09/2025')
                    ],
                    
                ),
                new DatasCampeonatos('Amistosos Internacionais', [
                    new Date('10/06/2025'),
                    new Date('10/07/2025'),
                    new Date('10/08/2025'),
                    new Date('10/09/2025'),
                    new Date('10/10/2025'),
                    new Date('10/11/2025'),
                    new Date('10/12/2025'),
                    new Date('10/13/2025'),
                    new Date('10/14/2025')
                    ],
                    
                ),
                new DatasCampeonatos('Amistosos Internacionais', [
                    new Date('11/10/2025'),
                    new Date('11/11/2025'),
                    new Date('11/12/2025'),
                    new Date('11/13/2025'),
                    new Date('11/14/2025'),
                    new Date('11/15/2025'),
                    new Date('11/16/2025'),
                    new Date('11/17/2025'),
                    new Date('11/18/2025')
                    ],
                    
                ),
                new DatasCampeonatos('Amistosos', [
                    new Date('03/23/2026'),
                    new Date('03/24/2026'),
                    new Date('03/25/2026'),
                    new Date('03/26/2026'),
                    new Date('03/27/2026'),
                    new Date('03/28/2026'),
                    new Date('03/29/2026'),
                    new Date('03/30/2026'),
                    new Date('03/31/2026')
                    ],
                    
                ),
                new DatasCampeonatos('Amistosos', [
                    new Date('06/01/2026'),
                    new Date('06/02/2026'),
                    new Date('06/03/2026'),
                    new Date('06/04/2026'),
                    new Date('06/05/2026'),
                    new Date('06/06/2026'),
                    new Date('06/07/2026'),
                    new Date('06/08/2026'),
                    new Date('06/09/2026'),
                    ],
                    
                ),
            ]),
            new Campeonato('Copa do Mundo de Clubes', 'Internacional', 'green', [
                new DatasCampeonatos('Oitavas de final', [
                    new Date('07/01/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('07/04/2025'),
                    new Date('07/05/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('07/08/2025'),
                    new Date('07/09/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('07/13/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Copa do Mundo', 'Internacional', 'green', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('06/11/2026'),
                    new Date('06/12/2026'),
                    new Date('06/13/2026'),
                    new Date('06/14/2026'),
                    new Date('06/15/2026'),
                    new Date('06/16/2026'),
                    new Date('06/17/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('06/18/2026'),
                    new Date('06/19/2026'),
                    new Date('06/20/2026'),
                    new Date('06/21/2026'),
                    new Date('06/22/2026'),
                    new Date('06/23/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('06/24/2026'),
                    new Date('06/25/2026'),
                    new Date('06/26/2026'),
                    new Date('06/27/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('32 avos', [
                    new Date('06/28/2026'),
                    new Date('06/29/2026'),
                    new Date('06/30/2026'),
                    new Date('07/01/2026'),
                    new Date('07/02/2026'),
                    new Date('07/03/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Oitavas de final', [
                    new Date('07/04/2026'),
                    new Date('07/05/2026'),
                    new Date('07/06/2026'),
                    new Date('07/07/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('07/09/2026'),
                    new Date('07/10/2026'),
                    new Date('07/11/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('07/14/2026'),
                    new Date('07/15/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('3º lugar', [
                    new Date('07/18/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('07/19/2026'),
                    ],
                    
                ),
            ]),
            new Campeonato('Interclubes', 'Internacional', 'green', [
                new DatasCampeonatos('Final da Copa Intercontinental', [
                    new Date('12/17/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Champions League', 'Continental', 'red', [
                new DatasCampeonatos('Primeira pré-eliminatória', [
                    new Date('07/08/2025'),
                    new Date('07/09/2025'),
                    new Date('07/15/2025'),
                    new Date('07/16/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Segunda pré-eliminatória', [
                    new Date('07/22/2025'),
                    new Date('07/23/2025'),
                    new Date('07/29/2025'),
                    new Date('07/30/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Terceira pré-eliminatória', [
                    new Date('08/05/2025'),
                    new Date('08/06/2025'),
                    new Date('08/12/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Play-off', [
                    new Date('08/19/2025'),
                    new Date('08/26/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('1º Rodada', [
                    new Date('09/16/2025'),
                    new Date('09/17/2025'),
                    new Date('09/18/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('09/30/2025'),
                    new Date('10/01/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('10/21/2025'),
                    new Date('10/22/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('11/04/2025'),
                    new Date('11/05/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('11/25/2025'),
                    new Date('11/26/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('12/09/2025'),
                    new Date('12/10/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('01/20/2026'),
                    new Date('01/21/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('01/28/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Play-off', [
                    new Date('02/17/2026'),
                    new Date('02/18/2026'),
                    new Date('02/24/2026'),
                    new Date('02/25/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Oitavas de final', [
                    new Date('03/10/2026'),
                    new Date('03/11/2026'),
                    new Date('03/17/2026'),
                    new Date('03/18/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('04/07/2026'),
                    new Date('04/08/2026'),
                    new Date('04/14/2026'),
                    new Date('04/15/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('04/28/2026'),
                    new Date('04/29/2026'),
                    new Date('05/05/2026'),
                    new Date('05/06/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('05/30/2026'),
                    ],
                    
                ),
            ]),
            new Campeonato('Europe League', 'Continental', 'red', [
                new DatasCampeonatos('Primeira pré-eliminatória', [
                    new Date('07/10/2025'),
                    new Date('07/17/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Segunda pré-eliminatória', [
                    new Date('07/24/2025'),
                    new Date('07/31/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Terceira pré-eliminatória', [
                    new Date('08/07/2025'),
                    new Date('08/14/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Play-off', [
                    new Date('08/21/2025'),
                    new Date('08/28/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('1º Rodada', [
                    new Date('09/24/2025'),
                    new Date('09/25/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('10/02/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('10/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('11/06/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('11/27/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('12/11/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('01/22/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('01/29/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Play-off', [
                    new Date('02/19/2026'),
                    new Date('02/26/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Oitavas de final', [
                    new Date('03/12/2026'),
                    new Date('03/19/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('04/09/2026'),
                    new Date('04/16/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('04/30/2026'),
                    new Date('05/07/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('05/20/2026'),
                    ],
                    
                ),
            ]),
            new Campeonato('U.E.F.A. Conference League', 'Continental', 'red', [
                new DatasCampeonatos('Primeira pré-eliminatória', [
                    new Date('07/10/2025'),
                    new Date('07/17/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Segunda pré-eliminatória', [
                    new Date('07/24/2025'),
                    new Date('07/31/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Terceira pré-eliminatória', [
                    new Date('08/07/2025'),
                    new Date('08/14/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Play-off', [
                    new Date('08/21/2025'),
                    new Date('08/28/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('1º Rodada', [
                    new Date('10/02/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('10/23/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('11/06/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('11/27/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('12/11/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('12/18/2025'),
                    ],
                    
                ),
                new DatasCampeonatos('Play-off', [
                    new Date('02/19/2026'),
                    new Date('02/26/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Oitavas de final', [
                    new Date('03/12/2026'),
                    new Date('03/19/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Quartas de Final', [
                    new Date('04/09/2026'),
                    new Date('04/16/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Semi final', [
                    new Date('04/30/2026'),
                    new Date('05/07/2026'),
                    ],
                    
                ),
                new DatasCampeonatos('Final', [
                    new Date('05/27/2026'),
                    ],
                    
                ),
            ]),
            new Campeonato('SuperCup', 'Continental', 'red', [
                new DatasCampeonatos('Final', [
                    new Date('08/13/2025'),
                    ],
                    
                ),
            ]),
            new Campeonato('Premier League', 'Nacional', 'yellow', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('08/15/2025'),
                    new Date('08/16/2025'),
                    new Date('08/17/2025'),
                    new Date('08/18/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('08/23/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('08/30/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('09/13/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('09/20/205'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('09/27/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('10/04/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('10/18/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('10/25/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('10º Rodada', [
                    new Date('11/01/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('11º Rodada', [
                    new Date('11/08/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('12º Rodada', [
                    new Date('11/22/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('13º Rodada', [
                    new Date('11/29/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('14º Rodada', [
                    new Date('12/03/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('15º Rodada', [
                    new Date('12/06/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('16º Rodada', [
                    new Date('12/13/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('17º Rodada', [
                    new Date('12/20/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('18º Rodada', [
                    new Date('12/27/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('19º Rodada', [
                    new Date('12/30/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('20º Rodada', [
                    new Date('01/03/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('21º Rodada', [
                    new Date('01/07/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('22º Rodada', [
                    new Date('01/17/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('23º Rodada', [
                    new Date('01/24/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('24º Rodada', [
                    new Date('01/31/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('25º Rodada', [
                    new Date('02/07/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('26º Rodada', [
                    new Date('02/11/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('27º Rodada', [
                    new Date('02/21/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('28º Rodada', [
                    new Date('02/28/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('29º Rodada', [
                    new Date('03/04/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('30º Rodada', [
                    new Date('03/14/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('31º Rodada', [
                    new Date('03/21/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('32º Rodada', [
                    new Date('11/04/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('33º Rodada', [
                    new Date('04/18/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('34º Rodada', [
                    new Date('04/25/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('35º Rodada', [
                    new Date('05/02/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('36º Rodada', [
                    new Date('05/09/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('37º Rodada', [
                    new Date('05/17/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('38º Rodada', [
                    new Date('05/24/2026'),
                    ],
                    'yellow'
                ),
            ]),
            new Campeonato('La Liga', 'Nacional', 'yellow', [
                new DatasCampeonatos('1º Rodada', [
                    new Date('08/17/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('2º Rodada', [
                    new Date('08/24/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('3º Rodada', [
                    new Date('08/31/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('4º Rodada', [
                    new Date('09/14/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('5º Rodada', [
                    new Date('09/21/205'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('6º Rodada', [
                    new Date('09/24/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('7º Rodada', [
                    new Date('09/29/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('8º Rodada', [
                    new Date('10/05/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('9º Rodada', [
                    new Date('10/19/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('10º Rodada', [
                    new Date('10/26/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('11º Rodada', [
                    new Date('11/02/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('12º Rodada', [
                    new Date('11/09/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('13º Rodada', [
                    new Date('11/23/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('14º Rodada', [
                    new Date('11/30/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('15º Rodada', [
                    new Date('12/07/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('16º Rodada', [
                    new Date('12/14/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('17º Rodada', [
                    new Date('12/21/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('18º Rodada', [
                    new Date('01/04/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('19º Rodada', [
                    new Date('01/11/2025'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('20º Rodada', [
                    new Date('01/18/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('21º Rodada', [
                    new Date('01/25/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('22º Rodada', [
                    new Date('02/01/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('23º Rodada', [
                    new Date('02/08/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('24º Rodada', [
                    new Date('02/15/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('25º Rodada', [
                    new Date('02/22/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('26º Rodada', [
                    new Date('03/01/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('27º Rodada', [
                    new Date('03/08/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('28º Rodada', [
                    new Date('03/15/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('29º Rodada', [
                    new Date('03/22/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('30º Rodada', [
                    new Date('04/05/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('31º Rodada', [
                    new Date('04/12/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('32º Rodada', [
                    new Date('04/19/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('33º Rodada', [
                    new Date('04/22/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('34º Rodada', [
                    new Date('05/03/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('35º Rodada', [
                    new Date('05/02/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('36º Rodada', [
                    new Date('05/10/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('37º Rodada', [
                    new Date('05/13/2026'),
                    ],
                    'yellow'
                ),
                new DatasCampeonatos('38º Rodada', [
                    new Date('05/17/2026'),
                    ],
                    'yellow'
                ),
            ]),
            ]
    )
]
