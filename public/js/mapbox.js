/*eslint-disable*/
const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations);

mapboxgl.accessToken =
  'pk.eyJ1IjoibHV4c2FuIiwiYSI6ImNsenMwOGo3dDFxN3kycnM4bmZncGQzcW4ifQ.K9aL5hlUfe_wt0hjQSUYPw';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/luxsan/cm0nnu9cp00dg01qo0b2p9ruc',
  scrollZoom: false
  // center: [-118.113491, 34.111745],
  // zoom: 10
});
const bounds = new mapboxgl.LngLatBounds();
locations.forEach(loc => {
  //create marker
  const el = document.createElement('div');
  el.className = 'marker';
  //Add marker
  new mapboxgl.Marker({
    element: el,
    anchor: 'bottom'
  })
    .setLngLat(loc.coordinates)
    .addTo(map);
  //Add popup
  new mapboxgl.Popup({ offset: 30 })
    .setLngLat(loc.coordinates)
    .setHTML(`<p> ${loc.day} days : ${loc.description}</p>`)
    .addTo(map);
  //Extend map bounds to include current location
  bounds.extend(loc.coordinates);
});

map.fitBounds(bounds, {
  padding: {
    top: 200,
    botton: 150,
    left: 100,
    right: 100
  }
});
