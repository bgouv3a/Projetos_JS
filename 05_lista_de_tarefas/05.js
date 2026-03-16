const caixaTexto = document.getElementById('caixaTexto');
const btnAdd = document.getElementById('btnAdd')
const lista = document.getElementById(`lista`)

btnAdd.addEventListener('click',()=>{
    let caixaTexto = document.getElementById('caixaTexto');
     caixaTexto.style.border = ``
    if(caixaTexto.value.trim() === ""){
        caixaTexto.style.border = `2px solid red`
        alert("Digite uma tarefa!");
        return;
        
    }
    let li = document.createElement("li");
    li.textContent = caixaTexto.value;

    let btnRemove = document.createElement("button");
    btnRemove.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-backspace-fill" viewBox="0 0 16 16">
  <path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8z"/>
</svg>`;
   

    li.appendChild(btnRemove)


    btnRemove.addEventListener(`click`,()=>{
        li.remove()
    })
    caixaTexto.value = ""
    lista.appendChild(li)
});