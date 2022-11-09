const body = document.querySelector("body")
const botaoLogin = document.querySelector(".botao_login")

botaoLogin.addEventListener("click", (e) => {
    let modalMaior = document.querySelector(".fundo-modal")
    modalMaior.classList.toggle("show-modal")
})

export function modalLogin() {

    let divSuperiorModal = document.createElement("div")
    divSuperiorModal.classList.add("fundo-modal")

    let divModalLogin = document.createElement("div")
    divModalLogin.classList.add("modal-login")

    let divFormLogin = document.createElement("div")
    divFormLogin.classList.add("divFormLogin")

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
    botaoIrCadastro.innerText = "Não tem cadastro? Por favor clique aqui."
    botaoIrCadastro.classList.add("ir-cadastro")
    botaoIrCadastro.id = "irCadastro"

    let botaoFechar = document.createElement("button")
    botaoFechar.classList.add("fechar-modal")
    botaoFechar.innerText = "X"

    botaoFechar.addEventListener("click", () => {
        let modalMaior = document.querySelector(".fundo-modal")
        modalMaior.classList.toggle("show-modal")
    })

    divFormLogin.append(formulario, botaoIrCadastro)
    formulario.append(tagH3, inputEmail, inputSenha, botaoLogin)
    divModalLogin.append(divFormLogin, botaoFechar)
    divSuperiorModal.appendChild(divModalLogin)
    body.appendChild(divSuperiorModal)
}
modalLogin()

const botaoCadastrar = document.querySelector(".botao_register")
botaoCadastrar.addEventListener("click", (e) => {
    let modalMaior = document.querySelector(".modal-cadastro-fundo")
    modalMaior.classList.toggle("show-modal")
})

export function modalCadastro() {

    let divSuperiorModal = document.createElement("div")
    divSuperiorModal.classList.add("modal-cadastro-fundo")

    let divModalCadastro = document.createElement("div")
    divModalCadastro.classList.add("modal-cadastro")

    let formulario = document.createElement("form")
    formulario.classList.add("form-cadastro")

    let divForm = document.createElement("div")
    divForm.classList.add("divFormCadastro")

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
    botaoCadastrar.addEventListener("click", (e) => {
        let modalMaior = document.querySelector(".modal-cadastro-fundo")
        modalMaior.classList.remove("show-modal")
        })
 

    let botaoIrLogin = document.createElement("button")
    botaoIrLogin.innerText = "Ja tem cadastro? Faça o login clicando aqui."
    botaoIrLogin.classList.add("ir-login")
    


    let botaoFechar = document.createElement("button")
    botaoFechar.classList.add("fechar-modal")
    botaoFechar.innerText = "X"

    botaoFechar.addEventListener("click", (event) => {

        event.preventDefault()

        let modalMaior = document.querySelector(".modal-cadastro-fundo")
        modalMaior.classList.remove("modal-fechar")
    })
    
    divForm.append(formulario, botaoIrLogin)
    formulario.append(tagH3, inputNome, inputEmail, inputSenha, inputAvatar, botaoCadastrar)
    divModalCadastro.append(divForm, botaoFechar)
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

function irLogin(){
    const irLogin = document.querySelector(".ir-login")
    irLogin.addEventListener("click", (e) =>{
        let modalMaior = document.querySelector(".modal-cadastro-fundo")
        modalMaior.classList.remove("show-modal")
        let modalLogin = document.querySelector(".fundo-modal")
        modalLogin.classList.add("show-modal")
    })

}
irLogin()


    const goToCadastro = document.querySelector(".ir-cadastro")
    console.log(goToCadastro)
   goToCadastro.addEventListener("click", () =>{
    let modalLogin = document.querySelector(".fundo-modal")
    modalLogin.classList.remove("show-modal")
    let modalRegistro = document.querySelector(".modal-cadastro-fundo")
    modalRegistro.classList.add("show-modal")
   })

