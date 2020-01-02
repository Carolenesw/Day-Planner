$(document).ready(function() {
//add current date to page
  var dateToDay = $("#date");

  var toDate = new Date();
  toDate.setDate(toDate.getDate()+"");
 console.log(toDate);
$("#date").append(toDate);
 
//create block to hold user input 

var textArea = $("#text");
var submit = $("#save")
 
userInputLog();

function displayInfo(type, message) {
  textArea.textContent = message;
textArea.setAttribute("class", type); 
}

("#save").on("click", function(){
  $("#text").append(submit)
});



 });
