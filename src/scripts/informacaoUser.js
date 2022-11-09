import { deletarPet } from "./request.js";
import { eventEditarPet } from "./requisition.js";

export { usuario }

const usuario = async () => {

  const loading = document.querySelector(".carregando")
  loading.classList.add("carregando-on")

  const user = await fetch("https://m2-api-adot-pet.herokuapp.com/users/profile", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    }
  });
  const userJson = await user.json();
  console.log(userJson)

  const fotoPerfil = document.querySelector(".img-perfil")
  fotoPerfil.src = userJson.avatar_url
  fotoPerfil.id = "img-perfil"

  const infoUsuario = document.querySelector(".info-usuario")

  infoUsuario.innerHTML = `
        
        <p id="name-perfil"><span>Nome:</span> ${userJson.name}</p>
        <p><span>E-mail:</span> ${userJson.email}</p>
        `

  const mainUl = document.querySelector(".pets")

  if (userJson.my_pets.length > 0) {
    mainUl.innerHTML = ""
    userJson.my_pets.forEach(element => {
      let adotavel = ""

      if (element.available_for_adoption == true) {
        adotavel = "Sim"
      }
      if (element.available_for_adoption == false) {
        adotavel = "Não"
      }

      const li = document.createElement("li")
      li.classList.add("pet")

      const img = document.createElement("img")
      const div = document.createElement("div")
      div.classList.add("info-pets")

      const divBotoes = document.createElement("div")
      divBotoes.classList.add("div-botoes-att-delete")

      const p1 = document.createElement("p")
      const p2 = document.createElement("p")
      const p3 = document.createElement("p")
      const buttonAtulizar = document.createElement("button")
      const buttonDeletar = document.createElement("button")
      buttonAtulizar.classList.add("atualizar-pet")
      buttonDeletar.classList.add("botao-deletar-perfil")

      img.src = element.avatar_url
      p1.innerHTML = `<span>Nome:</span> ${element.name}`
      p2.innerHTML = `<span>Espécie:</span> ${element.species}`
      p3.innerHTML = `<span>Adotável:</span> ${adotavel}`
      buttonAtulizar.innerText = "Atualizar"
      buttonDeletar.innerText = "Deletar"

      mainUl.appendChild(li)
      li.append(img,div)
      div.append(p1,p2,p3, divBotoes)
      divBotoes.append(buttonAtulizar, buttonDeletar)
      console.log(element)

      buttonDeletar.addEventListener("click", () => {

        deletarPet(element.id)
      })


      buttonAtulizar.addEventListener("click", (e) => {
        

        let modalAttPet = document.querySelector(".modal-atualizar-pet-fundo-att")

        modalAttPet.classList.add("modal-abrir")
  
        eventEditarPet(element.id)

        const inputN = document.querySelector("#pet-nome")

        inputN.value = `${element.name}`

        const inputR = document.querySelector("#pet-raca")

        inputR.value = `${element.bread}`

        const inputE = document.querySelector("#pet-esp")

        inputE.value = `${element.species}`

        const inputU = document.querySelector("#pet-url")

        inputU.value = `${element.avatar_url}`

      })

    });
  }

  fotoPerfil.addEventListener("click", () => {
    const editarPerfil = document.querySelector(".info-usuarios")
    editarPerfil.classList.toggle("info-usuarios-on")

  })

  loading.classList.remove("carregando-on")

}