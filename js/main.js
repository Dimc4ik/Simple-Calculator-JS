var button = document.querySelectorAll(".button__number");
var display = document.querySelector(".display");
var i;
for (i=0; i < button.length; i++){
    button[i].onclick = function(){
        display.innerHTML+= this.value;
    }
    button[16].onclick = function() {
        display.innerHTML = eval( display.textContent);
    }
    
    button[14].onclick = function() {
        display.innerHTML = "";
    }
}
