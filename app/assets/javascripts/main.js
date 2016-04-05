// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$('body').ready(function() {
  console.log('main.js loaded');

  // INITIALIZE MAP, APPLY BIKE LAYER AND DIRECTIONS DISPLAY
  function initMap() {
    console.log('initMap called');

    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 25.77, lng: -80.20},
      zoom: 12
    });
  }

  google.maps.event.addDomListener(window, 'load', initMap);

  $('.search').on('click', function(e) {
    e.preventDefault();
    requestDirections();
  });

});
