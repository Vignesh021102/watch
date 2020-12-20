var container = document.getElementById("container")
console.log(container)

setInterval(() => {
 
document.getElementById("min").innerText = new Date().getMinutes()
document.getElementById("sec").innerText = new Date().getSeconds()  

if (new Date().getHours() > 12) {
  document.getElementById("AM/PM").innerText = "PM";
} else {
  document.getElementById("AM/PM").innerText = "AM";
}

if (new Date().getHours() > 12) {
  document.getElementById("hour").innerText = new Date().getHours() - 12;
} else {
  document.getElementById("hour").innerText = new Date().getHours()
}
}, 100);

switch (new Date().getMonth()) {
  case 0:
    var month = "January"
    break;
    case 1:
    var month = "February "
    break;
    case 2:
    var month = "March"
    break;
    case 3:
    var month = "April"
    break;
    case 4:
    var month = "May"
    break;
    case 5:
    var month = "June"
    break;
    case 6:
    var month = "July"
    break;
    case 7:
    var month = "August"
    break;
    case 8:
    var month = "September"
    break;
    case 9:
    var month = "October"
    break;
    case 10:
    var month = "November"
    break;
    case 11:
      var month = "December"
      break;
};

switch (new Date().getDay()) {
  case 0:
    var day = "Sunday"
    break;
    case 1:
    var day = "Monday"
    break;
    case 2:
    var day = "Tuseday"
    break;
    case 3:
    var day = "Wednesday"
    break;
    case 4:
    var day = "Thursday"
    break;
    case 5:
    var day = "Friday"
    break;
    case 6:
    var day = "Satday"
    break;
};




document.getElementById("date").innerText = new Date().getDate()
document.getElementById("day").innerText = day 
document.getElementById("month").innerText = month 
document.getElementById("year").innerText = new Date().getYear()  + 1900

function toogletime () {
  document.getElementById("time").style.display = "flex"
  document.getElementById("stopwatch").style.display = "none"
  console.log("toogletime");
}
function tooglestopwatch () {
  document.getElementById("time").style.display = "none"
  document.getElementById("stopwatch").style.display = "flex"
  console.log("toogletime");
} 
var num1 = 0 
var num2 = 0
var num3 = 0 
function start () {
  setInterval(()=>{
    num1++
    if (num1 == 60 ) {
      num1 = 0
      num2 += 1
    }
    if (num2 == 60 ) {
      num2 = 0
      num3 += 1
    }
    document.getElementById("num1").innerText = num1
    document.getElementById("num2").innerText = num2
    document.getElementById("num3").innerText = num3
  },1000)
}