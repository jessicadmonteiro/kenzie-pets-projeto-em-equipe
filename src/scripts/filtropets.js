export {filtropets}

const tokenAcesso = localStorage.getItem("userToken")

const filtropets =async ()=>{
    
    try {
        let request = await fetch ("https://m2-api-adot-pet.herokuapp.com/pets", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${tokenAcesso}`
            }
        })
        const response = await request.json()
        
            
            const adotaveis = response.filter(element=> element.available_for_adoption === true )

            return adotaveis
    }catch (err) {
        console.log(err)
    }

}

const funcao = await filtropets()

console.log(funcao)
