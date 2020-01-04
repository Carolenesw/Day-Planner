$(document).ready(function () {
  //add current date to page using moment.js
  var d = moment().format('LLLL');
  console.log(d);

  $("#date").append(d);

  //add current time slots using moment.js
  // var t = moment().format('LT'); 
  // console.log(t); ---- use for current time slot comparison 

  // $(".time").append(t);


  // var hourlyTimeSlot = ["00", "15", "30", "45"];
  // var time = []; 
  // for (var i = 0; i < 24; i++) {
  // for(var j = 0; j < 4; j++) {
  //   time.push(i = ":" + hourlyTimeSlot[j]);

  //   console.log("time");
  // }
  // }

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
  // does not work ???
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

  // creat time block color-code  --- giving problem 

  function timeSlot() {

// if (t)

    $("#text1").css("background-color", "red");

  }
  timeSlot();




});
