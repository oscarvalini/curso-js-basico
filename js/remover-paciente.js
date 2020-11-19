var tabela = document.querySelector("table");
console.log(tabela);
tabela.addEventListener("dblclick", function(event) {

    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);
    
})