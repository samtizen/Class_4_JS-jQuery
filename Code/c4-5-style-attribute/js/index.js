function changeColorJS() {
  var el = document.getElementById("ui-container-js");
  
  el.style.backgroundColor = "orange";
  el.textContent = el.style.backgroundColor;
}

function changeColorJS2() {
  var el = document.getElementById("ui-container-js-2");
  
  el.setAttribute("style", "background-color: orange");
  el.textContent = el.style.backgroundColor;
}

function changeColorJQ() {
  var $el = $("#ui-container-jq");
  $el.css("background-color", "orange");
  $el.text($el.css("background-color"));
}