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