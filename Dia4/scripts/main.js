let listIngredientes = [
  {
    nombre: "Pan",
    descripcion: "Pan de hamburguesa clasico",
    precio: 2.5,
    stock: 500,
  },
  {
    nombre: "Carne de res",
    descripcion: "Carne de res jugosa y sabrosa",
    precio: 8,
    stock: 300,
  },
  {
    nombre: "Queso cheddar",
    descripcion: "Queso cheddar derretido",
    precio: 1.5,
    stock: 200,
  },
];
let listCategorias = [
  {
    nombre: "Clasica",
    descripcion: "Hamburguesas clasicas y sabrosas",
  },
  {
    nombre: "Vegetariana",
    descripcion: "Hamburguesas sin carne, perfectas para vegetarianos",
  },
  {
    nombre: "Gourmet",
    descripcion: "Hamburguesas gourmet con ingredientes premium",
  },
];
let listHamburgesas = [
  {
    nombre: "Clasica",
    categoria: "Clasica",
    ingredientes: [
      "Pan",
      "Carne de res",
      "Queso cheddar",
      "Lechuga",
      "Tomate",
      "Cebolla",
      "Mayonesa",
      "Ketchup",
    ],
    precio: 10,
    chef: "ChefA",
  },
  {
    nombre: "Vegetariana",
    categoria: "Vegetariana",
    ingredientes: [
      "Pan integral",
      "Hamburguesa de lentejas",
      "Queso suizo",
      "Espinacas",
      "Cebolla morada",
      "Aguacate",
      "Mayonesa vegana",
    ],
    precio: 8,
    chef: "ChefB",
  },
  {
    nombre: "Doble Carne",
    categoria: "Gourmet",
    ingredientes: [
      "Pan de sésamo",
      "Doble carne de res",
      "Queso cheddar",
      "Bacon",
      "Lechuga",
      "Cebolla caramelizada",
      "Salsa BBQ",
    ],
    precio: 12,
    chef: "ChefC",
  },
];
let listChefs = [
  {
    nombre: "ChefA",
    especialidad: "Carnes",
  },
  {
    nombre: "ChefB",
    especialidad: "Cocina Vegetariana",
  },
  {
    nombre: "ChefC",
    especialidad: "Gourmet",
  },
];
const menu = (value) => {
  return `=============================================
  Hamburguesería 
=============================================
Seleccione una opcion:

1. Registrar ${value}
2. Listar ${value}s
3. Editar ${value}s
4. Eliminar ${value}s
5. Salir al menu principal
=============================================`;
};
const salir = () => {
  let salir = prompt(
    "Esta seguro que desea salir de la aplicacion? (s/n)"
  ).toLowerCase();
  if (salir == "s") {
    alert("Gracias por usar la aplicacion");
    return false;
  } else if (salir == "n") {
    alert("Continuando en la aplicacion");
  } else {
    alert("Opcion no valida");
  }
};
const regresar = () => {
  let salir = prompt(`=============================================
        Salir al menu principal 
=============================================
        ¿Desea salir? (s/n)`).toLowerCase();
  if (salir == "s") {
    return false;
  } else if (salir == "n") {
    alert("Continuando en el menu de ingredientes");
  } else {
    alert("Opcion no valida");
  }
};
/* CRUD INGREDIENTES*/
function registrarIngredientes(lista) {
  let nombre = prompt(`=============================================
  Registrar ingrediente
=============================================
  Ingrese el nombre`);
  let descripcion = prompt("Ingrese la descripcion");
  let precio = prompt("Ingrese el precio");
  let stock = prompt("Ingrese el stock");
  let ingrediente = {
    nombre: nombre,
    descripcion: descripcion,
    precio: precio,
    stock: stock,
  };
  let save = prompt(
    `=============================================
    Registrar ingrediente
=============================================
    ¿Desea guardar el ingrediente? (s/n)`
  ).toLowerCase();
  if (save == "s") {
    alert("Ingrediente guardado correctamente");
    lista.push(ingrediente);
    return lista;
  }
  if (save == "n") {
    alert("Ingrediente no guardado");
  }
  alert("Ingrediente registrado correctamente");
}
function listarIngrediantes(lista) {
  let listado = "";
  for (let i = 0; i < lista.length; i++) {
    const element = lista[i];
    listado += `Nombre: ${element.nombre}, Descripcion: ${element.descripcion}, Precio: ${element.precio}, Stock: ${element.stock}\n`;
  }
  alert(listado || "No hay ingredientes registrados");
}
function editarIngrediantes(lista) {
  let encontrado = false;
  let buscado = prompt("Ingrese el nombre del ingrediente a editar");
  for (let i = 0; i < lista.length; i++) {
    const element = lista[i];
    if (element.nombre == buscado) {
      encontrado = true;
      let nuevoNombre = prompt("Ingrese el nuevo nombre", element.nombre);
      let nuevaDescripcion = prompt(
        "Ingrese la nueva descripcion",
        element.descripcion
      );
      let nuevoPrecio = prompt("Ingrese el nuevo precio", element.precio);
      let nuevoStock = prompt("Ingrese el nuevo stock", element.stock);
      lista[i] = {
        nombre: nuevoNombre,
        descripcion: nuevaDescripcion,
        precio: nuevoPrecio,
        stock: nuevoStock,
      };
      alert("Ingrediente actualizado correctamente");
    }
  }
  if (!encontrado) {
    alert("Ingrediente no encontrado");
  }
}
function eliminarIngrediantes(lista) {
  let encontrado = false;
  let buscado = prompt("Ingrese el nombre del ingrediente a eliminar");
  for (let i = 0; i < lista.length; i++) {
    const element = lista[i];
    if (element.nombre == buscado) {
      encontrado = true;
      lista.splice(i, 1);
      alert("Ingrediente eliminado correctamente");
      break;
    }
  }
  if (!encontrado) {
    alert("Ingrediente no encontrado");
  }
}
/* CRUD CATEGORIAS*/
function registrarCategorias(lista) {
  let nombre = prompt(`=============================================
  Registrar categoría
=============================================
        Ingrese el nombre`);
  let descripcion = prompt("Ingrese la descripcion");
  let categoria = {
    nombre: nombre,
    descripcion: descripcion,
  };
  let save = prompt(
    `=============================================
    Registrar categoría
=============================================
    ¿Desea guardar la categoría? (s/n)`
  ).toLowerCase();
  if (save == "s") {
    alert("Categoría guardada correctamente");
    lista.push(categoria);
    return lista;
  }
  if (save == "n") {
    alert("Categoría no guardada");
  }
  alert("Categoría registrada correctamente");
}
function listarCategorias(lista) {
  let listado = "";
  for (let i = 0; i < lista.length; i++) {
    const element = lista[i];
    listado += `Nombre: ${element.nombre}, Descripcion: ${element.descripcion}\n`;
  }
}
function editarCategorias(lista) {
  let encontrado = false;
  let buscado = prompt("Ingrese el nombre de la categoría a editar");
  for (let i = 0; i < lista.length; i++) {
    const element = lista[i];
    if (element.nombre == buscado) {
      encontrado = true;
      let nuevoNombre = prompt("Ingrese el nuevo nombre", element.nombre);
      let nuevaDescripcion = prompt(
        "Ingrese la nueva descripcion",
        element.descripcion
      );
      lista[i] = {
        nombre: nuevoNombre,
        descripcion: nuevaDescripcion,
      };
      alert("Categoría actualizada correctamente");
    }
  }
  if (!encontrado) {
    alert("Categoría no encontrada");
  }
}
function eliminarCategorias(lista) {
  let encontradoD = false;
  let buscadoD = prompt("Ingrese el nombre de la categoría a editar");
  for (let i = 0; i < lista.length; i++) {
    const element = lista[i];
    if (element.nombre == buscadoD) {
      encontradoD = true;
      lista.splice(i, 1);
      alert("Categoría eliminada correctamente");
    }
  }
  if (!encontradoD) {
    alert("Categoría no encontrada");
  }
}
/* CRUD HAMBURGESA*/
function registrarHamburguesa(lista) {
  let nombre = prompt(`=============================================
  Registrar hamburguesa
  =============================================
  Ingrese el nombre`);
  let categoria = prompt("Ingrese la categoria");
  let ingredientes = prompt(
    "Ingrese los ingredientes (separados por comas)"
  ).split(",");
  let precio = prompt("Ingrese el precio");
  let chef = prompt("Ingrese el nombre del chef");
  let hamburguesa = {
    nombre: nombre,
    categoria: categoria,
    ingredientes: ingredientes,
    precio: precio,
    chef: chef
  };
  let save = prompt(
    `=============================================
  Registrar hamburguesa
  =============================================
  ¿Desea guardar la hamburguesa? (s/n)`
  ).toLowerCase();
  if (save == "s") {
    alert("Hamburguesa guardada correctamente");
    lista.push(hamburguesa);
  }
  if (save == "n") {
    alert("Hamburguesa no guardada");
  }
}
function listarHamburguesa(lista) {
  let listado = "";
  for (let i = 0; i < lista.length; i++) {
    const element = lista[i];
    listado += `Nombre: ${element.nombre}, Descripcion: ${element.descripcion}\n`;
  }
}
function editarHamburguesa(lista) {
  let encontrado = false;
  let buscado = prompt("Ingrese el nombre de la categoría a editar");
  for (let i = 0; i < lista.length; i++) {
    const element = lista[i];
    if (element.nombre == buscado) {
      encontrado = true;
      let nuevoNombre = prompt("Ingrese el nuevo nombre", element.nombre);
      let nuevaDescripcion = prompt(
        "Ingrese la nueva descripcion",
        element.descripcion
      );
      lista[i] = {
        nombre: nuevoNombre,
        descripcion: nuevaDescripcion,
      };
      alert("Categoría actualizada correctamente");
    }
  }
  if (!encontrado) {
    alert("Categoría no encontrada");
  }
}
function eliminarHamburguesa(lista) {
  let encontradoD = false;
  let buscadoD = prompt("Ingrese el nombre de la categoría a editar");
  for (let i = 0; i < lista.length; i++) {
    const element = lista[i];
    if (element.nombre == buscadoD) {
      encontradoD = true;
      lista.splice(i, 1);
      alert("Categoría eliminada correctamente");
    }
  }
  if (!encontradoD) {
    alert("Categoría no encontrada");
  }
}
let bol = true;
while (bol) {
  let eano = true;
  let op = prompt(`=============================================
  Hamburguesería 
=============================================
Seleccione una opcion:

1. Menu Categorias
2. Menu Categorías
3. Menu Hamburguesas
4. Menu Chefs

5. Salir
=============================================`);
  switch (op) {
    case "1":
      eano = true;
      while (eano) {
        let op = prompt(menu("ingrediente"));
        switch (op) {
          case "1":
            listIngredientes = registrarIngredientes(listIngredientes);
            break;
          case "2":
            listarIngrediantes(listIngredientes);
            break;
          case "3":
            editarIngrediantes(listIngredientes);
            break;
          case "4":
            eliminarIngrediantes(listIngredientes);
            break;
          case "5":
            eano = regresar();
            break;
          default:
            alert("INGRESE UN OPCION VALIDA");
            break;
        }
      }
      break;
    case "2":
      eano = true;
      while (eano) {
        let op = prompt(menu("categoría"));
        switch (op) {
          case "1":
            listCategorias = registrarCategorias(listCategorias);
          case "2":
            listarCategorias(listCategorias);
          case "3":
            editarCategorias(listCategorias);
          case "4":
            eliminarCategorias(listCategorias);
          case "5":
            eano = regresar();
            break;
          default:
            alert("INGRESE UN OPCION VALIDA");
            break;
        }
      }
      break;
    case "3":
      eano = true;
      while (eano) {
        let op = prompt(menu("hamburguesa"));
        switch (op) {
          case "1":
            registrarHamburguesa(listHamburgesas)
          case "2":
            console.log(listHamburgesas);
            let listado = "";
            for (let i = 0; i < listHamburgesas.length; i++) {
              const element = listHamburgesas[i];
              listado += `Nombre: ${element.nombre}, Categoria: ${
                element.categoria
              }, Ingredientes: ${element.ingredientes.join(", ")}, Precio: ${
                element.precio
              }, Chef: ${element.chef}\n`;
            }
            alert(listado || "No hay hamburguesas registradas");
            break;
          case "3":
            let encontrado = false;
            let buscado = prompt(
              "Ingrese el nombre de la hamburguesa a editar"
            );
            for (let i = 0; i < listHamburgesas.length; i++) {
              const element = listHamburgesas[i];
              if (element.nombre == buscado) {
                encontrado = true;
                let nuevoNombre = prompt(
                  "Ingrese el nuevo nombre",
                  element.nombre
                );
                let nuevaCategoria = prompt(
                  "Ingrese la nueva categoria",
                  element.categoria
                );
                let nuevosIngredientes = prompt(
                  "Ingrese los nuevos ingredientes (separados por comas)",
                  element.ingredientes.join(", ")
                ).split(",");
                let nuevoPrecio = prompt(
                  "Ingrese el nuevo precio",
                  element.precio
                );
                let nuevoChef = prompt(
                  "Ingrese el nuevo nombre del chef",
                  element.chef
                );
                listHamburgesas[i] = {
                  nombre: nuevoNombre,
                  categoria: nuevaCategoria,
                  ingredientes: nuevosIngredientes,
                  precio: nuevoPrecio,
                  chef: nuevoChef,
                };
                alert("Hamburguesa actualizada correctamente");
              }
            }
            if (!encontrado) {
              alert("Hamburguesa no encontrada");
            }
            break;
          case "4":
            let encontradoD = false;
            let buscadoD = prompt(
              "Ingrese el nombre de la hamburguesa a eliminar"
            );
            for (let i = 0; i < listHamburgesas.length; i++) {
              const element = listHamburgesas[i];
              if (element.nombre == buscadoD) {
                encontradoD = true;
                listHamburgesas.splice(i, 1);
                alert("Hamburguesa eliminada correctamente");
              }
            }
            if (!encontradoD) {
              alert("Hamburguesa no encontrada");
            }
            break;
          case "5":
            eano = regresar();
            break;
        }
      }
      break;
    case "4":
      eano = true;
      while (eano) {
        let op = prompt(menu("chef"));
        switch (op) {
          case "1":
            let nombre = prompt(`=============================================
              Registrar chef
              =============================================
              Ingrese el nombre`);
            let especialidad = prompt("Ingrese la especialidad");
            let chef = {
              nombre: nombre,
              especialidad: especialidad,
            };
            let save = prompt(
              `=============================================
              Registrar chef
              =============================================
              ¿Desea guardar el chef? (s/n)`
            ).toLowerCase();
            if (save == "s") {
              alert("Chef guardado correctamente");
              listChefs.push(chef);
              break;
            }
            if (save == "n") {
              alert("Chef no guardado");
              break;
            }
            break;
          case "2":
            let listado = "";
            for (let i = 0; i < listChefs.length; i++) {
              const element = listChefs[i];
              listado += `Nombre: ${element.nombre}, Especialidad: ${element.especialidad}\n`;
            }
            alert(listado || "No hay chefs registrados");
            break;
          case "3":
            let encontrado = false;
            let buscado = prompt("Ingrese el nombre del chef a editar");
            for (let i = 0; i < listChefs.length; i++) {
              const element = listChefs[i];
              if (element.nombre == buscado) {
                encontrado = true;
                let nuevoNombre = prompt(
                  "Ingrese el nuevo nombre",
                  element.nombre
                );
                let nuevaEspecialidad = prompt(
                  "Ingrese la nueva especialidad",
                  element.especialidad
                );
                listChefs[i] = {
                  nombre: nuevoNombre,
                  especialidad: nuevaEspecialidad,
                };
                alert("Chef actualizado correctamente");
              }
            }
            if (!encontrado) {
              alert("Chef no encontrado");
            }
            break;
          case "4":
            let encontradoD = false;
            let buscadoD = prompt("Ingrese el nombre del chef a eliminar");
            for (let i = 0; i < listChefs.length; i++) {
              const element = listChefs[i];
              if (element.nombre == buscadoD) {
                encontradoD = true;
                listChefs.splice(i, 1);
                alert("Chef eliminado correctamente");
              }
            }
            if (!encontradoD) {
              alert("Chef no encontrado");
            }
            break;
          case "5":
            eano = regresar();
            break;
        }
      }
      break;
    case "5":
      bol = salir();
      break;
    default:
      break;
  }
}
