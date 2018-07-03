$(document).ready(function() {
  setInterval(function() {
    refresh()
  }, 100);
});

function refresh() {
  $.getJSON('http://localhost:3000/gett', function(data) {
    $('#currTemp').html(data['temp'] + ' ºC');
  });
};
