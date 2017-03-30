//JavaScript
var elDivJS = document.getElementById("ui-container-js");

elDivJS.textContent = elDivJS.getAttribute("my-attr");

function changeAttrJS() {
  if (elDivJS.hasAttribute("my-attr")) {
    elDivJS.setAttribute("my-attr", "New Attribute Value");
    elDivJS.textContent = elDivJS.getAttribute("my-attr");
  }

  if (!elDivJS.hasAttribute("my-attr-2")) {
    elDivJS.setAttribute("my-attr-2", "New Attribute Value 2");
    elDivJS.textContent += "\n" + elDivJS.getAttribute("my-attr-2");
  } 
}

//jQuery
var elDivJQ = $("#ui-container-jq");

elDivJQ.text(elDivJQ.attr("my-attr"));

function changeAttrJQ() {
  
  if (elDivJQ.is("[my-attr]")) {
    elDivJQ.attr("my-attr", "New Attribute Value");
    elDivJQ.text($(elDivJQ).attr("my-attr"));
  }
  if (!elDivJQ.is("[my-attr-2]")) {
    elDivJQ.attr("my-attr-2", "New Attribute Value 2");
    elDivJQ.text(function(i, curVal) {
      return curVal + "\n" + elDivJQ.attr("my-attr-2");
    });
  }
}