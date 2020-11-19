botaoAdicionar = document.querySelector("#buscar-pacientes");
botaoAdicionar.addEventListener("click", function () {
    console.log("Buscando Pacientes");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function () {

        if (xhr.status == 200) {
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            console.log(typeof pacientes);
            console.log(pacientes);

            pacientes.forEach(paciente => {
                adicionaPacienteNaTabela(paciente);
            });
        }
        else {
            erroAjax = document.querySelector("#erro-ajax");
            erroAjax.classList.remove("invisivel");
        }
    })

    xhr.send();
})