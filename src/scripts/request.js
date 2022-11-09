import { toast } from "./toast.js"

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
        const loading = document.querySelector(".carregando")
        loading.classList.add("carregando-on")
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
    try {
    const request = await fetch(`https://m2-api-adot-pet.herokuapp.com/pets/${id}`, {

        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("userToken")}`,
        },
        body: JSON.stringify(body)
    })
        if (request.ok) {

            const response = await request.json()

            toast("Sucesso!", "Os dados foram Atualizados.")

            setTimeout(() => {

                return window.location.reload()
    
            }, 4000)


        }
    }
    catch (err) {

        console.log(err)

    }
}

export async function deletarPet(id) {

    console.log(id)

    try {
        const request = await fetch(`https://m2-api-adot-pet.herokuapp.com/pets/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("userToken")}`,
            },
        })

        if (request.ok) {

            const response = await request.json()

            toast("Sucesso!", "O seu pet saiu da Adoção")

            setTimeout(() => {

                return window.location.reload()
    
            }, 4000)


        }
    }
    catch (err) {

        console.log(err)

    }
}