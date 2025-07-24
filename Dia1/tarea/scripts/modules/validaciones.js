//from datetime import datetime
const solicitarEntero = (mensaje, min, max) => {
  while (true) {
    try {
      let valor = parseInt(prompt(` ${mensaje} (${min}-${max}): "))`));

      if (min <= valor <= max) {
        return valor;
      } else {
        log.error(`Error: la ${mensaje} debe estar entre ${min} y ${max}.`);
      }
    } catch (error) {
      log.error("Error: debes ingresar un número entero válido.", error);
    }
  }
};
const solicitarFecha = () => {};
while (true) {
  let fechaInput = prompt(`Ingrese la fecha en formato (DD/MM/YYYY): `);

  try {
    return fechaInput;
  } catch (error) {
    console.error(
      "Error: Debes ingresar una fecha válida en el formato DD/MM/YYYY."
    );
  }
}
