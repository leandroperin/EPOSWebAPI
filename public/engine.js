var is_on = false;

$(document).ready(function() {
  setInterval(function() {
    refresh()
  }, 100);
});

$('#btnSS').click(function() {
  if (is_on) {
    is_on = false;
    $("#btnSS").html("Start");
    console.log("Information getting stopped");
  } else {
    is_on = true;
    $("#btnSS").html("Stop");
    console.log("Information getting started");
  }
});

function refresh() {
  if (is_on) {
    $.getJSON('http://localhost:3000/gett', function(data) {
      $('#currTemp').html(data['temp'] + ' ºC');
    });
  }
};
