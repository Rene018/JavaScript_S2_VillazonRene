function makeCard(character) {
  const cardContainer = document.querySelector("#all-data");

  cardContainer.innerHTML = `<div class="card">
                <div>
                    <p>name</p>
                    <p>${character.name}</p>
                </div>

                <div>
                    <p>height</p>
                    <p>${character.height}</p>
                </div>

                <div>
                    <p>mass</p>
                    <p>${character.mass}</p>
                </div>
                <div>
                    <p>hair_color</p>
                    <p>${character.hair_color}</p>
                </div>

                <div>
                    <p>skin_color</p>
                    <p>${character.skin_color}</p>
                </div>

                <div>
                    <p>eye_color</p>
                    <p>${character.eye_color}</p>
                </div>
                <div>
                    <p>birth_year</p>
                    <p>${character.birth_year}</p>
                </div>

                <div>
                    <p>Mass</p>
                    <p>${character.mass}</p>
                </div>

                <div>
                    <p>gender</p>
                    <p>${character.gender}</p>
                </div>
                <div>
                    <p>homeworld</p>
                    <p>${character.homeworld}</p>
                </div>

                <div>
                    <p>films</p>
                    <p${character.films.join(", ")}</p>
                </div>

                <div>
                    <p>species</p>
                    <p>${character.species}</p>
                </div>

            </div>`;
}

function getSingleCharacter() {
  let getCharacterById = new XMLHttpRequest();
  let id = prompt("Introduce el id del personaje que quieres buscar:");
  getCharacterById.open("GET", `https://swapi.py4e.com/api/people/${id}`, true);

  getCharacterById.onreadystatechange = function () {
    try {
      if (this.readyState == 4 && this.status == 200) {
        let response = JSON.parse(getCharacterById.responseText);
        let character = response;
        console.log(character.films.join(", "));
        makeCard(character);
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