const TOKEN = "f3bcd7f8c9e58a3cd846743dac0feb87";
function getCharacter(token, name) {
  const getCharacter = new XMLHttpRequest();
  getCharacter.open(
    "GET",
    `https://www.superheroapi.com/api.php/${token}/search/${name}`,
    true
  );

  getCharacter.onreadystatechange = function () {
    try {
      if (this.readyState == 4 && this.status == 200) {
        const character = JSON.parse(getCharacter.responseText);
        const { results } = character;
        console.log(results);
        if (results) {
          showResults(results);
        } else {
          console.log("no hay resultados");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  getCharacter.send();
}

async function showResults(characterList) {
  const cardsCont = document.getElementById("card-cont");
  cardsCont.innerHTML = "";
  characterList.forEach((c) => {
    cardsCont.innerHTML += `
      <div class="card text-left col-2 pt-2">
        <img class="card-img-top" src=${c["image"]["url"]} alt="">
        <div class="card-body">
          <h4 class="card-title">${c["id"]}</h4>
          <p class="card-text">${c["name"]}</p>
        </div>
      </div>`;
  });
}

function main() {
  document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("busq").value;
    getCharacter(TOKEN, nombre);
  });
}
main();
