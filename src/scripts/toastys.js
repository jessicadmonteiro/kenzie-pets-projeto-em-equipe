

export function toastyCadastro(){
    const body = document.querySelector("body")
    let divToasty = document.createElement("div")
    divToasty.classList.add("toastCadastro")

    let divImg = document.createElement("div")
    divImg.classList.add("area-img")

    let img1 = document.createElement("img")
    img1.src = "./src/assets/img-cadastro-feito.jpg"

    let img2 = document.createElement("img")
    img2.src = "./src/assets/img-cadastro-feito2.jpg"

    let divBotao = document.createElement("div")
    divBotao.classList.add("area-ir-login")

    let botao = document.createElement("button")
    botao.classList.add("botao-toast-login")
    botao.innerText = "Cadastro feito com sucesso! Clique aqui para ir para área de Login"
    botao.addEventListener("click", (e) =>{
        let modalLogin = document.querySelector(".fundo-modal")
        modalLogin.classList.toggle("show-modal")
    })
    
    let botaoFechar = document.createElement("button")
    botaoFechar.innerText = "X"
    botaoFechar.classList.add("toastyFechar")
    

    divToasty.append(divImg, divBotao)
    divImg.append(img1, img2)
    divBotao.appendChild(botao)
    body.appendChild(divToasty)
}


