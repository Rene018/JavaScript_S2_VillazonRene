<<<<<<< HEAD
const menuWelcome = () => {
  return `=============================================
         Simulador de Gasto Diario
=============================================
Seleccione una opcion:

1. Registrar nuevo gasto
2. Editar gasto
3. Eliminar gasto
4. Listar gastos
5. Calcular total de gastos
6. Generar reporte de gastos
7. Salir
=============================================`;
};
const menuRegistroGastos = () => {
  return `=============================================
            Registrar Nuevo Gasto
=============================================
Ingrese la informacion del gasto:
- Descripcion del gasto:`;
};
=======

import solicitarEntero from "./modules/validaciones.js";
>>>>>>> 4cc1b64e56d62bf73ccba77e4ae3cc4392cc3da3

const menuListarGastos = () => {
  return `=============================================
                Listar Gastos
=============================================
Seleccione una opcion para filtrar los gastos:

<<<<<<< HEAD
1. Ver todos los gastos
2. Filtrar por categoria
3. Filtrar por rango de fechas
4. Regresar al menu principal
=============================================`;
};
const menuCalculoGastos = () => {
  return `=============================================
          Calcular Total de Gastos
=============================================
Seleccione el periodo de cálculo:

1. Calcular total diario
2. Calcular total semanal
3. Calcular total mensual
4. Regresar al menu principal
=============================================`;
};

const menuReportesGastos = () => {
  return `=============================================
           Generar Reporte de Gastos
=============================================
Seleccione el tipo de reporte:

1. Reporte diario
2. Reporte semanal
3. Reporte mensual
4. Reportes guardados
5. Regresar al menu principal
=============================================`;
};

const submenuReportes = () => {
  return `=============================================
           Generar Reporte de Gastos
=============================================
Seleccione el tipo de reporte:

1. Ver en pantalla
2. Guardar
3. Regresar al menu anterior
=============================================`;
};

const submenuReportes2 = () => {
  return `=============================================
           Generar Reporte de Gastos
=============================================
Seleccione una opcion:

1. Buscar reporte
2. Eliminar
3. Regresar al menu anterior
=============================================`;
};

const menuSalir = () => {
  return `¿Desea salir del programa? (S/N):`;
};

const menuEditarGasto = () => {
  return `=============================================
               Editar Gasto
=============================================
Seleccione una opcion:

1. Buscar Gasto
2. Regresar al menu principal
=============================================`;
};

const menuEliminarGasto = () => {
  return `=============================================
               Eliminar Gasto
=============================================
Seleccione una opcion:

1. Eliminar Gasto
2. Regresar al menu principal
=============================================`;
};

