var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    var tdPeso  = pacientes[i].querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura  = pacientes[i].querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var tdImc = pacientes[i].querySelector(".info-imc");
    var pesoValido = true;
    var alturaValida = true;
    
    if (peso <= 0 || peso >= 600){
        console.log("Peso inválido!");
        pesoValido = false;
        tdPeso.textContent = "Peso inválido";
        tdPeso.classList.add("dado-invalido");
        pacientes[i].classList.add("dados-invalidos");
    }
    
    if (altura <= 0 || altura >= 3.00){
        console.log("Altura inválida!");
        alturaValida = false;
        tdAltura.textContent = "Altura inválida!";
        tdAltura.classList.add("dado-invalido");
        pacientes[i].classList.add("dados-invalidos");
    }
    
    if (alturaValida && pesoValido){
        var imc = peso / (altura * altura);
    
        tdImc.textContent = imc.toFixed(2);
        console.log(imc);
    } else {
        console.log(pesoValido);
        console.log(alturaValida);
    }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function() {
    console.log("teste");
});