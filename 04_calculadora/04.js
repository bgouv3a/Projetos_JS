function colocarNoDisplay(data){
    document.querySelector(`#display`).value += data
}
function limpar (){
     document.querySelector(`#display`).value = ``
}
function deletar (){
    const display = document.querySelector(`#display`)
    display.value = display.value.slice(0, -1)
}
function calcular (){
    const display = document.querySelector(`#display`)
    try {
        display.value = eval(display.value)
    }catch{
        display.value = `Error`
    }
}

//teclado

const display = document.getElementById("display");

document.addEventListener("keydown", function(event) {

    const tecla = event.key;

    if (!isNaN(tecla)) {
        display.value += tecla;
    }

    if (tecla === "+" || tecla === "-" || tecla === "*" || tecla === "/") {
        display.value += tecla;
    }

    if (tecla === "Enter") {
        display.value = eval(display.value);
    }

    if (tecla === "Backspace") {
        display.value = display.value.slice(0, -1);
    }

});