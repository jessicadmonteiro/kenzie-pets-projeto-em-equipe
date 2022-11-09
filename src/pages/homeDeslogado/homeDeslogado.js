import { modalLogin, modalCadastro} from "../../scripts/modal.js";
import { eventLogin } from "../../scripts/requisition.js";
import { eventCadastro }from "./../../scripts/request-lo-re-de.js"
modalLogin()
modalCadastro()
eventLogin()
eventCadastro()

async function adocao () {
    const tokenAcesso = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Njc2ODYzMDksImV4cCI6MTY2ODI5MTEwOSwic3ViIjoiYTI1YjAxZmEtZWFmNS00NDExLWFiZDktOTJkNTJjODQzZjg3In0.c9y8SCMeFiuIqms0U2a1IWruh0A6NPoqMqcHCo-4ubw"

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


async function renderizarAdocoes () {
    let animais = await adocao ()

    function listarAdocao (arr) {
        let tagUl = document.querySelector("ul")
        tagUl.innerHTML = ""

        arr.forEach(element => {
            let imagem  = element.pet.avatar_url
            let nome    = element.pet.name
            let especie = element.pet.species

            let tagLi  = document.createElement("li")
            let tagImg = document.createElement("img")
            let tagH3  = document.createElement("h3")
            let tagP   = document.createElement("p")

            tagImg.src = imagem
            tagImg.alt = especie
            tagH3.innerText = nome
            tagP.innerText  = especie

            tagLi.append(tagImg, tagH3, tagP)
            tagUl.appendChild(tagLi)

        });
    }
    listarAdocao (animais)
    
}
renderizarAdocoes ()

