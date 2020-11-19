titulo = document.querySelector(".titulo");
titulo.textContent = "Daleste Of Us";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

   // var tdPeso = paciente.querySelector(".info-peso");
    var peso = paciente.querySelector(".info-peso").textContent;

    //var tdAltura = paciente.querySelector(".info-altura");
    var altura = paciente.querySelector(".info-altura").textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = pesoValido(peso);
    var alturaEhValida = alturaValida(altura);

    if (!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

  if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function pesoValido(peso) {
    
    if(peso <= 0 || peso >= 1000) {
        return false;
    }

    return true;
}

function alturaValida(altura) {
    
    if(altura >= 3.0 || altura <= 0) return false;

    return true
}

function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}