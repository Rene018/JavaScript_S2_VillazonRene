function listar(list) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";
  list.forEach(char => {
          const card = document.createElement("div");
          card.className = "card";
          card.innerHTML = `
            <img src="${char.image}" alt="${char.name}">
            <h3>${char.name}</h3>
            <p>ID: ${char.id}</p>
            <p>Especie: ${char.species}</p>
            <p>Estado: ${char.status}</p>
          `;
          resultsDiv.appendChild(card);
        });
}
function getCbm() {
  let getCharacterByName = new XMLHttpRequest();
  let nombre = document.getElementById("buscador").value;
  getCharacterByName.open(
    "GET",
    `https://rickandmortyapi.com/api/character/?name=${nombre}`,
    true
  );
  getCharacterByName.addEventListener("load", function () {
    if (getCharacterByName.status >= 200 && getCharacterByName.status < 300) {
      let response = JSON.parse(getCharacterByName.responseText);
      let characters = response.results;
      if (characters.length > 0) {
        listar(characters);
      }
    } else {
      alert("Error: " + getCharacterByName.statusText);
    }
  });
  getCharacterByName.send();
}
let getAllCharacters = new XMLHttpRequest();
getAllCharacters.open("GET", "https://rickandmortyapi.com/api/character", true);
getAllCharacters.addEventListener("load", function () {
  if (getAllCharacters.status >= 200 && getAllCharacters.status < 300) {
    let response = JSON.parse(getAllCharacters.responseText);
    let characters = response.results;
    listar(characters);
    
  } else {
    alert("Error: " + getAllCharacters.statusText);
  }
});

getAllCharacters.send();
document.getElementById("botoncito").addEventListener("click", function() {
  getCbm();
});