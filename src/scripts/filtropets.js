export {filtropets}

const tokenAcesso = localStorage.getItem("userToken")

const filtropets =async ()=>{
    
    try {
        const loading = document.querySelector(".carregando")
        loading.classList.add("carregando-on")
        let request = await fetch ("https://m2-api-adot-pet.herokuapp.com/pets", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${tokenAcesso}`
            }
        })
        const response = await request.json()
        
            
            const adotaveis = response.filter(element=> element.available_for_adoption === true )

            loading.classList.remove("carregando-on")
            return adotaveis
    }catch (err) {
        console.log(err)
        loading.classList.add("carregando-on")
    }

}

const funcao = await filtropets()

console.log(funcao)
