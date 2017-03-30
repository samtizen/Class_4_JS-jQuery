//jQuery
var $btnwrap = $("#btn-wrap")
var $btnunwrap = $("#btn-unwrap")

$btnwrap.click(wrapJQ);
$btnunwrap.click(unwrapJQ);
$btnwrap.attr("disabled", false);
$btnunwrap.attr("disabled", true);

function wrapJQ() {
  $(".ui-container-jq").wrap("<div class='wrap-class'></div>");
  $btnwrap.attr("disabled", true);
  $btnunwrap.attr("disabled", false);
}
function unwrapJQ() {
  $(".ui-container-jq").unwrap();
  $btnwrap.attr("disabled", false);
  $btnunwrap.attr("disabled", true);
}

//WrapAll
var $btnwrapall = $("#btn-wrapall")
var $btnunwrapall = $("#btn-unwrapall")

$btnwrapall.click(wrapAllJQ);
$btnunwrapall.click(unwrapAllJQ);
$btnwrapall.attr("disabled", false);
$btnunwrapall.attr("disabled", true);

function wrapAllJQ() {
  $(".ui-container-jq-2").wrapAll("<div class='wrap-class'></div>");
  $btnwrapall.attr("disabled", true);
  $btnunwrapall.attr("disabled", false);
}
function unwrapAllJQ() {
  $(".ui-container-jq-2").unwrap();
  $btnwrapall.attr("disabled", false);
  $btnunwrapall.attr("disabled", true);
}

//WrapInner
var $btnwrapinner = $("#btn-wrapinner")
var $btnunwrapinner = $("#btn-unwrapinner")

$btnwrapinner.click(wrapInnerJQ);
$btnunwrapinner.click(unwrapInnerJQ);
$btnwrapinner.attr("disabled", false);
$btnunwrapinner.attr("disabled", true);

function wrapInnerJQ() {
  $(".ui-container-jq-3").wrapInner("<div class='wrap-class'></div>");
  $btnwrapinner.attr("disabled", true);
  $btnunwrapinner.attr("disabled", false);
}
function unwrapInnerJQ() {
  $(".ui-container-jq-3").children().unwrap();;
  $btnwrapinner.attr("disabled", false);
  $btnunwrapinner.attr("disabled", true);
}