$(document).ready(function () {
  //add current date to page using moment.js
  var d = moment().format('LLLL');
  // add current time slots with current time
  var dateL = new Date();
  // create array to store time for color-code block 
var timeCompare = $(".text");
timeCompare = ["9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm"];

  console.log(d);

  $("#date").append(d);


  //create block to hold user input 

  var submit = $(".save");
//get value from user input to local storage 
  $("#text9").val(localStorage.getItem("text9"));
  $("#text10").val(localStorage.getItem("text10"));
  $("#text11").val(localStorage.getItem("text11"));
  $("#text12").val(localStorage.getItem("text12"));
  $("#text1").val(localStorage.getItem("text1"));
  $("#text2").val(localStorage.getItem("text2"));
  $("#text3").val(localStorage.getItem("text3"));
  $("#text4").val(localStorage.getItem("text4"));
  $("#text5").val(localStorage.getItem("text5"));

  // create click event to show user information when submitted

  $(".save").on("click", function (event) {
    var textId = $(this).attr("data-text");
    console.log("textId");
    var textArea = $("#" + textId);


    var text = textArea.val();
    console.log(text);


    localStorage.setItem(textId, text);
console.log(compareArr(timeCompare));
  });

  


  

  
//calcuate hours in time format
  function standardTime(hour) {

    var amPm;
    var newHour;
    if (hour > 12) {
      newHour = hour - 12;
      amPm = "pm";
    }

    else {
      newHour = hour;
      amPm = "am";
    }
    return newHour + ":00" + amPm;
  }
 


 function compareArr(arr) {
  // var currentTime = standardTime(dateL.getHours());
  var currentTime = standardTime(11);
  var indexI = 0;
  for(var i = 0; i <arr.length; i++) {
    if (currentTime == arr[i]) {
indexI = i;

}
return indexI;
// console.log("....")
 }
 }
  // creat time block for color-code  
// function colorCodeBlock() {




  // if ( numTwo < standardTime)
  // // console.log("red");
  //  $("#text9").css("background-color", "grey");
  //   $("#text9").css("background-color", "red");
  //   $("#text9").css("background-color", "green");
// }


// function consoleInside(arr) {

//   // We then loop through the selected array.
//   for (var i = 0; i < arr.length; i++) {

  
  //  $("#text1").css("background-color", "red");

  // // $("#text1").css("background-color", "red");
  // console.log();
  // // }
  // // timeSlot();
})
