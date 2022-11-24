// import fetch from 'node-fetch';

const url =
  "https://api.nasa.gov/planetary/apod?api_key=byMXZRYPDymQvCcgAEarTFUmCZVtf4OXrnRu5UPY&date=";

//Afficher l'image uniquement lorsqu'une date est sélectionnée
document.getElementById("date").oninput = function () {
  fetchData();
  // datePlus7();
};
document.getElementById("moonContainer").onclick = function () {
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
// function datePlus7() {
//   let dateArray = dateSaisie().split("-");
//   let daysPlusSept = parseInt(dateArray[2]) + 4;
//   console.log(daysPlusSept);
//   let datePlusSept = dateArray[0] + "-" + dateArray[1] + "-" + daysPlusSept;
//   console.log(datePlusSept);
//   return datePlusSept;
// }

function fetchAsteroides() {
  fetch(startURL + dateSaisie() + "&end_date=" + dateSaisie() + endURL)
    .then((response) => {
      return response.json();
    })
    .then((asteroides) => {
      console.log(asteroides);
      const name = document.querySelector("#nom");
      const dateToString = dateSaisie().toString();
      name.innerHTML = `His name : ${asteroides.near_earth_objects[dateToString][0].name}`;
      const diameter_min = document.querySelector("#diametre_min");
      diameter_min.innerHTML = `His minimum diameter : ${asteroides.near_earth_objects[dateToString][0].estimated_diameter.kilometers.estimated_diameter_min} Km`;
      const diameter_max = document.querySelector("#diametre_max");
      diameter_max.innerHTML = `His maximum diameter : ${asteroides.near_earth_objects[dateToString][0].estimated_diameter.kilometers.estimated_diameter_max} Km`;
      const hazardous = document.querySelector("#hazardous");
      hazardous.innerHTML = `Was he hazardous ? : ${asteroides.near_earth_objects[dateToString][0].is_potentially_hazardous_asteroid}`;
      const sentry = document.querySelector("#sentry");
      sentry.innerHTML = `Was he sentry ? : ${asteroides.near_earth_objects[dateToString][0].is_sentry_object}`;
      const distance = document.querySelector("#distance");
      distance.innerHTML = `His missdistance : ${asteroides.near_earth_objects[dateToString][0].close_approach_data[0].miss_distance.kilometers} Km`;
      const vitesse = document.querySelector("#vitesse");
      vitesse.innerHTML = `His velocity : ${asteroides.near_earth_objects[dateToString][0].close_approach_data[0].relative_velocity.kilometers_per_hour} Km/hour`;
    });
}
