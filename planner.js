$(document).ready(function () {
  //add current date to page using moment.js
  var d = moment().format('LLLL');
  console.log(d);

  $("#date").append(d);


  //create block to hold user input 

  var submit = $(".save");

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

    // console.log(event);
  });



  // add current time slots with current time
  var dateL = new Date();


  console.log(standardTime(dateL.getHours()));


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
 

// create array to store time for color-code block 
var numTwo = $(".text");
 numTwo = ["9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm"];


 function numberArr(arr) {

  for(var i = 0; i <numTwo.length; i++) {
    console.log("arr[i]");
  }
console.log("....")
 }
 
 console.log(numTwo);




  // creat time block for color-code  
// function colorCodeBlock() {

// console.log(colorCodeBlock());


// function consoleInside(arr) {

//   // We then loop through the selected array.
//   for (var i = 0; i < arr.length; i++) {

//     // Each time we print the value inside the array.
//     console.log(arr[i]);
//   }
//   console.log("---------");
// }
  
  // console.log(numTwo);




  
  //   $("#text1").css("background-color", "red");

  // // $("#text1").css("background-color", "red");
  // console.log();
  // // }
  // // timeSlot();
})
