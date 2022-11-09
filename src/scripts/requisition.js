import { getLogin, editarPerfilUsuario, cadastroPet, editarPet } from "./request.js"


export function eventLogin () {

    const local = document.querySelector(".form-login")

    local.addEventListener("submit", async (event) => {

        event.preventDefault()

        console.log(event)

        const body = {

            email:event.target.children[1].value,
            password:event.target.children[2].value,
  
        }

        await getLogin(body)

    })
}

export async function eventEditar () {

    const local = document.querySelector(".form-cadastro-att")

    local.addEventListener("submit", async (event) => {

        event.preventDefault()

        const body = {

            avatar_url:event.target[1].value,
            name:event.target[0].value
 
  
        }
        await editarPerfilUsuario(body)

    })
}

export async function cadastrarPet() {

    const local = document.querySelector("#form-cadastro-pet")

    local.addEventListener("submit", async (event) => {

        event.preventDefault()

        const body = {

            name:event.target[0].value,
            bread:event.target[1].value,
            species:event.target[2].value,
            avatar_url:event.target[3].value
 
  
        }

        await cadastroPet(body)

    })

}

export async function eventEditarPet(id) {

    const local = document.querySelector("#form-editar-pet")

    local.addEventListener("submit", async (event) => {

        event.preventDefault()
        
        const body = {

            name:event.target[0].value,
            bread:event.target[1].value,
            species:event.target[2].value,
            avatar_url:event.target[3].value
 
  
        }

        await editarPet(body, id)

    })

}