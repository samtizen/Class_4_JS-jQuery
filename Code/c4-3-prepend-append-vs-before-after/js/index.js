//jQuery Option 1
function addPrependJQ() {
  var $el = $("<div>Some Text After</div>");
  $("#ui-container-jq1").prepend($el);
}

function addAppendJQ() {
  var $el = $("<div>Some Text Before</div>");
  $("#ui-container-jq1").append($el);
}

//jQuery Option 2
function addBeforeJQ() {
  var $el = $("#ui-container-jq2");
  $el.before("<div>Some Text Before</div>");
}
function addAfterJQ() {
  var $el = $("#ui-container-jq2");
  $el.after("<div>Some Text After</div>");
}