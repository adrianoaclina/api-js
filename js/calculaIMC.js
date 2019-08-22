
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];
    var infoPeso = paciente.querySelector(".info-peso");
    var peso = infoPeso.textContent;

    var infoAltura = paciente.querySelector(".info-altura");
    var altura = infoAltura.textContent;

    var infoImc = paciente.querySelector(".info-imc");

    var alturaEhValida = validaAltura(altura);
    var pesoEhValido = validaPeso(peso);

    if (!pesoEhValido) {
        console.log("Peso inválido");
        pesoEhValido = false;
        infoImc.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invalido");
    }
    if (!alturaEhValida) {
        console.log("Altura Inválida");
        alturaEhValida = false;
        infoImc.textContent = "Altura Inválido";
        paciente.classList.add("paciente-invalido");
    }
    if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso, altura);
        infoImc.textContent = imc;
    }
}

function validaPeso(peso) {
    if(peso >= 0 && peso < 1000){
        return true;
    } else{
        return false;
    }
}
function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}
function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}