const submenuConfirmarEliminacion = () => {
  return `¿Está seguro que desea eliminar este gasto? (S/N):`;
};
// Funcion para listar los gastos
const listarGastos = (gastos) => {
  if (gastos.length === 0) {
    prompt("No hay gastos registrados.");
    return;
  }
  let listado = "Listado de Gastos:\n";
  gastos.forEach((gasto) => {
    listado += `ID: ${gasto.id}, Descripcion: ${gasto.descripcion}, Categoria: ${gasto.categoria}, Cantidad: ${gasto.cantidad}, Fecha: ${gasto.fecha}\n`;
  });
  prompt(listado);
};
// Funcion para listar gastos por categoria
const listarGastosPorCategoria = (gastos, categoria) => {
  const gastosFiltrados = gastos.filter(
    (gasto) => gasto.categoria.toLowerCase() === categoria.toLowerCase()
  );
  if (gastosFiltrados.length === 0) {
    prompt(`No hay gastos registrados en la categoria: ${categoria}`);
    return;
  }
  let listado = `Listado de Gastos en la categoria "${categoria}":\n`;
  gastosFiltrados.forEach((gasto) => {
    listado += `ID: ${gasto.id}, Descripcion: ${gasto.descripcion}, Cantidad: ${gasto.cantidad}, Fecha: ${gasto.fecha}\n`;
  });
  prompt(listado);
};
// Funcion para listar gastos por rango de fechas
const listarGastosPorFecha = (gastos, fechaInicio, fechaFin) => {
  const fechaInicioObj = new Date(fechaInicio);
  const fechaFinObj = new Date(fechaFin);
  const gastosFiltrados = gastos.filter((gasto) => {
    const fechaGasto = new Date(gasto.fecha);
    return fechaGasto >= fechaInicioObj && fechaGasto <= fechaFinObj;
  });
  if (gastosFiltrados.length === 0) {
    prompt(`No hay gastos registrados entre ${fechaInicio} y ${fechaFin}`);
    return;
  }
  let listado = `Listado de Gastos entre ${fechaInicio} y ${fechaFin}:\n`;
  gastosFiltrados.forEach((gasto) => {
    listado += `ID: ${gasto.id}, Descripcion: ${gasto.descripcion}, Categoria: ${gasto.categoria}, Cantidad: ${gasto.cantidad}, Fecha: ${gasto.fecha}\n`;
  });
  prompt(listado);
};
let listGastos = [
  {
    id: 1,
    descripcion: "Compra de supermercado",
    categoria: "Alimentos",
    cantidad: 85000,
    fecha: "2025-07-15",
  },
  {
    id: 2,
    descripcion: "Pago de internet",
    categoria: "Servicios",
    cantidad: 60000,
    fecha: "2025-07-01",
  },
  {
    id: 3,
    descripcion: "Gasolina",
    categoria: "Transporte",
    cantidad: 120000,
    fecha: "2025-07-18",
  },
  {
    id: 4,
    descripcion: "Cena en restaurante",
    categoria: "Entretenimiento",
    cantidad: 45000,
    fecha: "2025-07-12",
  },
  {
    id: 5,
    descripcion: "Pago de celular",
    categoria: "Servicios",
    cantidad: 30000,
    fecha: "2025-07-05",
  },
  {
    id: 6,
    descripcion: "Suscripcion Netflix",
    categoria: "Entretenimiento",
    cantidad: 27000,
    fecha: "2025-07-10",
  },
  {
    id: 7,
    descripcion: "Compra de libros",
    categoria: "Educacion",
    cantidad: 98000,
    fecha: "2025-07-08",
  },
  {
    id: 8,
    descripcion: "Mantenimiento de vehiculo",
    categoria: "Transporte",
    cantidad: 200000,
    fecha: "2025-07-03",
  },
  {
    id: 9,
    descripcion: "Medicamentos",
    categoria: "Salud",
    cantidad: 40000,
    fecha: "2025-07-17",
  },
  {
    id: 10,
    descripcion: "Pago gimnasio",
    categoria: "Salud",
    cantidad: 75000,
    fecha: "2025-07-02",
  },
]; // Lista de gastos
let listReportes = []; // Lista de reportes
while (true) {
  let opcion = prompt(menuWelcome()); // Solicita una opcion valida del menu
  switch (opcion) {
    case "1":
      let descripcion = prompt(menuRegistroGastos()); // Solicita los datos del nuevo gasto

      let categoria = prompt(
        "- Categoria (ej. comida, transporte, entretenimiento, otros):"
      );
      let cantidad = prompt("- Monto del gasto:");
      let fecha = new Date(); // Obtiene la fecha actual

      let gasto = {
        id: listGastos.length + 1, // Asigna un ID único al gasto
        descripcion: descripcion,
        categoria: categoria,
        cantidad: cantidad,
        fecha: fecha.toISOString().split("T")[0], // Formatea la fecha a YYYY-MM-DD
      };
      let saveGasto = prompt(
        `¿Desea guardar el gasto? (S/N): ${JSON.stringify(gasto)}`
      );
      if (saveGasto.toLowerCase() == "s") {
        listGastos.push(gasto); // Agrega el gasto a la lista
        prompt(`Gasto registrado: ${JSON.stringify(gasto)}`);
      } else {
        prompt("Gasto no guardado.");
      }
    case "2":
      while (true) {
        let opcionEditar = prompt(menuEditarGasto());
        switch (opcionEditar) {
          case "1":
            let idGasto = prompt("Ingrese el ID del gasto a editar:");
            let gastoEncontrado = listGastos.find((g) => g.id == idGasto);
            if (gastoEncontrado) {
              let nuevaDescripcion = prompt("Nueva descripcion del gasto:");
              let nuevaCategoria = prompt("Nueva categoria del gasto:");
              let nuevaCantidad = prompt("Nueva cantidad del gasto:");
              let nuevaFecha = prompt("Nueva fecha del gasto (YYYY-MM-DD):");

              // Actualiza los datos del gasto
              gastoEncontrado.descripcion = nuevaDescripcion;
              gastoEncontrado.categoria = nuevaCategoria;
              gastoEncontrado.cantidad = nuevaCantidad;
              gastoEncontrado.fecha = nuevaFecha;

              prompt(`Gasto actualizado: ${JSON.stringify(gastoEncontrado)}`);
            } else {
              prompt("Gasto no encontrado.");
            }
            break;
          case "2":
            prompt("Regresando al menu principal...");
            break;
          default:
            prompt("Opcion no valida.");
        }
      }

    case "3":
      while (true) {
        let opcionEliminar = prompt(menuEliminarGasto());
        switch (opcionEliminar) {
          case "1":
            let idEliminar = prompt("Ingrese el ID del gasto a eliminar:");
            let gastoAEliminar = listGastos.find((g) => g.id == idEliminar);
            if (gastoAEliminar) {
              let confirmacion = prompt(submenuConfirmarEliminacion());
              if (confirmacion.toLowerCase() === "s") {
                listGastos = listGastos.filter((g) => g.id != idEliminar); // Elimina el gasto de la lista
                prompt(`Gasto eliminado: ${JSON.stringify(gastoAEliminar)}`);
              } else {
                prompt("Eliminacion cancelada.");
              }
            } else {
              prompt("Gasto no encontrado.");
            }
            break;
          case "2":
            prompt("Regresando al menu principal...");
            break;
          default:
            prompt("Opcion no valida.");
        }
      }
    case "4":
      while (true) {
        let opcionListar = prompt(menuListarGastos());
        switch (opcionListar) {
          case "1":
            listarGastos(listGastos); // Muestra todos los gastos
            break;
          case "2":
            let categoria = prompt("Ingrese la categoria a filtrar:");
            menuListarGastos(listGastos, categoria); // Filtra por categoria
            break;
          case "3":
            let fechaInicio = prompt(
              "Ingrese la fecha de inicio (YYYY-MM-DD):"
            );
            let fechaFin = prompt("Ingrese la fecha de fin (YYYY-MM-DD):");
            listarGastosPorFecha(listGastos, fechaInicio, fechaFin); // Filtra por rango de fechas
            break;
          case "4":
            prompt("Regresando al menu principal...");
            break;
          default:
            prompt("Opcion no valida.");
        }
      }

    case "5":
      while (true) {
        let opcionCalculo = prompt(menuCalculoGastos());
        switch (opcionCalculo) {
          case "1":
            let totalDiario = listGastos.reduce(
              (total, gasto) => total + gasto.cantidad,
              0
            );
            prompt(`Total de gastos diarios: ${totalDiario}`);
            break;
          case "2":
            let totalSemanal = listGastos.reduce(
              (total, gasto) => total + gasto.cantidad,
              0
            );
            prompt(`Total de gastos semanales: ${totalSemanal}`);
            break;
          case "3":
            let totalMensual = listGastos.reduce(
              (total, gasto) => total + gasto.cantidad,
              0
            );
            prompt(`Total de gastos mensuales: ${totalMensual}`);
            break;
          case "4":
            prompt("Regresando al menu principal...");
            break;
          default:
            prompt("Opcion no valida.");
        }
      }

    case "6":
      while (true) {
        let opcionReportes = prompt(menuReportesGastos());
        switch (opcionReportes) {
          case "1":
            let tipoReporte = prompt(
              "Ingrese el tipo de reporte (diario, semanal, mensual):"
            );
            let reporteDiario = listGastos.filter(
              (gasto) =>
                new Date(gasto.fecha).toISOString().split("T")[0] ===
                new Date().toISOString().split("T")[0]
            );
            if (reporteDiario.length > 0) {
              prompt(`Reporte diario: ${JSON.stringify(reporteDiario)}`);
            } else {
              prompt("No hay gastos registrados para hoy.");
            }
            break;
          case "2":
            let tipoReporteSemanal = prompt(
              "Ingrese el tipo de reporte (semanal):"
            );
            let reporteSemanal = listGastos.filter((gasto) => {
              let fechaGasto = new Date(gasto.fecha);
              let fechaActual = new Date();
              return (
                fechaGasto >=
                new Date(fechaActual.setDate(fechaActual.getDate() - 7))
              );
            });
            if (reporteSemanal.length > 0) {
              prompt(`Reporte semanal: ${JSON.stringify(reporteSemanal)}`);
            } else {
              prompt("No hay gastos registrados en la última semana.");
            }
            break;
          case "3":
            let tipoReporteMensual = prompt(
              "Ingrese el tipo de reporte (mensual):"
            );
            let reporteMensual = listGastos.filter((gasto) => {
              let fechaGasto = new Date(gasto.fecha);
              let fechaActual = new Date();
              return (
                fechaGasto.getMonth() === fechaActual.getMonth() &&
                fechaGasto.getFullYear() === fechaActual.getFullYear()
              );
            });
            if (reporteMensual.length > 0) {
              prompt(`Reporte mensual: ${JSON.stringify(reporteMensual)}`);
            } else {
              prompt("No hay gastos registrados en el mes actual.");
            }
            break;
          case "4":
            if (listReportes.length > 0) {
              prompt(`Reportes guardados: ${JSON.stringify(listReportes)}`);
            } else {
              prompt("No hay reportes guardados.");
            }
            break;
          case "5":
            prompt("Regresando al menu principal...");
            break;
          default:
            prompt("Opcion no valida.");
        }
      }
    case "7":
      while (true) {
        let opcion = prompt("¿Desea salir del programa? (s/n): ").toLowerCase();
        if (opcion === "s") {
          prompt("Saliendo del programa...");
          break;
        } else if (opcion === "n") {
          prompt("Regresando al menu principal...");
        } else {
          prompt(
            "Opcion no valida. Por favor, seleccione una opcion del menu."
          );
        }
      }

    default:
      prompt("Opcion no valida. Por favor, seleccione una opcion del menu.");
  }
}
=======
let soli= solicitarEntero()
console.log(soli);
>>>>>>> 4cc1b64e56d62bf73ccba77e4ae3cc4392cc3da3
