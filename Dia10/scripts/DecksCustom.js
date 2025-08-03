export function NewDeck() {
  return new Promise((resolve, reject) => {
    let getDeck = new XMLHttpRequest();
    getDeck.open(
      "GET",
      `https://deckofcardsapi.com/api/deck/new/shuffle/`,
      true
    );

    getDeck.onreadystatechange = function () {
      try {
        if (this.readyState == 4 && this.status == 200) {
          const deck = JSON.parse(getDeck.responseText);
          resolve(deck);
        }
      } catch (error) {
        reject(error);
      }
    };

    getDeck.send();
  });
}

export function NewCard(deck_id, count = "1") {
  return new Promise((resolve, reject) => {
    let getCard = new XMLHttpRequest();
    getCard.open(
      "GET",
      `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=${count}`,
      true
    );

    getCard.onreadystatechange = function () {
      try {
        if (this.readyState == 4 && this.status == 200) {
          const response = JSON.parse(getCard.responseText);
          const card = response["cards"];

          resolve(card);
        }
      } catch (error) {
        reject(error);
      }
    };

    getCard.send();
  });
}


