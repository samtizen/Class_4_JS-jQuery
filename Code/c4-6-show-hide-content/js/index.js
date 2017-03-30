function visibilityChange() {
  
  var elDOM = document.getElementById("divshow1");
  
  console.log(elDOM.style.visibility);
  
  if (elDOM.style.visibility === "hidden") {
    elDOM.style.visibility = "visible";
  }
  else {
    elDOM.style.visibility = "hidden";
  }

}

function displayChange() {
  
  var elDOM = document.getElementById("divshow2");
  
  console.log(elDOM.style.display);
  
  if (elDOM.style.display === "none") {
    elDOM.style.display = "block";
  }
  else {
    elDOM.style.display = "none";
  }

}