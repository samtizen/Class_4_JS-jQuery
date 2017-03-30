//JavaScript
document.getElementById("js-text").addEventListener("input", changeTextJS);
document.getElementById("js-reset").addEventListener("click", resetTextJS);
document.getElementById("js-hello").addEventListener("click", helloTextJS);

var pEl_js = document.getElementById("js-p");

function changeTextJS() {
  pEl_js.textContent = this.value;
}
function resetTextJS() {
  pEl_js.textContent = "";
  document.getElementById("js-text").value = "";
}
function helloTextJS() {
  pEl_js.textContent = "Hello";
  document.getElementById("js-text").value = "Hello";
}

//jQuery
$("#jq-text").on("input", changeTextJQ);
$("#jq-reset").click(resetTextJQ);
$("#jq-hello").click(helloTextJQ);

var $pEl_jq = $("#jq-p");

function changeTextJQ() {
  $pEl_jq.text($(this).val());
}
function resetTextJQ() {
  $pEl_jq.text("");
  $("#jq-text").val("");
}
function helloTextJQ() {
  $pEl_jq.text("Hello");
  $("#jq-text").val("Hello");
}