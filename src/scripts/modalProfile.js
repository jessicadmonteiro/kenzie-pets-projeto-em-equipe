import { deletarUsuario } from "./request.js"
import {usuario} from "./informacaoUser.js"

const body = document.querySelector("body")
const botaoAtualizar = document.querySelector(".botao-atulizar-perfil")

botaoAtualizar.addEventListener("click", (e) => {
    let modalMaior = document.querySelector(".modal-cadastro-fundo")
    modalMaior.classList.toggle("show-modal")
})

export function atualizarPerfil() {



    let divSuperiorModal = document.createElement("div")
    divSuperiorModal.classList.add("modal-cadastro-fundo")

    let divModalCadastro = document.createElement("div")
    divModalCadastro.classList.add("modal-atualizar")

    let formulario = document.createElement("form")
    formulario.classList.add("form-cadastro-att")

    let tagH3 = document.createElement("h3")
    tagH3.innerText = "Atualizar Perfil"

    let inputAvatar = document.createElement("input")
    inputAvatar.classList.add("input-geral")
    inputAvatar.placeholder = "Avatar?"
    inputAvatar.type = "url"
    inputAvatar.id = "avatar_url"

    let inputNome = document.createElement("input")
    inputNome.classList.add("input-geral")
    inputNome.placeholder = "Nome"
    inputNome.type = "text"
    inputNome.id = "name"


    let botaoCadastrar = document.createElement("button")
    botaoCadastrar.classList.add("botao-cadastro")
    botaoCadastrar.innerText = "Atualizar"

    let botaoIrLogin = document.createElement("button")
    botaoIrLogin.innerText = "clicando aqui."
    botaoIrLogin.classList.add("ir-cadastro")

    let tagSpan = document.createElement("span")
    tagSpan.innerText = "Ja tem cadastro? Faça o login "

    let botaoFechar = document.createElement("button")
    botaoFechar.classList.add("fechar-modal")
    botaoFechar.innerText = "X"

    botaoFechar.addEventListener("click", () => {
        let modalMaior = document.querySelector(".modal-cadastro-fundo")
        modalMaior.classList.toggle("show-modal")
    })

    formulario.append(tagH3, inputNome, inputAvatar, botaoCadastrar, tagSpan)
    tagSpan.appendChild(botaoIrLogin)
    divModalCadastro.append(formulario, botaoFechar)
    divSuperiorModal.appendChild(divModalCadastro)
    body.appendChild(divSuperiorModal)
}

const botaoCadastrarPet = document.querySelector(".cadatrar-pets")

botaoCadastrarPet.addEventListener("click", (e) => {
   
    let modalMaiorPet = document.querySelector(".modal-cadastro-pet-fundo")
    modalMaiorPet.classList.toggle("show-modal")
})

export function petCadastro() {

    let divSuperiorModal = document.createElement("div")
    divSuperiorModal.classList.add("modal-cadastro-pet-fundo")

    let divModalCadastro = document.createElement("div")
    divModalCadastro.classList.add("modal-cadastro")

    let formulario = document.createElement("form")
    formulario.classList.add("form-cadastro-att")
    formulario.id = "form-cadastro-pet"

    let tagH3 = document.createElement("h3")
    tagH3.innerText = "Cadastrar Pet"

    let inputNome = document.createElement("input")
    inputNome.classList.add("input-geral")
    inputNome.placeholder = "Nome"
    inputNome.type = "text"

    let inputEmail = document.createElement("input")
    inputEmail.classList.add("input-geral")
    inputEmail.placeholder = "Raça"
    inputEmail.type = "text"

    let inputEsp = document.createElement("input")
    inputEsp.classList.add("input-geral")
    inputEsp.placeholder = "Espécie"
    inputEsp.type = "text"

    let inputAvatar = document.createElement("input")
    inputAvatar.classList.add("input-geral")
    inputAvatar.placeholder = "Avatar?"
    inputAvatar.type = "url"

    let botaoCadastrar = document.createElement("button")
    botaoCadastrar.classList.add("botao-cadastro")
    botaoCadastrar.innerText = "Cadastrar"

    let botaoIrLogin = document.createElement("button")
    botaoIrLogin.innerText = "clicando aqui."
    botaoIrLogin.classList.add("ir-cadastro")


    let botaoFechar = document.createElement("button")
    botaoFechar.classList.add("fechar-modal")
    botaoFechar.innerText = "X"

    botaoFechar.addEventListener("click", () => {
        let modalMaior = document.querySelector(".modal-cadastro-pet-fundo")
        modalMaior.classList.toggle("show-modal")
    })

    formulario.append(tagH3, inputNome, inputEmail, inputEsp, inputAvatar, botaoCadastrar)
    divModalCadastro.append(formulario, botaoFechar)
    divSuperiorModal.appendChild(divModalCadastro)
    body.appendChild(divSuperiorModal)
}

