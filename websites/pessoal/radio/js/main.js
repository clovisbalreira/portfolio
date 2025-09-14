import { programacao } from "./mvc/control/programacao.js"
import { radios } from "./mvc/control/radios.js";
import { parada } from "./mvc/control/parada.js";
import { posts } from "./mvc/control/posts.js";
import { mostrarSite } from "./utils/mostrarSite.js"
import { variavelGlobal } from "./mvc/control/global.js";

mostrarSite(radios[variavelGlobal.indexRadio], programacao, radios, parada, posts, variavelGlobal)