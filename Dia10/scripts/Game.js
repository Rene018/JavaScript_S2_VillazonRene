// game.js
import { NewDeck, NewCard } from "./DecksCustom.js";
import { NewPile, ListPile } from "./Pilescustom.js";
export let currentTurn = "jugador1";
export let deckId = "";
export let stayCount = 0;
export async function startGame() {
  console.log("Iniciando el juego...");
  const jugadores = [
    { nombre: "dealer", mano: [] },
    { nombre: "jugador1", mano: [] },
    { nombre: "jugador2", mano: [] },
  ];

  const deck = await NewDeck();
  deckId = deck["deck_id"];
  
  for (let i = 0; i < 2; i++) {
    const cards = await NewCard(deck["deck_id"], jugadores.length);

    jugadores.forEach((jugador, index) => {
      jugador["mano"].push(cards[index]);
    });
  }

  for (const jugador of jugadores) {
    const cardCodes = jugador["mano"].map((c) => c["code"]).join(",");
    
    await NewPile(deck["deck_id"], jugador["nombre"], cardCodes);
  }
  for (const jugador of jugadores) {
    jugador["mano"].forEach((e) => {
      console.log(e["value"]);
    });

    await drawCards(
      deck["deck_id"],
      jugador["nombre"],
      `${jugador["nombre"]}-imgs`
    );
  }
}
async function drawCards(deck_id, player, cont) {
    
    
  const pile = await ListPile(deck_id, player);
  console.log(pile);
  const cards = pile["piles"]?.[player]?.["cards"] || [];
  const cardsCont = document.getElementById(cont);
  cardsCont.innerHTML = "";
  cards.forEach((card) => {
    cardsCont.innerHTML += `
                <img src="${card["image"]}" alt="${card["code"]}" class="card">
        `;
  });
}
export async function hitCard(deck_id, currentTurn) {
  let sePaso = await isBusted(deck_id, currentTurn);
  if (sePaso) {
    console.log(`${currentTurn} ya se pasó de 21. No puede pedir más cartas.`);
    await changeTurn();
    return;
  }
  const cards = await NewCard(deck_id);
  console.log(cards);
  const nuevaCarta = cards[0];
  await NewPile(deck_id, currentTurn, nuevaCarta["code"]);

  await drawCards(deck_id, currentTurn, `${currentTurn}-imgs`);
  sePaso = await isBusted(deck_id, currentTurn);
  if (sePaso) {
    console.log(`${currentTurn} ya se pasó de 21. No puede pedir más cartas.`);
    await changeTurn();
    return;
  }
}

export function getCurrentTurn() {
  return currentTurn;
}

export async function changeTurn() {
  stayCount += 1;

  if (stayCount == 2) {
    console.log("Ambos jugadores terminaron. Turno del dealer...");
    await dealerTurn();
    stayCount = 0;
    return;
  }
  currentTurn = currentTurn === "jugador1" ? "jugador2" : "jugador1";
  console.log("Turno cambiado a:", currentTurn);
}
async function dealerTurn() {
  let dealerPoints = await getPointsFromPile(deckId, "dealer");

  while (dealerPoints < 17) {
    await hitCard(deckId, "dealer");
    dealerPoints = await getPointsFromPile(deckId, "dealer");
  }
  const jugadores = ["jugador1", "jugador2"];

  for (const jugador of jugadores) {
    const puntosJugador = await getPointsFromPile(deckId, jugador);
    showResults(jugador, puntosJugador, dealerPoints);
  }
}

async function getPointsFromPile(deck_id, player) {
  const pile = await ListPile(deck_id, player);
  const cards = pile["piles"]?.[player]?.["cards"] || [];

  let total = 0;
  let aces = 0;

  for (const card of cards) {
    const value = card["value"];
    if (["KING", "QUEEN", "JACK"].includes(value)) {
      total += 10;
    } else if (value === "ACE") {
      aces += 1;
      total += 11;
    } else {
      total += parseInt(value);
    }
  }

  while (total > 21 && aces > 0) {
    total -= 10;
    aces -= 1;
  }

  return total;
}
async function isBusted(deck_id, player) {
  const points = await getPointsFromPile(deck_id, player);
  return points > 21;
}

function showResults(jugador, puntosJugador, puntosDealer) {
  let resultado = "";

  if (puntosJugador > 21) {
    resultado = `${jugador} pierde (se pasó).`;
  } else if (puntosDealer > 21) {
    resultado = `${jugador} gana (dealer se pasó).`;
  } else if (puntosJugador > puntosDealer) {
    resultado = `${jugador} gana.`;
  } else if (puntosJugador < puntosDealer) {
    resultado = `${jugador} pierde.`;
  } else {
    resultado = `${jugador} empata.`;
  }

  alert(resultado); // O puedes mostrarlo en el DOM
}
