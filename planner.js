$(document).ready(function () {
  //add current date to page
  
  // var dateToDay = $("#date");

  // var toDate = new Date();
  // toDate.setDate(toDate.getDate() + "");
  // console.log(toDate);
  $("#date").append(toDate);

  //create block to hold user input 

  var textArea = $("#text");
  var submit = $("#save");

  var text = localStorage.getItem("text");

  if (userInfo === null) {
    return;
  }
 
  textArea.textContext = text;

// create click event to show user information when submitted

  $("#save").on("click", function (event) {

    event.preventDefault();

    // textArea.textContext = text;

    var textArea = $("#text").val();

    localStorage.setItem("text", text);

    console.log(event);
  });


});
