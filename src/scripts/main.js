
var button = document.createElement("button");
button.innerHTML = "Click me!";
document.body.appendChild(button);
button.addEventListener("click", function() {
  
  alert("The button was clicked!");
});