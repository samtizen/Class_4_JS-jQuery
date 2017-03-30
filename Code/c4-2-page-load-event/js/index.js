//JavaScript
document.addEventListener("load", init2); //Everything is loaded
document.addEventListener("DOMContentLoaded", init1); //DOM is loaded

function init1() {
  this.body.innerHTML = "<div>Init1</div>";
}
function init2() {
  this.body.innerHTML = "<div>Init2</div>";
}

//jQuery
/*$().ready(init3);

function init3() {
  $("body").html("<div>Init3</div>");
}*/