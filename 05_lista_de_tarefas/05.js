const caixaTexto = document.getElementById('caixaTexto');
const btnAdd = document.getElementById('btnAdd')
const lista = document.getElementById(`lista`)

btnAdd.addEventListener('click',()=>{
    let caixaTexto = document.getElementById('caixaTexto');
     caixaTexto.style.border = ``
    if(caixaTexto.value === ""){
        caixaTexto.style.border = `2px solid red`
        alert("Digite a sua tarefa!");
        
    }else{
    let li = document.createElement("li");
    li.innerHTML = `<li>${caixaTexto.value}<button id="btnRemove">OK</button></li>`;
   

    lista.appendChild(li)
    
    }
    caixaTexto.value = ""
    let btnRemove = document.getElementById(`btnRemove`)
});
btnRemove.addEventListener(`click`,()=>{
    li.remove()
})