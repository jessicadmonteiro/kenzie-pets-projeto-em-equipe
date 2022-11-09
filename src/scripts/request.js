export async function getLogin(body) {


    try {
        const request = await fetch("https://m2-api-adot-pet.herokuapp.com/session/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(body)
        })

        if (request.ok) {

            const response = await request.json()

            localStorage.setItem("userToken", response.token)

            window.location.replace("./src/pages/homeLogado/index.html")

        }
    }
    catch (err) {

        console.log(err)

    }
}

export async function editarPerfilUsuario(body) {

    try {

        const request = await fetch("https://m2-api-adot-pet.herokuapp.com/users/profile", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("userToken")}`,
            },
            body: JSON.stringify(body)
        })

        if (request.ok) {

            const response = await request.json()

            return window.location.reload()

        } 
    }
    catch (err) {

        console.log(err)

    }
}

export async function cadastroPet(body) {

    console.log(body)

    try {

        const request = await fetch("https://m2-api-adot-pet.herokuapp.com/pets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("userToken")}`,
            },
            body: JSON.stringify(body)
        })
        
        if (request.ok) {

            const response = await request.json()

            return window.location.reload()

        } 
    }
    catch (err) {

        console.log(err)

    }
}

export async function deletarUsuario() {

    await fetch(`https://m2-api-adot-pet.herokuapp.com/users/profile`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("userToken")}`,
        },
    })
        .then(res => res.json())
        .then(res => console.log(res))
}

export async function editarPet(body, id) {

    console.log(body, id)

    await fetch(`https://m2-api-adot-pet.herokuapp.com/pets/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("userToken")}`,
        },
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .then(res => console.log(res))

}