export async function getLogin(body) {

    console.log(body)

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