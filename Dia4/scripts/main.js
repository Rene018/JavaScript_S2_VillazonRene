let listIngredientes = [
  {
    nombre: "Pan",
    descripcion: "Pan de hamburguesa clásico",
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
    nombre: "Clásica",
    descripcion: "Hamburguesas clásicas y sabrosas",
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
    nombre: "Clásica",
    categoria: "Clásica",
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
let ingrediente = {
  nombre: "",
  descripcion: "",
  precio: "",
  stock: "",
};

function listarIngrediantes(lista) {
  let listado = "";
  for (let i = 0; i < 5 || lista.length; i++) {
    const element = lista[i];
    listado =
      listado +
      `Nombre: ${element.nombre}, descripcion: ${element.descripcion}, precio: ${element.precio}, stock: ${element.stock}
`;
  }
  return listado;
}
function editarIngrediantes(lista) {
  let encontrado = true;
  let buscado = prompt("");
  for (let i = 0; i < lista.length; i++) {
    const element = lista[i];
    if (element.nombre == buscado) {
      let nombre = prompt("Ingrese el nombre");
      let descripcion = prompt("Ingrese la descripcion");
      let precio = prompt("Ingrese el precio");
      let stock = prompt("Ingrese el stock");
      element.nombre = nombre || element.nombre;
      element.descripcion = descripcion || element.descripcion;
      element.precio = precio || element.precio;
      element.stock = stock || element.stock;
      encontrado = false;
    }
  }
  if (encontrado == false) {
    alert("INGREDIENTE NO ENCONTRADO");
  }
}

function eliminarIngrediantes(lista) {
  let encontrado = true;
  let buscado = prompt("");
  for (let i = 0; i < lista.length; i++) {
    const element = lista[i];
    if (element.nombre == buscado) {
      lista.splice(i, 1);
    }
  }
  if (encontrado == false) {
    alert("INGREDIENTE NO ENCONTRADO");
  }
}

console.log(listar(listIngredientes));
editar(listIngredientes);
alert(listar(listIngredientes));

while (true) {
  let op = prompt(`=============================================
  Hamburguesería 
=============================================
Seleccione una opción:

1. Registrar nuevo ingrediente
2. Listar ingredientes
3. Calcular total de ingredientes
4. Generar reporte de ingredientes
5. Salir
=============================================`);
  switch (op) {
    case "1":
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
      listIngredientes.push(ingrediente);
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
      let salir = prompt(
        "Esta seguro que desea salir de la aplicacion? (s/n)"
      ).toLowerCase();
      if (salir == "s") {
        break;
      }
    default:
      alert("INGRESE UN OPCION VALIDA");
      break;
  }
}
