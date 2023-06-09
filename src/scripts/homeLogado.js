import {filtropets} from "./filtropets.js"

async function adocao () {
    const tokenAcesso = localStorage.getItem("userToken")

    try {
        let request = await fetch ("https://m2-api-adot-pet.herokuapp.com/adoptions", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${tokenAcesso}`
            }
        })
        const response = await request.json()
        
        return response
    }catch (err) {
        console.log(err)
    }
}

async function meAdote () {
    let token = localStorage.getItem("userToken")

    try {
        let request = await fetch ("https://m2-api-adot-pet.herokuapp.com/adoptions", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        const response = await request.json()
        console.log(response)
        return response
    }catch (err) {
        console.log(err)
    }
    
}
meAdote () 

async function renderizarAdocoesHomeLogado () {
    let animais = await filtropets ()

    function listarAdocao (arr) {
        let tagUl = document.querySelector("ul")
        tagUl.innerHTML = ""

        arr.forEach(element => {
            let imagem  = element.avatar_url
            let nome    = element.name
            let especie = element.species
            let id      = element.id

            let tagLi     = document.createElement("li")
            let tagImg    = document.createElement("img")
            let tagH3     = document.createElement("h3")
            let tagP      = document.createElement("p")
            let tagButton = document.createElement("button")

            tagButton.classList.add("botao_me_adota")

            tagImg.src          = imagem
            tagImg.alt          = especie
            tagH3.innerText     = nome
            tagP.innerText      = especie
            tagButton.innerText = "Me adota ?"
            tagButton.id        = id

            tagLi.append(tagImg, tagH3, tagP, tagButton)
            tagUl.appendChild(tagLi)

            tagButton.addEventListener("click",async ()=>{ 

                try {
                    const idPet = {
                        "pet_id": element.id
                    } 
    
                    let adotarPet = await fetch ("https://m2-api-adot-pet.herokuapp.com/adoptions", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${localStorage.getItem("userToken")}`
                        },
                        body: JSON.stringify(idPet)
                    })
                    const adotarPetJson = await adotarPet.json()
    
                    location.reload()
                }catch (err) {
                    console.log(err)
                }
  
            })

        });
    }
    listarAdocao (animais)

    let containerSeletor = document.querySelector("#selecionar_especie")
    containerSeletor.addEventListener("click", (event) => {
        let especie = event.target.value
        
        if(especie === "Selecionar espécie"){
            listarAdocao (animais)
        }
        else{
            let novoArray = animais.filter((element) => element.species === especie)
            console.log(novoArray)
            listarAdocao (novoArray)
        }

    })
    
}
renderizarAdocoesHomeLogado ()

function logoutPaginaHomeLogado(){
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
logoutPaginaHomeLogado()