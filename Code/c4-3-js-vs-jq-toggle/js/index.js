//JavaScript
document.getElementById("js-btn").addEventListener("click", 
                                                   displayChangeJS);

function displayChangeJS() {
  
  var elDOM = document.getElementById("js-content");
  var displayPr = elDOM.style.display;
  //var displayPr = window.getComputedStyle(elDOM, null).getPropertyValue('display');
  
  if (displayPr === "none") {
    elDOM.style.display = "block";
  }
  else {
    elDOM.style.display = "none";
  }
}

//jQuery
$("#jq-btn").click(function() {
  $("#jq-content").toggle("fast", "linear", null);
});