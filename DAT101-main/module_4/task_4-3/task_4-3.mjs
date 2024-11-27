"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
document.getElementById("cmbTask1Calculate").addEventListener("click", () => {
  const width = Number(document.getElementById("txtRectWidth").value);
  const height = Number(document.getElementById("txtRectHeight").value);
  const perimeter = 2 * (width + height);
  const area = width * height;

  document.getElementById("txtTask1Output").innerText = `Circumference = ${perimeter}, Area = ${area}`;
});

//--- Part 2 ----------------------------------------------------------------------------------------------
const task2Words = [];
document.getElementById("txtTask2Word").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        const word = event.target.value.trim();
        if (word) {
            task2Words.push(word);
            document.getElementById("txtTask2Output").innerText = `Number of words = ${task2Words.length}: ${task2Words.join(", ")}`;
            event.target.value = "";
        }
 }
});

//--- Part 3 ----------------------------------------------------------------------------------------------
document.getElementById("cmbTask3CheckAnswer").addEventListener("click", () => {
  const checkboxes = document.querySelectorAll('input[name="chkTask3"]:checked');
  const selected = Array.from(checkboxes).map(checkbox => checkbox.parentElement.innerText.trim());
  document.getElementById("txtTask3Output").innerText = selected.join(", ");
});

//--- Part 4 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const carTypesContainer = document.getElementById("divTask4Cars");
CarTypes.forEach(car => {
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "carType";
    radio.value = car.caption;

    const label = document.createElement("label");
    label.innerText = car.caption;

    carTypesContainer.appendChild(radio);
    carTypesContainer.appendChild(label);
    carTypesContainer.appendChild(document.createElement("br"));
});

carTypesContainer.addEventListener("change", (event) => {
    if (event.target.name === "carType") {
     document.getElementById("txtTask4Output").innerText = `You selected: ${event.target.value}`;
    }
});

//--- Part 5 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
document.getElementById("selectTask5Animals").addEventListener("change", (event) => {
  document.getElementById("txtTask5Output").innerText = `You selected: ${event.target.options[event.target.selectedIndex].text}`;
});

//--- Part 6 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const girlsDropdown = document.getElementById("selectTask6Girls");
GirlsNames.forEach(name => {
 const option = document.createElement("option");
 option.value = name;
 option.text = name;
 girlsDropdown.add(option);
});

girlsDropdown.addEventListener("change", (event) => {
    document.getElementById("txtTask6Output").innerText = `You selected: ${event.target.value}`;
});

//--- Part 7 ----------------------------------------------------------------------------------------------
const movieGenreDropdown = document.getElementById("selectMovieGenre");
MovieGenre.forEach(genre => {
  const option = document.createElement("option");
  option.value = genre;
  option.text = genre;
  movieGenreDropdown.add(option);
});

document.getElementById("cmbAddMovie").addEventListener("click", () => {
    const title = document.getElementById("txtMovieTitle").value.trim();
    const genre = document.getElementById("selectMovieGenre").value;
    const director = document.getElementById("txtMovieDirector").value.trim();
    const rate = document.getElementById("txtMovieRate").value.trim();

    if (title && genre && director && rate) {
      const table = document.getElementById("tblMovies");
       const row = table.insertRow();
      row.insertCell(0).innerText = table.rows.length - 1;
      row.insertCell(1).innerText = title;
      row.insertCell(2).innerText = genre;
      row.insertCell(3).innerText = director;
      row.insertCell(4).innerText = rate;


      document.getElementById("txtMovieTitle").value = "";
       document.getElementById("txtMovieDirector").value = "";
      document.getElementById("txtMovieRate").value = "5";
   }
});