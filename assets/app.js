

window.addEventListener('load', () => {
  let city;
  let country;
  const cityRegEx = /(?<city>\w+)/;
  const countryRegEx = /(?<country>[^\s]*$)/;
  const date = Date.now();

  // Formatting today's date
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0!
  let yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  
  today = dd + '/' + mm + '/' + yyyy;


  // Accessing the DOM
  const content = document.getElementById("content");
  const temperature = document.querySelector('.temperature');
  const desc = document.querySelector('.description');
  const hum = document.querySelector('.humidity');
  const loc = document.querySelector('.location');






  document.querySelector('#search-form').addEventListener('submit', function(e)
  {
    e.preventDefault();
    content.classList.remove("rainyday", "cloudyday")
    const location = document.querySelector('#location').value;
    loc.textContent = `${location}`

    // Extracting city and country out of string
    if (location.length > 0) {
      city = location.match(cityRegEx).groups.city;
      country = location.match(countryRegEx).groups.country;


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
          document.querySelector('.datetime').textContent = today;

          // Changing the background gif based on the weather conditions
          if (description.includes("rain")) {
            content.classList.add("rainyday")
          } else if (description.includes("cloud")) {
            content.classList.add("cloudyday")
          } else {
            content.classList.add("clearday");
          }

        })
        .catch(e => {
          console.log(e);
        })

    } else {
      alert("Please input city, country");
    }

  });


})
