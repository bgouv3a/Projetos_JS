const btnAumenta = document.getElementById("aumenta")
const btnDiminui = document.getElementById("diminui")
const contador = document.getElementById("contador")
let total = 0;

btnAumenta.addEventListener ("click", () => {
    total = total+1;
    contador.innerText = total
})

btnDiminui.addEventListener ("click", () => {
    if(total> 0){
    total = total-1;
    
    }
    contador.innerText = total
})