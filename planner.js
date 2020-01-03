$(document).ready(function () {
  //add current date to page
  var dateToDay = $("#date");

  var toDate = new Date();
  toDate.setDate(toDate.getDate() + "");
  console.log(toDate);
  $("#date").append(toDate);

  //create block to hold user input 

  var textArea = $("#text");
  var submit = $("#save");
 
//create click event to show user information when submitted
  $("#save").on("click", function (event) {

    event.preventDefault();

    var textArea = $("#text").val();

    console.log(event);
  });



});
