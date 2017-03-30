function replaceElWith() {
  $("div > .ui-container-jq:nth-child(2)").replaceWith("<b>New Element</b>");
}
function replaceElAll() {
  $("<b>New Element</b>").replaceAll("div > .ui-container-jq-2:nth-child(2)");
}