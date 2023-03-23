
const form = $("#form-tarefa");
var item = [];

function limpaInput(){
   let input = document.querySelector("input");   
    input.value = "";
}



$(document).ready(function(){
    $(form).on("submit", function (e) {
        e.preventDefault();
        const inputTarefa = document.querySelector("input").value;

        var lista = $('<li></li>').text(inputTarefa);            
        $("#lista-tarefa").append(lista);
        item.push(lista);
        
        
        for (let i = 0; i < item.length; i++){

            $(item[i]).click(function(){
            $(item[i]).addClass("important");
            });        
            
        }            

       limpaInput();  
               
    });  
  });




