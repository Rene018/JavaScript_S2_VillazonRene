//from datetime import datetime
const solicitarEntero =(mensaje,min, max)=>{
    while (true) {
        try {
           let valor = prompt(` ${mensaje} (${min}-${max}): "))`)
            if min <= valor <= max:
                return valor
            else:
                print(f"Error: la {mensaje} debe estar entre {min} y {max}.")
        } catch (ValueError) {
            console.log("Error: debes ingresar un número entero válido.")
        }
    }
}        
def solicitarFecha(etiqueta=""):
    print(f"-{etiqueta}".strip())
    while True:
        dia = solicitarEntero("Día", 1, 31)
        mes = solicitarEntero("Mes", 1, 12)
        año = solicitarEntero("Año", 1900, 2100)
        try:
            fecha = datetime(año, mes, dia).date()
            return fecha
        except ValueError:
            print("Error: la fecha ingresada no es válida. Intenta nuevamente.")