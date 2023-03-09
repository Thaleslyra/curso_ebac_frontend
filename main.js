const form = document.getElementById("formulario");

function validaCampo() {
    const campoA = document.getElementById('campo-A');
    const campoB = document.getElementById('campo-B');
    const mensagemError = "O valor do campo B, deve ser maior que o campo A";
    const mensagemSucesso = "O valor do campo B é maior que o campo A. Parabéns..";

    if (campoA.value < campoB.value){
        const containerMensagemSucesso = document.querySelector(".sucsses-message");
        containerMensagemSucesso.innerHTML = mensagemSucesso
    } else {
        const containerMensagemError = document.querySelector(".error-message");
        containerMensagemError.innerHTML = mensagemError
        campoB.style.border = "1px solid red";
        document.querySelector(".error-message").style.display = "block";
        
        campoA.value = ' ';
        campoB.value = ' ';       
       
    }   
 

}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    validaCampo(); 
   
   
});

document.getElementById("campo-A").addEventListener("change", myFunction);
function myFunction() { 
  document.querySelector(".error-message").style.display = "none";
  
 
}

document.getElementById("campo-B").addEventListener("change", resetaBorda);
function resetaBorda() {
    document.getElementById("campo-B").style.border = "1px solid";
}




