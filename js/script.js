// import fetch from 'node-fetch';

const url =
  "https://api.nasa.gov/planetary/apod?api_key=byMXZRYPDymQvCcgAEarTFUmCZVtf4OXrnRu5UPY&date=";

//Afficher l'image uniquement lorsqu'une date est sélectionnée
document.getElementById("date").oninput = function () {
  fetchData();
  datePlus7();
  fetchAsteroides();
};

//Récupérer la date saisie
function dateSaisie() {
  const saisie = document.getElementById("date").value;
  return saisie;
}

//Afficher l'image du jour (API APOD)
function fetchData() {
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
//Afficher les astéroides (API NeoWS)
const startURL = "https://api.nasa.gov/neo/rest/v1/feed?start_date=";
const endURL = "&api_key=byMXZRYPDymQvCcgAEarTFUmCZVtf4OXrnRu5UPY";

//Récupérer la date saisie + 7 jours
function datePlus7() {
  let dateArray = dateSaisie().split("-");
  let daysPlusSept = parseInt(dateArray[2]) + 4;
  console.log(daysPlusSept);
  let datePlusSept = dateArray[0] + "-" + dateArray[1] + "-" + daysPlusSept;
  console.log(datePlusSept);
  return datePlusSept;
}

function fetchAsteroides() {
  fetch(startURL + dateSaisie() + "&end_date=" + dateSaisie() + endURL)
    .then((response) => {
      return response.json();
    })
    .then((asteroides) => {
      console.log(asteroides);
    });
}
