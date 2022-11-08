import { getLogin } from "./request.js"


export function eventLogin () {

    const local = document.querySelector(".form-login")

    console.log(local)

    local.addEventListener("submit", async (event) => {

        event.preventDefault()

        console.log(event)

        const body = {

            email:event.target.children[0].value,
            password:event.target.children[1].value,
  
        }

        await getLogin(body)

    })
}