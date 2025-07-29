function listar(list, title) {
  let charactersList = "";
  list.forEach((character) => {
    charactersList += `#${character.id}  Nombre: ${character.name} Especie: ${character.species} Estado: ${character.status}
            `;
  });
  alert(`${title}:\n${charactersList}`);
}
function getCbm() {
  let getCharacterByName = new XMLHttpRequest();
  let nombre = prompt("Introduce el nombre del personaje que quieres buscar:");
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
        listar(characters, "Personajes encontrados");
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
    listar(characters, "Personajes de Rick y Morty");
    // llama a la función para buscar un personaje por nombre
    getCbm();
  } else {
    alert("Error: " + getAllCharacters.statusText);
  }
});

getAllCharacters.send();
