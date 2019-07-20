

window.addEventListener('load', () => {
  let long;
  let lat;
  let city;
  let country;
  let currentLocation = false;
  const cityRegEx = /(?<city>\w+)/;
  const countryRegEx = /(?<country>[^\s]*$)/;


  // Accessing the DOM
  const content = document.querySelector('#content');
  const temperature = document.querySelector('.temperature');
  const desc = document.querySelector('.description');
  const hum = document.querySelector('.humidity');
  const loc = document.querySelector('.location');





  document.querySelector('#search-form').addEventListener('submit', function(e)
  {
    e.preventDefault();
    const location = document.querySelector('#location').value;
    console.log(location);

    // Extracting city and country out of string
    city = location.match(cityRegEx).groups.city;
    country = location.match(countryRegEx).groups.country;
    console.log(city);
    console.log(country);

    // Clearing the input field after submit
    document.querySelector('#location').value = '';

    // Generate api url with city and country name
    const api = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=8b9fb0f997204e2487c49916e25f3c18`

    // Fetching data via the api
    fetch(api, {mode: 'cors'})
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        const {temp, humidity} = data.main;
        const {description} = data.weather[0];
        temperature.textContent = `${temp}K`;
        desc.textContent = `${description}`;
        hum.textContent = `Humidity: ${humidity}`;
        loc.textContent = `${location}`
      })
      .catch(e => {
        console.log(e);
      })



  });




})