export function petAtualizar() {

    let divSuperiorModal = document.createElement("div")
    divSuperiorModal.classList.add("modal-atualizar-pet-fundo-att")

    let divModalCadastro = document.createElement("div")
    divModalCadastro.classList.add("modal-cadastro")

    let formulario = document.createElement("form")
    formulario.classList.add("form-cadastro-att")
    formulario.id = "form-editar-pet"

    let tagH3 = document.createElement("h3")
    tagH3.innerText = "Atualizar Pet"

    let inputNome = document.createElement("input")
    inputNome.classList.add("input-geral")
    inputNome.placeholder = "Nome"
    inputNome.type = "text"
    inputNome.id ="pet-nome"

    let inputRaca = document.createElement("input")
    inputRaca.classList.add("input-geral")
    inputRaca.placeholder = "Raça"
    inputRaca.type = "text"
    inputRaca.id = "pet-raca"

    let inputEsp = document.createElement("input")
    inputEsp.classList.add("input-geral")
    inputEsp.placeholder = "Espécie"
    inputEsp.type = "text"
    inputEsp.id = "pet-esp"

    let inputAvatar = document.createElement("input")
    inputAvatar.classList.add("input-geral")
    inputAvatar.placeholder = "Avatar?"
    inputAvatar.type = "url"
    inputAvatar.id = "pet-url"

    let botaoCadastrar = document.createElement("button")
    botaoCadastrar.classList.add("botao-cadastro")
    botaoCadastrar.innerText = "Atualizar"

    let botaoIrLogin = document.createElement("button")
    botaoIrLogin.innerText = "clicando aqui."
    botaoIrLogin.classList.add("ir-cadastro")


    let botaoFechar = document.createElement("button")
    botaoFechar.classList.add("fechar-modal")
    botaoFechar.innerText = "X"

    botaoFechar.addEventListener("click", () => {
        let modalMaior = document.querySelector(".modal-atualizar-pet-fundo-att")
        modalMaior.classList.remove("modal-abrir")
    })

    formulario.append(tagH3, inputNome, inputRaca, inputEsp, inputAvatar, botaoCadastrar)
    divModalCadastro.append(formulario, botaoFechar)
    divSuperiorModal.appendChild(divModalCadastro)
    body.appendChild(divSuperiorModal)
}

const botaoDeletarConta = document.querySelector(".botao-deletar-perfil")

botaoDeletarConta.addEventListener("click", (e) =>{

    let modalDeletar = document.querySelector(".modal-removePerfil-fundo")
    modalDeletar.classList.toggle("show-modal")
})

export function deletarConta() {
    let divSuperiorModal = document.createElement("div")
    divSuperiorModal.classList.add("modal-removePerfil-fundo")

    let divModalDeletar = document.createElement("div")
    divModalDeletar.classList.add("modal-removerPerfil")

    let areaDeletar = document.createElement("div")
    areaDeletar.classList.add("area-remove")

    let tagH3 = document.createElement("h3")
    tagH3.innerText = "Desejo mesmo deletar sua conta?"

    let botaoManter = document.createElement("button")
    botaoManter.classList.add("botao-materConta")
    botaoManter.innerText = "Não desejo deletar minha conta"

    let botaoDeletar = document.createElement("button")
    botaoDeletar.classList.add("botao-deletarConta")
    botaoDeletar.innerText = "Quero deletar minha conta"


    
    botaoDeletar.addEventListener("click", async () => {

        await deletarUsuario()

        localStorage.removeItem("userToken")

    })

    let botaoFechar = document.createElement("button")
    botaoFechar.classList.add("fechar-modal")
    botaoFechar.innerText = "X"

    botaoFechar.addEventListener("click", () => {
        let modalMaior = document.querySelector(".modal-removePerfil-fundo")
        modalMaior.classList.toggle("show-modal")
    })

    areaDeletar.append(tagH3, botaoManter, botaoDeletar)
    divModalDeletar.append(areaDeletar, botaoFechar)
    divSuperiorModal.appendChild(divModalDeletar)
    body.appendChild(divSuperiorModal)
}