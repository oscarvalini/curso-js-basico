var campoFiltro = document.querySelector("#filtrar-tabela");
campoFiltro.addEventListener("input", function () {
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");
    pacientes.forEach(function (paciente) {
        var nome = paciente.querySelector(".info-nome").textContent;
        if(!new RegExp(campoFiltro.value, "i").test(nome)) paciente.classList.add("invisivel");
        else paciente.classList.remove("invisivel");
    });
})