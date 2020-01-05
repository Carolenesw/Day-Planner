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

  });

  //calculated and format blocks according to current time
  colorBlocks();



  //format time to regular 12hrs instead of 24hr time slot
  function formatTime(hour) {

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

//return index of a block based on current time 
  function returnBlockIndex(arr) {
    var currentTime = formatTime(dateL.getHours());
    // var currentTime = formatTime(13);
    var indexI = 0;
    for (var i = 0; i < arr.length; i++) {
      if (currentTime == arr[i]) {
        indexI = i;

      }

    }
    return indexI;
  }

  //color all blocks based on current time
  function colorBlocks() {
    var currentBlockIndex = returnBlockIndex(timeCompare);
    //color all blocks grey by default
    for (var i = 0; i < timeCompare.length; i++) {
      colorSingleBlock(i, 1);
    }

    //current time in red
    colorSingleBlock(currentBlockIndex, 2);
    //color all blocks after current to green
    for (var i = currentBlockIndex + 1; i < timeCompare.length; i++) {
      colorSingleBlock(i, 3);
    }
  }

  // create time block for color-code  
  function colorSingleBlock(blockIndex, blockColor) {
    var itemName = "";
    switch (blockIndex) {
      case 0:
        switch (blockColor) {
          case 1: //grey
            $("#text9").css("background-color", "grey");
            break;
          case 2://red
            $("#text9").css("background-color", "red");
            break;
          case 3://green
            $("#text9").css("background-color", "green");
            break;
        }
        break;
      case 1:
        switch (blockColor) {
          case 1: //grey
            $("#text10").css("background-color", "grey");
            break;
          case 2://red
            $("#text10").css("background-color", "red");
            break;
          case 3://green
            $("#text10").css("background-color", "green");
            break;
        }
        break;
      case 2:
        switch (blockColor) {
          case 1: //grey
            $("#text11").css("background-color", "grey");
            break;
          case 2://red
            $("#text11").css("background-color", "red");
            break;
          case 3://green
            $("#text11").css("background-color", "green");
            break;
        }
        break;
      case 3:
        switch (blockColor) {
          case 1: //grey
            $("#text12").css("background-color", "grey");
            break;
          case 2://red
            $("#text12").css("background-color", "red");
            break;
          case 3://green
            $("#text12").css("background-color", "green");
            break;
        }
        break;
      case 4:
        switch (blockColor) {
          case 1: //grey
            $("#text1").css("background-color", "grey");
            break;
          case 2://red
            $("#text1").css("background-color", "red");
            break;
          case 3://green
            $("#text1").css("background-color", "green");
            break;
        }
        break;
      case 5:
        switch (blockColor) {
          case 1: //grey
            $("#text2").css("background-color", "grey");
            break;
          case 2://red
            $("#text2").css("background-color", "red");
            break;
          case 3://green
            $("#text2").css("background-color", "green");
            break;
        }
        break;
      case 6:
        switch (blockColor) {
          case 1: //grey
            $("#text3").css("background-color", "grey");
            break;
          case 2://red
            $("#text3").css("background-color", "red");
            break;
          case 3://green
            $("#text3").css("background-color", "green");
            break;
        }
        break;
      case 7:
        switch (blockColor) {
          case 1: //grey
            $("#text4").css("background-color", "grey");
            break;
          case 2://red
            $("#text4").css("background-color", "red");
            break;
          case 3://green
            $("#text4").css("background-color", "green");
            break;
        }
        break;
      case 8:
        switch (blockColor) {
          case 1: //grey
            $("#text5").css("background-color", "grey");
            break;
          case 2://red
            $("#text5").css("background-color", "red");
            break;
          case 3://green
            $("#text5").css("background-color", "green");
            break;
        }
        break;
    }
  }

})
