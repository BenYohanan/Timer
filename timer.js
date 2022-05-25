

 var count = 0;
 var startTime = 7200000;
function updateCountDowntime() 
{ 
  count++;
debugger;

  var endDate = count == 1? startTime : startTime -= 1000;

  const d = Math.floor(endDate / 1000 / 60 / 60 / 24);
  const h = Math.floor(endDate / 1000 / 60 / 60) % 24;
  const m = Math.floor(endDate / 1000 / 60) % 60;
  const s = Math.floor(endDate / 1000) % 60;
  
 document.getElementById("hours").innerText = (h < 10 ? "0" + h : h);
            document.getElementById("minutes").innerText = (m < 10 ? "0" + m : m);
            document.getElementById("seconds").innerText = (s < 10 ? "0" + s : s); 
}
setInterval(updateCountDowntime, 1000);
