
const hamburguer = document.getElementById("hamburguer")

hamburguer.addEventListener("click",()=>{   
    const menu = document.querySelector(".buttoes-header")

    menu.classList.toggle("buttoes-header-on")
    if(hamburguer.innerText === "menu"){
        return hamburguer.innerText = "x"
    }
    if(hamburguer.innerText === "x"){
        hamburguer.innerText = "menu"
    }
})
