//JavaScript Option 1
function addBeforeJS1() {
  var myHTML = "<div>Before</div>";
  
  var divEl = document.createElement("div");
  var textDivEl = document.createTextNode("Some Text Before");
  
  divEl.appendChild(textDivEl);
  
  var el = document.getElementById("ui-container");
  el.insertBefore(divEl, el.firstChild); 
}
function addAfterJS1() {
 
  var divEl = document.createElement("div");
  var textDivEl = document.createTextNode("Some Text After");
  
  divEl.appendChild(textDivEl);
  
  document.getElementById("ui-container").appendChild(divEl);
}

//JavaScript Option 2
function addBeforeJS2() {
  var divEl = document.createElement("div");
  divEl.textContent = "Some Text Before";
  
  var el = document.getElementById("ui-container-js");
  el.insertBefore(divEl, el.firstChild); 
}
function addAfterJS2() {
  var divEl = document.createElement("div");
  divEl.textContent = "Some Text After";
  
  document.getElementById("ui-container-js").appendChild(divEl);
}

//jQuery Option 1
function addPrependJQ1() {
  var $el = $("<div>Some Text After</div>");
  $("#ui-container-jq1").prepend($el);
}

function addAppendJQ1() {
  var $el = $("<div>Some Text Before</div>");
  $("#ui-container-jq1").append($el);
}

//jQuery Option 2
function addBeforeJQ2() {
  var $el = $("#ui-container-jq2").children().first();
  $el.before("<div>Some Text Before</div>");
}
function addAfterJQ2() {
  var $el = $("#ui-container-jq2").children().last();
  $el.after("<div>Some Text After</div>");
}

//jQuery Option 3
function addBeforeJQ3() {
  var $el = $("#ui-container-jq3").children().first();
  $("<div>Some Text Before</div>").insertBefore($el); 
}
function addAfterJQ3() {
  var $el = $("#ui-container-jq3").children().last();
  $("<div>Some Text After</div>").insertAfter($el); 
}