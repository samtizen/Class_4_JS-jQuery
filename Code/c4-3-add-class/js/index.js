//JavaScript
function addClassJS() {
  document.querySelector(".ui-container-js:nth-child(2)").className += " color-bold";
  //document.querySelector(".ui-container-jq:nth-child(2)").classList.add("color-bold"); //.remove
}

//jQuery
function addClassJQ() {
  $(".ui-container-jq:nth-child(2)").addClass("color-bold"); //.remove
}