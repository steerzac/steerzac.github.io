var sj = {lat: 37.338, lng: -121.886};
var aledo = {lat: 32.6960, lng: -97.6022};
var cstat = {lat: 30.6280, lng: -96.3344};
var gville = {lat: 33.1384, lng: -96.1108};

var ciscoIcon = "/static/img/cisco_logo.png";
var homeIcon = "/static/img/home_icon.png";
var a_mIcon = "/static/img/tamu_logo.png";
var l3Icon = "/static/img/l3icon.png";

var markerData = [
  {"city":sj,"icon":ciscoIcon},
  {"city":aledo,"icon":homeIcon},
  {"city":cstat,"icon":a_mIcon},
  {"city":gville,"icon":l3Icon}
];
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: sj
  });

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  var lineSymbol = {
    path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
    scale: 3,
    strokeColor: '#003C71'
  };

  // Create the polyline and add the symbol to it via the 'icons' property.
  var line = new google.maps.Polyline({
    path: [aledo, sj],
    icons: [{
      icon: lineSymbol,
      offset: '100%',
    }],
    strokeWeight: 1,
    map: map
  });

  animateCircle(line);

  for (var i = 0; i < markerData.length; ++i) {
    new google.maps.Marker({
      position: markerData[i].city,
      map: map,
      icon: markerData[i].icon,
      animation: google.maps.Animation.DROP
    });
  }
}

// Use the DOM setInterval() function to change the offset of the symbol
// at fixed intervals.
function animateCircle(line) {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 300;

      var icons = line.get('icons');
      icons[0].offset = (count / 3) + '%';
      line.set('icons', icons);
  }, 20);}
