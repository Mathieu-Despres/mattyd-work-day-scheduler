// Adds the Moment.js JavaScript package
var m = moment();

$(document).ready( function() {
    colorChange ();
    renderText();
});

const nth = function(d) {
  if (d > 3 && d < 21) return 'th';
  switch (d % 10) {
    case 1:  return "st";
    case 2:  return "nd";
    case 3:  return "rd";
    default: return "th";
  }
}

const fortnightAway = new Date(+new Date);
const date = fortnightAway.getDate();
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][fortnightAway.getMonth()];
const weekday = ["Sunday,","Monday,","Tuesday,","Wednesday,","Thursday,","Friday,","Saturday,"];
const d = new Date();
let day = weekday[d.getDay()];

document.getElementById("date").innerHTML = `${month} ${date}<sup>${nth(date)}</sup>`;
document.getElementById("weekday,").innerHTML = day;

function colorChange () {
    
var currentTime = moment().hours();
console.log("Current Time" + currentTime);

var eventText;
var eventTime;
    
$(".saveBtn").click(function() {
        eventText = $(this).siblings(".input").val();
        console.log(eventText);
        eventTime = $(this).siblings(".hour").text();
        console.log(eventTime);
        localStorage.setItem(eventTime, JSON.stringify(eventText));
    
        colorChange ();
        renderText ();
        
});
    
      $(".deleteBtn").click(function() {
            eventText = $(this).siblings(".input").val("");
            eventText = $(this).siblings(".input").val();
            eventTime = $(this).siblings(".hour").text();
            localStorage.setItem(eventTime, JSON.stringify(eventText));
      
        colorChange ();
        renderText ();
    
    });

// This compares the id attribute and adds / removes the applicable classes
// depending on a particular set of conditions

    $(".input").each(function () {

        var scheduledTime = parseInt($(this).attr("id"));
        console.log(scheduledTime);

        if (currentTime > scheduledTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (currentTime < scheduledTime) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        } else {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
    });
}

    //This will paste the result in a single string.
    function renderText () {   

    //For each declared variable, this will store the data, convert it to a JavaScript
    // ojbect upon retrieval (because it is always a string), and paste the result
    // as a single string.
    var saveEventText9 = JSON.parse(localStorage.getItem("9AM"));
    $("#9").val("");
    $("#9").val(saveEventText9);
    
    var saveEventText10 = JSON.parse(localStorage.getItem("10AM"));
    $("#10").val("");
    $("#10").val(saveEventText10);
    
    var saveEventText11 = JSON.parse(localStorage.getItem("11AM"));
    $("#11").val("");
    $("#11").val(saveEventText11);
    
    var saveEventText12 = JSON.parse(localStorage.getItem("12PM"));
    $("#12").val("");
    $("#12").val(saveEventText12);
    
    var saveEventText13 = JSON.parse(localStorage.getItem("1PM"));
    $("#13").val("");
    $("#13").val(saveEventText13);

    var saveEventText14 = JSON.parse(localStorage.getItem("2PM"));
    $("#14").val("");
    $("#14").val(saveEventText14);

    var saveEventText15 = JSON.parse(localStorage.getItem("3PM"));
    $("#15").val("");
    $("#15").val(saveEventText15);

    var saveEventText16 = JSON.parse(localStorage.getItem("4PM"));
    $("#16").val("");
    $("#16").val(saveEventText16);

    var saveEventText17 = JSON.parse(localStorage.getItem("5PM"));
    $("#17").val("");
    $("#17").val(saveEventText17);

}
