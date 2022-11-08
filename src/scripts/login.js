const body = document.querySelector("body")
const botaoLogin = document.querySelector(".abrir-login")

botaoLogin.addEventListener("click", (e) =>{
    let modalMaior = document.querySelector(".fundo-modal")
    modalMaior.classList.toggle("show-modal")
})
const botaoCadastrar = document.querySelector(".abrir-cadastro")
botaoCadastrar.addEventListener("click", (e) =>{
    let modalMaior = document.querySelector(".modal-cadastro-fundo")
    modalMaior.classList.toggle("show-modal")
})

const botaoDeletarConta = document.querySelector(".deletar-conta")
botaoDeletarConta.addEventListener("click", (e) =>{
    let modalMaior = document.querySelector(".modal-removePerfil-fundo")
    modalMaior.classList.toggle("show-modal")
})

function modalLogin(){

    let divSuperiorModal = document.createElement("div")
    divSuperiorModal.classList.add("fundo-modal")

    let divModalLogin = document.createElement("div")
    divModalLogin.classList.add("modal-login")

    let formulario = document.createElement("form")
    formulario.classList.add("form-login")

    let tagH3 = document.createElement("h3")
    tagH3.innerText = "Login"

    let inputEmail = document.createElement("input")
    inputEmail.classList.add("input-geral")
    inputEmail.placeholder = "Email"
    inputEmail.type = "email"

    let inputSenha = document.createElement("input")
    inputSenha.classList.add("input-geral")
    inputSenha.placeholder = "Password"
    inputSenha.type = "password"

    let botaoLogin = document.createElement("button")
    botaoLogin.classList.add("botao-login")
    botaoLogin.innerText = "Entrar"

    let botaoIrCadastro = document.createElement("button")
    botaoIrCadastro.innerText = "Clique aqui."
    botaoIrCadastro.classList.add("ir-cadastro")

    let tagSpan = document.createElement("span")
    tagSpan.innerText = "Não tem cadastro? Por favor "

    let botaoFechar = document.createElement("button")
    botaoFechar.classList.add("fechar-modal")
    botaoFechar.innerText = "X"

    formulario.append(tagH3, inputEmail, inputSenha, botaoLogin, tagSpan)
    tagSpan.appendChild(botaoIrCadastro)
    divModalLogin.append(formulario, botaoFechar)
    divSuperiorModal.appendChild(divModalLogin)
    body.appendChild(divSuperiorModal)
}
modalLogin()


function modalCadastro(){

    let divSuperiorModal = document.createElement("div")
    divSuperiorModal.classList.add("modal-cadastro-fundo")

    let divModalCadastro = document.createElement("div")
    divModalCadastro.classList.add("modal-cadastro")

    let formulario = document.createElement("form")
    formulario.classList.add("form-cadastro")

    let tagH3 = document.createElement("h3")
    tagH3.innerText = "Cadastrar"

    let inputNome = document.createElement("input")
    inputNome.classList.add("input-geral")
    inputNome.placeholder = "Nome"
    inputNome.type = "text"

    let inputEmail = document.createElement("input")
    inputEmail.classList.add("input-geral")
    inputEmail.placeholder = "E-mail"
    inputEmail.type = "email"

    let inputSenha = document.createElement("input")
    inputSenha.classList.add("input-geral")
    inputSenha.placeholder = "Password"
    inputSenha.type = "password"

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

    let tagSpan = document.createElement("span")
    tagSpan.innerText = "Ja tem cadastro? Faça o login "

    let botaoFechar = document.createElement("button")
    botaoFechar.classList.add("fechar-modal")
    botaoFechar.innerText = "X"

    formulario.append(tagH3, inputNome, inputEmail, inputSenha, inputAvatar, botaoCadastrar, tagSpan)
    tagSpan.appendChild(botaoIrLogin)
    divModalCadastro.append(formulario, botaoFechar)
    divSuperiorModal.appendChild(divModalCadastro)
    body.appendChild(divSuperiorModal)
}
modalCadastro()
function deletarConta(){
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

    let botaoFechar = document.createElement("button")
    botaoFechar.classList.add("fechar-modal")
    botaoFechar.innerText = "X"

    areaDeletar.append(tagH3, botaoManter, botaoDeletar)
    divModalDeletar.append(areaDeletar, botaoFechar)
    divSuperiorModal.appendChild(divModalDeletar)
    body.appendChild(divSuperiorModal)
}
deletarConta()


