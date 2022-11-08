import {usuario} from "./informacaoUser.js"
import { atualizarPerfil, petCadastro, petAtualizar, deletarConta } from "./modalProfile.js";

atualizarPerfil()

petCadastro()

petAtualizar()

deletarConta()

const token = localStorage.getItem("userToken")

usuario (token)