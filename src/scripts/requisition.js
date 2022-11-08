import { getLogin } from "./request.js"


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