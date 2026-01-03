var time = document.getElementsByClassName("timer")[0];
var endTime = new Date(Date.now() + 30 * 60 * 1000); // 30 minutes from now

setInterval(function () {
  var now = new Date();
  var diff = endTime - now;

  var min = Math.floor(diff / 60000);
  var sec = Math.floor((diff % 60000) / 1000);

  time.innerHTML = min + ":" + (sec < 10 ? "0" + sec : sec);
}, 1000);
