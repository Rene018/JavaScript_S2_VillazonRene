//Importaciones de módulos necesarios

import * as menus from "./modules/menus.js";
import * as db_operations from "./modules/db_operations.js";
import * as validaciones from "./modules/validaciones.js";
import * as m_functions from "./modules/m_functions.js";
import * as sm_functions from "./modules/sm_functions.js";



//from tabulate import tabulate
//from datetime import datetime



while (true) {
    let listGastos = abrirGastosDB()      // Carga la lista de gastos desde la base de datos
    let listReportes = abrirReportesDB()  // Carga la lista de reportes desde la base de datos

    print(menuWelcome())
    opcion = solicitarEntero('opcion', 1, 7)  // Solicita una opción válida del menú
    switch (opcion) {
        case '1':
            print(menuRegistroGastos())
            registrarGasto(listGastos)
            break;
        case '2':

            break;
        case '3':

            break;
        case '4':

            break;
        case '5':

            break;
        case '6':

            break;
        case '7':

            break;

        default:
            break;
    }
    if opcion == 1:


    elif opcion == 2:
    actualizarGasto(listGastos)

    elif opcion == 3:
    eliminargasto(listGastos)

    elif opcion == 4:
    listarGastos(listGastos)

    elif opcion == 5:
    calcularGastos(listGastos)

    elif opcion == 6:
    reportesGastos(listGastos, listReportes)

    elif opcion == 7:
    print(menuSalir())
    opcion = input('>>>').lower()
    if opcion == 's':
        break  // Finaliza el programa
}


let lista=[]