export function NewPile(deck_id, pile_name, card_codes) {
  return new Promise((resolve, reject) => {
    let getPile = new XMLHttpRequest();
    getPile.open(
      "GET",
      `https://deckofcardsapi.com/api/deck/${deck_id}/pile/${pile_name}/add/?cards=${card_codes}`,
      true
    );

    getPile.onreadystatechange = function () {
      try {
        if (this.readyState == 4 && this.status == 200) {
          const response = JSON.parse(getPile.responseText);
          const pile = response;
            resolve(pile);
        }
      } catch (error) {
        reject(error);
      }
    };

    getPile.send();
  });
}
export function ListPile(deck_id, pile_name) {
  return new Promise((resolve, reject) => {
    let getPile = new XMLHttpRequest();
    getPile.open(
      "GET",
      `https://deckofcardsapi.com/api/deck/${deck_id}/pile/${pile_name}/list/`,
      true
    );

    getPile.onreadystatechange = function () {
      try {
        if (this.readyState == 4 && this.status == 200) {
          const response = JSON.parse(getPile.responseText);
          const pile = response;
          console.log(pile);
          
          resolve(pile);
        }
      } catch (error) {
        reject(error);
      }
    };

    getPile.send();
  });
}