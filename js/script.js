//const url = "https://api.nasa.gov/planetary/apod?api_key=byMXZRYPDymQvCcgAEarTFUmCZVtf4OXrnRu5UPY"
// import fetch from 'node-fetch';

//function fetchData(){
fetch(
  "https://api.nasa.gov/planetary/apod?api_key=byMXZRYPDymQvCcgAEarTFUmCZVtf4OXrnRu5UPY"
)
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
//}
//fetchData()

// const title = document.querySelector("#title");
// const photo = document.querySelector("#photo");
// const description = document.querySelector("#description");

// function displayData(data) {
//   title.innerHTML = data.title;
// }
// displayData(response2);
