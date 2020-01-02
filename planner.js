$(document).ready(function() {
//add current date to page
  var dateToDay = $("#date");

  var toDate = new Date();
  toDate.setDate(toDate.getDate()+"");
 console.log(toDate);
$("#date").append(toDate);
 

 });
