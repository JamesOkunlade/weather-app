const img = document.querySelector('img');
  fetch('https://api.giphy.com/v1/gifs/translate?api_key=fHN5h5cQ7aCvqp1t7pGeGhZ54gV67MtW&s=cats', {mode: 'cors'})
    .then(function(response) {
      return response.json()
    })
    .then(function(response) {
      console.log(response)
    })
