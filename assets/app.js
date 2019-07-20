// Background url for Rainy day



window.addEventListener('load', () => {
  let long;
  let lat;
  let currentLocation = false;

  // For allowing us to make bypass cors protocol by making request through a localhost
  const proxy = 'https://cors-anywhere.herokuapp.com/';

  // Accessing the DOM
  const content = document.querySelector('#content');
  const temperature = document.querySelector('.temperature');


  // Getting the coordinate of current location
  navigator.geolocation.getCurrentPosition(success);

  function success(position) {
    const coords = position.coords
    lat = coords.latitude;
    long = coords.longitude;
    console.log(`Lat: ${lat}, Long: ${long}`);
    currentLocation = true;
  }




  const api = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=8b9fb0f997204e2487c49916e25f3c18'


  fetch(api, {mode: 'cors'})
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      const {temp, humidity} = data.main;
      temperature.textContent = `${temp}K`;
    })
    .catch(e => {
      console.log(e);
    })

})
