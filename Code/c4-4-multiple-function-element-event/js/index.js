//JavaScript Element
document.getElementById("js-element").addEventListener("click", changeColorJS);

function changeColorJS() {
  this.style.backgroundColor = "green"; 
}

document.getElementById("js-element").addEventListener("click", changeTextJS);

function changeTextJS() {
  this.innerHTML = "green"; 
}

// jQuery Element
$("#jq-element").click(changeColorJQ);

function changeColorJQ() {
  $(this).css("background-color", "blue"); 
}

$("#jq-element").click(changeTextJQ);

function changeTextJQ() {
  $(this).text("blue"); 
}