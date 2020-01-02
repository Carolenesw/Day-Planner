$(document).ready(function() {

  var dateToDay = $("#date");

  
  var toDate = Date(Date.now());
  a = toDate.toString()
  document.write(a);

  console.log(toDate);

  $("#date").append(a);

 });
