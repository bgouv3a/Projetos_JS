
const btnCalcular = document.getElementById("calcular");
const res = document.getElementById("resultado");


btnCalcular.addEventListener("click",()=>{
    const peso = Number(document.getElementById("escrevaPeso").value);
    const altura = Number(document.getElementById("escrevaAltura").value);
    let imc = peso / (altura * altura);


    if (imc<18.5) {
        res.innerHTML = (`A sua classificação IMC é:`);
        
    } else if (imc <25){
        res.innerText = (`A sua classificação IMC é: Peso Normal`);
    }
    else if (imc <30){
       res.innerText = (`A sua classificação IMC é: Sobrepeso`);
    }
    else if (imc <35){
        res.innerText = (`A sua classificação IMC é: Obesidade 1`);
        
    }
    else if (imc <40){
        res.innerText = (`A sua classificação IMC é: Obesidade 2`);
    }
    else if (imc >=40){
        res.innerText = (`A sua classificação IMC é: Obesidade Mórbida`);
        
    }



})