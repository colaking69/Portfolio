let crt;

function giveMeSite(IDfun) {
  let id = IDfun; //incoming of what to show

  let element = document.getElementById(crt); //hide the current
  let hidden = element.getAttribute("hidden");
  element.setAttribute("hidden", "hidden");
  crt = id; //for the next time hopefully

  element.removeAttribute("hidden"); //show
}
