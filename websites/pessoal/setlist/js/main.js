import { gravacoes } from "./mvc/control/gravacao.js"
import { interpretes } from "./mvc/control/interprete.js"
import { setLists } from "./mvc/control/setlist.js"
import { mostrarSetList } from "./mvc/view/setlist.js"
import { mostrarGravacao, mostrarGravaçoesPorArtista } from "./mvc/view/gravacao.js"
import { criandoSetList } from "./funcao/criandoSetList.js"
//mostrarGravacao(gravacoes)
criandoSetList()
mostrarSetList(setLists)
mostrarGravaçoesPorArtista(gravacoes, interpretes, setLists)

