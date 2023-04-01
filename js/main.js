const  form = document.getElementById('form');

form.addEventListener("submit", function(e){
    e.preventDefault();
})

$(document).ready(function () {
   $("#telefone").mask("(00) 0000-0000");
   $('#cpf').mask("000.000.000-00");
   $('#cep').mask("00000-000");
   
    
});