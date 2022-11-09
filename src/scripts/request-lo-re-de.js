
export async function cadastroRequisition(body){
    try {
        const request = await fetch("https://m2-api-adot-pet.herokuapp.com/users", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(body)
        })

        if (request.ok) {

            const response = await request.json()

            // window.location.replace("./src/pages/homeLogado/index.html")
            
            return response
        }
    }
    catch (err) {

        console.log(err)

    }
}
export function eventCadastro () {

    const local = document.querySelector(".form-cadastro")

    local.addEventListener("submit", async (event) => {
        console.log(event)
        event.preventDefault()

        

        const body = {

            name:event.target.children[1].value,
            email:event.target.children[2].value,
            password:event.target.children[3].value,
            avatar_url:event.target.children[4].value,
  
        }

        await cadastroRequisition(body)
        location.reload()
    })
}
