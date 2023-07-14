var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm}
firstday = yyyy+'-'+mm+'-'+'01';
today = yyyy+'-'+mm+'-'+dd;
console.log(today)
document.getElementById('date1').value = firstday;
document.getElementById('date2').value = today;