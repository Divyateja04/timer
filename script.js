var tilltime = new Date("Dec 31 ,2018 00:00:00").getTime();
var x = setInterval(function() {
	var now = new Date().getTime();
	var distance = tilltime - now;
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
 	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
 	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 	console.log(days);
;},1000)