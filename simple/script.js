//the switch between the sites
let crt = "clock";
let id;

function giveMeSite(IDfun) {
  switch (
    IDfun //translation from income to results
  ) {
    case 1:
      id = "clock";
      break;
    case 2:
      id = "todo";
      break;
    case 3:
      id = "rps";
      break;
    case 4:
      id = "vowel";
      break;
    case 5:
      id = "note";
      break;
  }
  var mainFrameOne = document.getElementById(crt);
  crt = id; //for the next time
  var mainFrameTwo = document.getElementById(crt);

  mainFrameOne.style.display = "none"; //get rid of the last desplay

  mainFrameTwo.style.display =
    mainFrameTwo.style.display == "none" ? "block" : "none"; //showing the income click
}

//clock

var t = setInterval(giveTime, 1000);
function giveTime() {
  document.getElementById("clockP").innerHTML = Date();
}
