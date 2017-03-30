//JavaScript
document.getElementById("js-btn").addEventListener("click", changeElBelowJS);

function changeElBelowJS() {
  document.getElementById("js-element").innerHTML = "<b>Element UL was changed</b>"
}

//jQuery
$("#jq-btn").click(changeElBelowJQ);

function changeElBelowJQ() {
  $("#jq-element").html("<b>Element UL was changed</b>");
}