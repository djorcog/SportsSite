function drawMap(myLocation, title) {  
  var lat1 = myLocation.lat();
  var long1 = myLocation.lng();
  this.dist = 6;
  var myOptions = {
    zoom: 15,
    center: new google.maps.LatLng(lat1, long1),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  //mapa
  map = new google.maps.Map(document.getElementById("mapa"), myOptions);

  //draw MyLocation
  this.marker = new google.maps.Marker({
        position: myOptions.center, 
        map: map,
        title: title
    });   
}

function codeAddress(address, title) {   
  var geocoder = new google.maps.Geocoder();  
  geocoder.geocode( { 'address': address }, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var myLocation = results[0].geometry.location;
      drawMap(myLocation, title);
    } else {            
    }
  });  
}