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
    // event.preventDefault();

    // textArea.textContext = text;

    // var text = $("#text").val();


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
  // 6:00pm 
  // 9:00am
return newHour + ":00 " + amPm;


  }



  // creat time block color-code  --- giving problem 
  // function timeSlot() {

    if (t == timeNow)
    $("#text1").css("background-color", "red");

  // $("#text1").css("background-color", "red");
  console.log();
  // }
  // timeSlot();
})
