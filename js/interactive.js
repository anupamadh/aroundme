var map;

function initMap() {
  //Constructor creates a new map -only center and zoom are required.
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 1.3099851,
      lng: 103.917199
    },
    zoom: 8
  });
  var tribeca = {
    lat: 1.3099851,
    lng: 103.917199
  };
  var marker = new google.maps.Marker({
    position: tribeca,
    map: map,
    title: 'First Marker!',
    animation: google.maps.Animation.DROP
  });
  var info = new google.maps.InfoWindow({
    content: "My information window!!"
  });

  google.maps.event.addListener(marker, "click", function() {
    info.open(map, marker);
  })

}
