//JavaScript Element
document.getElementById("js-element").addEventListener("click", changeJSElement);

function changeJSElement() {
  this.style.backgroundColor = "green"; 
}

//jQuery Element
$("#jq-element").click(changeJQElement);

function changeJQElement() {
  console.log("sfs");
  $(this).css("background-color", "blue");
}

// JavaScript Group
var elms_js = document.getElementsByClassName("js-group");

for (var i = 0; i < elms_js.length; i++) {
  elms_js[i].addEventListener("click", changeJSGroup);
}
function changeJSGroup() {
  for (var i = 0; i < elms_js.length; i++) {
    elms_js[i].style.backgroundColor = "green";  
  }
}

// jQuery Group
$(".jq-group").click(changeJQGroup);

function changeJQGroup() {
   $(".jq-group").each(function() {
    $(this).css("background-color", "blue");
 });
}