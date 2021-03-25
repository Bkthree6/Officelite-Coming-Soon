const numToMonthConv = {
    jan: "JAN",
    feb: "FEB",
    mar: "MAR",
    apr: "APR",
    may: "MAY",
    jun: "JUN",
    jul: "JUL",
    aug: "AUG",
    sep: "SEP",
    oct: "OCT",
    nov: "NOV",
    dec: "DEC"
}

var date = new Date();
var futureDate = date.setDate(date.getDate() + 47);

var day = date.getDate();

var month = date.getMonth();

var year = date.getFullYear();

var stringMonth = Object.values(numToMonthConv)[month];

let returnDate = `${day} ${stringMonth} ${year}`;
document.getElementById('date').innerHTML= returnDate;

// Countdown Timer
var countDownDate = new Date(`${day} ${stringMonth} ${year}`);
console.log(countDownDate);

var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="demo"
    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;
  
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("day").innerHTML = "EXPIRED";
    }
  }, 1000);