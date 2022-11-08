export function autorizacao () {

    const token = localStorage.getItem("userToken")

    if(token == null){
        window.location.replace("../../../index.html")
    }
}