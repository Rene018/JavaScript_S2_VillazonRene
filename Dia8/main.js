function getSingleCharacter() {
  let getCharacterById = new XMLHttpRequest();
  let id = prompt("Introduce el id del personaje que quieres buscar:");
  getCharacterById.open("GET", `https://swapi.py4e.com/api/people/${id}`, true);

  getCharacterById.onreadystatechange = function () {
    try {
      if (this.readyState == 4 && this.status == 200) {
        let response = JSON.parse(getCharacterById.responseText);
        let character = response;
        console.log(character);
      }
    } catch (error) {
      console.log(error);
    }
  };

  getCharacterById.send();
}

function main() {
  let getAllCharacters = new XMLHttpRequest();
  getAllCharacters.onreadystatechange = function () {
    try {
      if (this.readyState == 4 && this.status == 200) {
        let response = JSON.parse(getAllCharacters.responseText);
        let characters = response.results;
        console.log(characters);
      }
    } catch (error) {
      console.log(error);
    }
  };
  getAllCharacters.open("GET", "https://swapi.py4e.com/api/people/", true);
  getAllCharacters.send();
}

getSingleCharacter();
