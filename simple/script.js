let crt;

function giveMeSite(IDfun) {
  let id = IDfun; //incoming of what to show

  let element = document.getElementById(crt); //hide the current
  element.setAttribute("hidden", "hidden");
  crt = id; //for the next time hopefully

  document.getElementById(id).style.display = "block"; //show
}
