
// Background url for Rainy day

function rainyDay() {
  fetch('https://api.giphy.com/v1/gifs/translate?api_key=fHN5h5cQ7aCvqp1t7pGeGhZ54gV67MtW&s=rain', {mode: 'cors'})
    .then(function(response) {
      return response.json()
    })
    .then(function(response) {
      return response.data.images.original.url;
    })
    .catch(e => {
      console.log(e);
    })
}

// Background url Sunny day

function rainyDay() {
  fetch('https://api.giphy.com/v1/gifs/translate?api_key=fHN5h5cQ7aCvqp1t7pGeGhZ54gV67MtW&s=sun', {mode: 'cors'})
    .then(function(response) {
      return response.json()
    })
    .then(function(response) {
      return response.data.images.original.url;
    })
    .catch(e => {
      console.log(e);
    })
}
