const btnLiga = document.getElementById("ligar")
const btnDesliga = document.getElementById("desligar")
const lampada = document.getElementById("lampada")

btnLiga.addEventListener("click", ()=>{
    lampada.classList.add("acesa")
    lampada.classList.remove("apagada")
})
btnDesliga.addEventListener("click", ()=>{

    lampada.classList.add("apagada")
    lampada.classList.remove("acesa") 
    
})