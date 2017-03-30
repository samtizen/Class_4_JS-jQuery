//JavaScript
document.getElementById("ui-btn-js").addEventListener("click", changeTextJS);

function changeTextJS() {
  var el = document.getElementById("js-div")

  console.log(el.textContent);
  console.log(el.innerHTML);

  el.textContent = "<b>New Some Text</b>";
  //el.innerHTML = "<b>New Some Text</b>";
}

//jQuery
$("#ui-btn-jq").click(changeTextJQ);

function changeTextJQ() {
  $("#jq-div").text("<b>New Some Text</b>");
  //$("#jq-div").html("<b>New Some Text</b>");
}