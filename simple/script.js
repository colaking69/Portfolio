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

//clock date/time/timezone

var t = setInterval(giveDoTime, 1000);
const D = new Date();

function giveDoTime() {
  giveDate();
  giveTime();
  giveTimeZone();
}

function giveDate() {
  //day

  let dayEnd = D.getDate();

  //year

  let yearEnd = D.getYear() % 100;

  //month

  let monthGet = D.getMonth();
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let monthEnd = month[D.getMonth()];

  document.getElementById("clockDate").innerHTML =
    dayEnd + "/" + monthEnd + "/" + yearEnd;
}

function giveTime() {
  //time(hours/min/sec)
  const D = new Date();
  let hour = D.getHours();
  let min = D.getMinutes();
  let sec = D.getSeconds();
  document.getElementById("clockTime").innerHTML = hour + ":" + min + ":" + sec;
}

function giveTimeZone() {
  //time zone

  let timZ = D.getTimezoneOffset() / 60;
  document.getElementById("clockTimeZone").innerHTML = "GMT" + timZ + ":00";
}
