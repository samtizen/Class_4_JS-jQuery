//JavaScipt
//Create div element
var divEl = document.createElement("div");
var textDivEl = document.createTextNode("JavaScript");

divEl.appendChild(textDivEl);

//Create button element
var btnEl = document.createElement("button");

var btnAttrId = document.createAttribute("id");
btnAttrId.value = "js-btn-rm"; 

var textBtnEl = document.createTextNode("Remove");

btnEl.setAttributeNode(btnAttrId); 
btnEl.appendChild(textBtnEl);

//Attach to <body>
document.body.appendChild(divEl);
document.body.appendChild(btnEl);

btnEl.addEventListener("click", removeDOMElementsJS);

function removeDOMElementsJS() {
  document.body.removeChild(divEl);
  document.body.removeChild(btnEl);
}

//jQuery
var div_jq = jQuery('<div/>', {
  text: "jQuery",
}).appendTo("body");

var btn_jq = jQuery('<button/>', {
  text: "Remove",
  "id": "jq-btn-rm",
  click: removeDOMElementsJQ
}).appendTo("body");

function removeDOMElementsJQ() {
  div_jq.remove();
  btn_jq.remove();
}