import {
  startGame,
  hitCard,
  getCurrentTurn,
  changeTurn,
  deckId,
} from "./scripts/Game.js";
const hitBtn = document.getElementById("hit");
const stayBtn = document.getElementById("stay");
const continueBtn = document.getElementById("continue-btn");
async function main() {
  try {
    await startGame();
    console.log("Juego iniciado correctamente.");

    hitBtn.addEventListener("click", async () => {
      await hitCard(deckId, getCurrentTurn());
    });

    stayBtn.addEventListener("click", () => {
      changeTurn();
    });
    continueBtn.addEventListener("click", () => {
      startGame();
    });
  } catch (error) {
    console.error("No se pudo obtener un nuevo mazo:", error);
  }
}

main();
