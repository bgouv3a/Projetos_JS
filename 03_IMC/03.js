
const btnCalcular = document.getElementById("calcular");
const res = document.getElementById("resultado");
let imc = document.getElementById("imc");



btnCalcular.addEventListener("click",()=>{
    const peso = Number(document.getElementById("escrevaPeso").value);
    const altura = Number(document.getElementById("escrevaAltura").value);
    let res = peso / (altura * altura);

    document.getElementById("resultado").innerHTML = `Seu IMC é: ${res.toFixed}`;
    if (res<18.5) {
        imc.innerHTML = "Abaixo do peso";
        imc.classList.add('baixo');
        
    } else if (res <25){
        imc.innerHTML = "Peso Normal";
        imc.classList.add('normal');
    }
    else if (res <30){
        imc.innerHTML = "Soprepeso";
        imc.classList.add('sobrepeso');
    }
    else if (res <35){
        imc.innerHTML = "Obesidade grau 1";
        imc.classList.add('obeso1');
        
    }
    else if (res <40){
        imc.innerHTML = "Obesidade grau 2";
        imc.classList.add('obeso2');   
    }
    else if (res >=40){
        imc.innerHTML = "Obesidade grau 3";
        imc.classList.add('obeso3');
        
    }



})