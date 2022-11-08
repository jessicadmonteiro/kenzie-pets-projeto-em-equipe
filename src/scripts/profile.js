import { atualizarPerfil, petCadastro, petAtualizar, deletarConta } from "./modalProfile.js";
import { cadastrarPet, eventEditar } from "./requisition.js";

atualizarPerfil()

petCadastro()

petAtualizar()

deletarConta()

eventEditar()

cadastrarPet()


const token = localStorage.getItem("userToken")

async function usuario (){

    const user = await fetch("https://m2-api-adot-pet.herokuapp.com/users/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          }
        });
        const userJson = await user.json();
        console.log(userJson)

        const fotoPerfil = document.querySelector(".img-perfil")
        fotoPerfil.src = userJson.avatar_url

        const infoUsuario = document.querySelector(".info-usuario")

        infoUsuario.innerHTML = `
        
        <p><span>Nome:</span> ${userJson.name}</p>
        <p><span>E-mail:</span> ${userJson.email}</p>
        `

}
usuario ()



const fotoPerfil = document.querySelector(".caixa-img-perfil")

fotoPerfil.addEventListener("click",()=>{
    const editarPerfil = document.querySelector(".info-usuarios")
    editarPerfil.classList.toggle("info-usuarios-on")

})



