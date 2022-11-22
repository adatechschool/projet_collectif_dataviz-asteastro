// import fetch from 'node-fetch';

const url = "https://api.nasa.gov/planetary/apod?api_key=byMXZRYPDymQvCcgAEarTFUmCZVtf4OXrnRu5UPY&date="

//Afficher l'image lorsqu'une date est sélectionnée
document.getElementById("date").oninput = function() {fetchData()};

function dateSaisie(){
  const saisie = document.getElementById("date").value;
  console.log(saisie);
  return saisie
  }

function fetchData(){
  fetch(url + dateSaisie() + "&")
    .then((response) => {
      return response.json();
    })
    .then((nasaData) => {
      console.log(nasaData);
      const title = document.querySelector("#title");
      title.innerHTML = nasaData.title;
      const photo = document.querySelector("#photo");
      photo.src = nasaData.url;
      const description = document.querySelector("#description");
      description.innerHTML = nasaData.explanation;
    });
}
//fetchData()