import { atualizarPerfil, petCadastro, petAtualizar, deletarConta } from "./modalProfile.js";

atualizarPerfil()

petCadastro()

petAtualizar()

deletarConta()


const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Njc5MjcxNTUsImV4cCI6MTY2ODUzMTk1NSwic3ViIjoiYzQ2YjNhYTUtNDhiMC00NTU0LTkxYjEtODVkMzllNmY4MDY5In0.ksUiQL48hfR1AiIvgUY0MVWvB35Uz8ayJh0qQ65UjcI"

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



