$(document).ready(function () {
  //add current date to page using moment.js
var d = moment().format('LLLL');
console.log(d);

$("#date").append(d);

//add current time slots using moment.js
var t = moment().format('LT'); 
console.log(t);

$(".time").append(t);


// var hourlyTimeSlot = ["00", "15", "30", "45"];
// var time = []; 
// for (var i = 0; i < 24; i++) {
// for(var j = 0; j < 4; j++) {
//   time.push(i = ":" + hourlyTimeSlot[j]);

//   console.log("time");
// }
// }

  //create block to hold user input 

  var textArea = $("#text");
  var submit = $(".save");

  var text = localStorage.getItem("text");

  if (text === null) {
    return;
  }
 
  textArea.val(text);

// create click event to show user information when submitted
// does not work ???
  $(".save").on("click", function (event) {

    // event.preventDefault();

    // textArea.textContext = text;

    // var text = $("#text").val();
    console.log("man");
    
    var text = textArea.val();
console.log(text);
    localStorage.setItem("text", text);

    // console.log(event);
  });

// creat time block color-code  --- giving problem 

function timeSlot() {
 

  
$("#text").css("background-color", "red");

}
timeSlot();




});
