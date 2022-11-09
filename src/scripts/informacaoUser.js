import { eventEditarPet } from "./requisition.js";

export { usuario }

const usuario = async (token)=>{

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


  const fotoPerfil = document.querySelector(".img-perfil")
  fotoPerfil.src = userJson.avatar_url

  const infoUsuario = document.querySelector(".info-usuario")

  infoUsuario.innerHTML = `
        
        <p><span>Nome:</span> ${userJson.name}</p>
        <p><span>E-mail:</span> ${userJson.email}</p>
        `

  const mainUl = document.querySelector(".pets")

  if (userJson.my_pets.length > 0) {
    mainUl.innerHTML = ""

    console.log(userJson.my_pets)
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
      
      const p1 = document.createElement("p")
      const p2 = document.createElement("p")
      const p3 = document.createElement("p")
      const buttonAtulizar = document.createElement("button")
      buttonAtulizar.classList.add("atulizar-pet")

      img.src = element.avatar_url

      p1.innerHTML = `<span>Nome:</span> ${element.name}`
      p2.innerHTML = `<span>Espécie:</span> ${element.species}`
      p3.innerHTML = `<span>Adotável:</span> ${adotavel}`
      buttonAtulizar.innerText = "Atualizar"

      mainUl.appendChild(li)
      li.append(img, div)
      div.append(p1, p2, p3, buttonAtulizar)

      

      buttonAtulizar.addEventListener("click", (e) => {
  
        let modalMaiorAttPet = document.querySelector(".modal-atualizar-pet-fundo")
        eventEditarPet(element.id)
        console.log(element.id)
        modalMaiorAttPet.classList.toggle("show-modal")
        
      })

    });
  }


  fotoPerfil.addEventListener("click", () => {
    const editarPerfil = document.querySelector(".info-usuarios")
    editarPerfil.classList.toggle("info-usuarios-on")

  })

  loading.classList.remove("carregando-on")

}