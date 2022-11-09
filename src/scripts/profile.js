import {usuario} from "./informacaoUser.js"
import { atualizarPerfil, petCadastro, petAtualizar, deletarConta } from "./modalProfile.js";
import { cadastrarPet, eventEditar } from "./requisition.js";
import { autorizacao } from "./autorizacao.js";

atualizarPerfil()

petCadastro()

petAtualizar()

deletarConta()

eventEditar()

cadastrarPet()

autorizacao()

usuario ()


function logoutPaginaProfile(){
    const buttonLogout = document.querySelector(".botao-logout")
    const carregando = document.querySelector(".carregando")

    buttonLogout.addEventListener("click", (e)=>{
        localStorage.removeItem("userToken")
        carregando.classList.add("carregando-on")
        setTimeout(() => {
            window.location.href = './../../../index.html'
        }, 3000);
    })
}
logoutPaginaProfile()