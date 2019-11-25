const playersElement = document.querySelector("#players");
const playersCountElement = document.querySelector("#playersCount");
const formElement = document.querySelector("#form");
const resultsElement = document.querySelector("#results");
const errorElement = document.querySelector("#error");

let firstTeam = [];
let secondTeam = [];

playersElement.addEventListener("keypress", () => {
  const count = playersElement.value.split("\n");
  playersCountElement.textContent = count.length;
});

formElement.addEventListener("submit", e => {
  e.preventDefault();
  const players = playersElement.value.split("\n");
  for ( let i = 0; i < players.length; i++) {
    if(players[i].trim() === "") {
      players.splice(i, 1);
    }
  }

  const total = players.length;
  if (total / 2 !== Math.floor(total / 2)) {
    errorElement.classList = "alert alert-danger";
    errorElement.textContent = "Error el numero de jugadores debe ser par";
    return;
  }

  errorElement.classList = "";
  errorElement.textContent = "";

  while ( firstTeam.length + secondTeam.length !== total ) {
    const index = Math.floor(Math.random() * (players.length - 0) + 0);
    if (players[index]) {
      if (firstTeam.length !== total / 2) {
        firstTeam.push(players[index]);
      } else {
        secondTeam.push(players[index])
      }

      players.splice(index, 1);

    }
  }


  resultsElement.innerHTML = "";
  resultsElement.innerHTML += `<h1>Equipo 1:</h1>`
  firstTeam.forEach(player => {
    resultsElement.innerHTML += `
      <li class="list-group-item">
        ${player}
      </li>
    `
  })

  resultsElement.innerHTML += `<h1>Equipo 2:</h1>`
  secondTeam.forEach(player => {
    resultsElement.innerHTML += `
      <li class="list-group-item">
        ${player}
      </li>
    `
  })

  firstTeam = []
  secondTeam = []
});