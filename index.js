//SECCION NUMERO DE MESA
function validarNumeroMesa(event) {
    event.preventDefault();
    var numero = document.getElementById("numeroMesa").value;
    if (numero == ""){
        alert("ingrese el numero de mesa");
        return false;
    }
    return true;
    
}


function storeData() {
    var numero = document.getElementById("numeroMesa").value;
    sessionStorage.setItem("numeroMesa", numero);
    console.log("el numero de mesa es: ", numero);
};



//SECCION ACCORDEON DE LOS TITULOS

let acordeon = document.getElementsByClassName("menu__background")
let menu__desplegable = document.getElementsByClassName("menu__desplegable")

for (let i = 0; i< acordeon.length; i++){
    acordeon[i].addEventListener("click",function(){
        this.classList.toggle("active");
        let menu__desplegable = this.nextElementSibling; //selecciona el hijo mas cercano
        if (menu__desplegable.style.display == "block") {
            menu__desplegable.style.display = "none";
        }
        else {
            menu__desplegable.style.display = "block";
        }
    });
};



// AGREGAR HTML POR SECCIONES
    // SECCION DESAYUNO
    let botonesAgregar = document.querySelectorAll(".producto-agregar")



 const productosTotales = [
    {id: 1, Nombre: "Desayuno Mattone", precio: "2050", menuIngredientes: "Waffle de Harina Integral,Huevos Revueltos,Panceta,Palta y Sesamo. Cafe con Leche, Yogurt Natural con Granola, ensalada de Fruta. Jugo de Naranja."
},
    {id: 2, Nombre: "Desayuno Saludable", precio: "1750", menuIngredientes: "Wafle de Harina Integral, Huevos revueltos, Palta y sésamo. café con Leche, Yogurt Natural con Granola. Jugo de Naranja."
},
    {id: 3, Nombre: "Desayuno Tradicional", precio: "1100", menuIngredientes: "Cafe con Leche con 3 Medialunas y jugo de Naranja."
},
    {id: 4, Nombre: "Yogur Frutas y granola", precio: "750", menuIngredientes: "Granola-Yogur-frutas de estacion."
},
    {id: 5, Nombre: "Yogur Con Frutos Rojos", precio: "350", menuIngredientes: "Yogur y Frutos Rojos frescos"
},
]
const productosMenu = document.querySelector("#productosMenu")

function cargarDesayuno(){
    productosTotales.forEach(productosTotales => {

        const div = document.createElement("div");
        div.classList.add("menu__container");
        div.innerHTML = `<div class="menu__tittle">
                            <p>${productosTotales.Nombre}</p>
                            <p>$${productosTotales.precio}</p>
                        </div>
                        <div class="menu__ingredientes-Container">
                            <p class="menu__ingredientes">${productosTotales.menuIngredientes}
                            </p>

                        </div>`;

                        productosMenu.append(div);
    });
}
{/* <button id = "${productosTotales.id}" class="carritoAgregar producto-agregar">Agregar</button> */}
cargarDesayuno();




// SECCION CAFETERIA 
const cafeteria = [
    {id: 6, Nombre: "cafe", precio: "350", menuIngredientes: ""
    },
    {id: 7, Nombre: "cafe doble", precio: "450", menuIngredientes: ""
    },
    {id: 8, Nombre: "Café con leche", precio: "400", menuIngredientes: ""
    },
    {id: 9, Nombre: "Café con crema", precio: "400", menuIngredientes: ""
    },
    {id: 10, Nombre: "Capuccino Italiano", precio: "450", menuIngredientes: ""
    },
    {id: 11, Nombre: "Té", precio: "350", menuIngredientes: ""
    },
    {id: 12, Nombre: "Submarino", precio: "550", menuIngredientes: ""
    },
    
]

const cafeteriaMenu = document.querySelector("#cafeteriaMenu")

function cargarCafeteria(){
    cafeteria.forEach(cafeteria => {

        const div = document.createElement("div");
        div.classList.add("menu__container");
        div.innerHTML = `<div class="menu__tittle">
                            <p>${cafeteria.Nombre}</p>
                            <p>$${cafeteria.precio}</p>
                        </div>
                        <div class="menu__ingredientes-Container">
                            <p class="menu__ingredientes">${cafeteria.menuIngredientes}
                            </p>

                        </div>`;

                        cafeteriaMenu.append(div);
    });
}
{/* <button id = "${cafeteria.id}" class="carritoAgregar producto-agregar">Agregar</button> */}
cargarCafeteria()



//SECCION WAFFLES Y PANQUEQUES

const wafflesPanqueques = [
    {id: 13, Nombre: "Dulce de leche o crema", precio: "850", menuIngredientes: ""
    },
    {id: 14, Nombre: "Dulce de leche con nuez o almendras", precio: "950", menuIngredientes: "Masa de Waffle Con dulce de Leche o almendras"
    },
    {id: 15, Nombre: "Dulce de leche, chocolate, frutas y crema", precio: "1000", menuIngredientes: "Masa de Waffle dulce de leche, Frutas, Crema Y salsa de Chocolate"
    },
    {id: 16, Nombre: "MATTONE", precio: "1200", menuIngredientes: "Frutas, crema, chocolate, frutos rojos, nuez"
    },
    {id: 17, Nombre: "Waffe Pinamar", precio: "1100", menuIngredientes: "Salsa de dulce de leche tipo cabsha, Frutillas en Trozos"
    },
    {id: 18, Nombre: "Waffle Oreo", precio: "1200", menuIngredientes: "Masa de Waffle, Helado de Crema Americana, Galletitas Oreo, pedacitos de Chocolate"
    },
    {id: 19, Nombre: "Waffle Nutella", precio: "1400", menuIngredientes: "Masa de Waffle, Nutella y Frutos Rojos"
    },
    {id: 20, Nombre: "Waffle Bon Bon", precio: "1200", menuIngredientes: "Dulce de leche y trozos de bon Bon"
    },
]

const wafflesPanquequesMenu = document.querySelector("#wafflesPanqueques")

function cargarWafflesPanqueques(){
    wafflesPanqueques.forEach(wafflesPanqueques => {

        const div = document.createElement("div");
        div.classList.add("menu__container");
        div.innerHTML = `<div class="menu__tittle">
                            <p>${wafflesPanqueques.Nombre}</p>
                            <p>$${wafflesPanqueques.precio}</p>
                        </div>
                        <div class="menu__ingredientes-Container">
                            <p class="menu__ingredientes">${wafflesPanqueques.menuIngredientes}</p>
                        </div>`;

                        wafflesPanquequesMenu.append(div);
    });
}
{/* <button id="${wafflesPanqueques.id}" class="carritoAgregar producto-agregar">Agregar</button> */}

cargarWafflesPanqueques()


//SECCION PIZZAS Y EMPANADAS

const pizzas = [
    {id: 21, Nombre: "Muzzarella", precioGrande:"2150", precioChico: "1650", menuIngredientes: ""
    },
    {id: 22, Nombre: "Margarita", precioGrande:"2700", precioChico: "2150", menuIngredientes: "Muzzarella, albahaca y olivas negras"
    },
    {id: 23, Nombre: "Napolitana", precioGrande:"2150", precioChico: "2310", menuIngredientes: "Muzzarella, jamón, tomate y albahaca"
},
    {id: 24, Nombre: "4 Quesos", precioGrande:"3190", precioChico: "2700", menuIngredientes: "Muzzarella provolone, roquefort, sardo"
    },
    {id: 25, Nombre: "Especial", precioGrande:"2810", precioChico: "2420", menuIngredientes: "Muzzarella, Jamón y Morrón"
    },
    {id: 26, Nombre: "Premium", precioGrande:"3140", precioChico: "2530", menuIngredientes: "Muzzarella, jamón crudo y rúcula"
    },
    {id: 27, Nombre: "Fugazzeta", precioGrande:"2420", precioChico: "2260", menuIngredientes: "Muzzarella, cebolla"
    },
    {id: 28, Nombre: "Vegetariana", precioGrande:"2370", precioChico: "1980", menuIngredientes: "Muzzarella, cebolla, calabaza asada, rúcula"
    },
    {id: 29, Nombre: "Ananá", precioGrande:"2920", precioChico: "2420", menuIngredientes: "Muzzarella, jamón y ananá"
    },
    {id: 30, Nombre: "Palmitos", precioGrande:"2920", precioChico: "2480", menuIngredientes: "Muzzarella, jamón, palmitos, salsa golf"
    },
    {id: 31, Nombre: "Huevo", precioGrande:"3140", precioChico: "2310", menuIngredientes: "Muzzarella, jamón, huevo"
    },
    {id: 32, Nombre: "Champignones", precioGrande:"3140", precioChico: "2530", menuIngredientes: "Muzzarella, huevo, jamón, champognones"
    },
    {id: 33, Nombre: "Cheddar", precioGrande:"3470", precioChico: "2700", menuIngredientes: "Muzzarella, queso cheddar, panceta, BBQ"
    },
    {id: 34, Nombre: "Americana", precioGrande:"2590", precioChico: "2040", menuIngredientes: "Muzzarella, tomate, panceta, rúcula"
    },
    {id: 35, Nombre: "Calabresa", precioGrande:"2700", precioChico: "2260", menuIngredientes: "Muzzarella, longaniza, olivas negras"
    },
    {id: 36, Nombre: "Popeye", precioGrande:"2530", precioChico: "2260", menuIngredientes: "Muzzarella, espinaca fresca, parmesano, choclo"
    },
    {id: 37, Nombre: "Del Mar", precioGrande:"4240", precioChico: "3360", menuIngredientes: "Muzzarella, camarones, tomates, provenzal"
    },
    {id: 38, Nombre: "De Pollo", precioGrande:"2810", precioChico: "2260", menuIngredientes: "Muzzarella, salteado de verduras, pollo"
    },
    {id: 39, Nombre: "Pinamar", precioGrande:"3360", precioChico: "2700", menuIngredientes: "Muzzarella, rúcula, jamón crudo, queso brie"
    },
    {id: 41, Nombre: "Rúcula", precioGrande:"2810", precioChico: "2420", menuIngredientes: "Muzzarella, rúcula, queso parmesano"
    },
    {id: 42, Nombre: "GRAN MATTONE", precioGrande:"3910", precioChico: "2810", menuIngredientes: "Muzzarella, jamón, tomate, parmesano, panceta crocante, huevo frito"
    },

]

const pizzasMenu = document.querySelector("#pizzas")

function cargarpizzasEmpanadas(){
    pizzas.forEach(pizzas => {

        const div = document.createElement("div");
        div.classList.add("menu__container");
        div.innerHTML = `<p class="menu__tittle">${pizzas.Nombre}</p>
                        <p class="menu__ingredientes">${pizzas.menuIngredientes}</p>
                        <div class="menu__ingredientes menu__pizzas">
                            <p class="menu__pizzas-tituloMargin">Pizza Grande de 8 Porciones</p>
                            <p class="menu__pizzas-tituloMargin">$${pizzas.precioGrande}</p>
                        </div>
                        <div class="menu__ingredientes menu__pizzas">
                            <p class="menu__pizzas-tituloMargin">Pizza Chica de 4 Porciones</p>
                            <p class="menu__pizzas-tituloMargin">$${pizzas.precioChico}</p>
                        </div>

                        `;
                        // <button id="${pizzas.id}" class="carritoAgregar producto-agregar">Agregar</button>

                        pizzasMenu.append(div);
    });
}
{/* <button id="${pizzas.id}" class="carritoAgregar producto-agregar">Agregar</button> */}
cargarpizzasEmpanadas()

const empanadas = [
    {id: 43, Nombre: "Empanadas", precio:"390", menuIngredientes: "Pollo, carne, verdura, capresse, jamón y queso"
    },
    {id: 44, Nombre: "Faina", precio:"440", menuIngredientes: ""
    },
]

const empanadasMenu = document.querySelector("#empanadas")

function cargarEmpanadas(){
    empanadas.forEach(empanadas => {

        const div = document.createElement("div");
        div.classList.add("menu__container");
        div.innerHTML = `<div class="menu__tittle">
                                <p>${empanadas.Nombre}</p>
                                <p>$${empanadas.precio}</p>
                        </div>
                        <div>
                            <p class="menu__ingredientes">${empanadas.menuIngredientes}</p>
                        </div>`;

                        empanadasMenu.append(div);
    });
}
{/* <button id="${empanadas.id}" class="carritoAgregar producto-agregar">Agregar</button> */}

cargarEmpanadas()

const hamburguesas = [
    {id: 45, Nombre: "Sola", precio:"1420", menuIngredientes: ""
    },
    {id: 46, Nombre: "Jamón y Queso", precio:"1530", menuIngredientes: ""
    },
    {id: 47, Nombre: "Jamón, Queso, Tomate y Lechuga", precio:"1840", menuIngredientes: ""
    },
    {id: 48, Nombre: "Queso, Panceta y Huevo", precio:"1840", menuIngredientes: ""
    },
    {id: 49, Nombre: "Completa", precio:"1530", menuIngredientes: "Pollo, carne, verdura, capresse, jamón y queso"
    },
    {id: 50, Nombre: "Maravilla", precio:"2050", menuIngredientes: "Jamón, queso, cebolla, pepino, tomate asado y pepino"
    },
    {id: 51, Nombre: "T.N.T", precio:"2050", menuIngredientes: "Queso, panceta, morrón y salsa brava"
    },
    {id: 52, Nombre: "Veggie", precio:"1840", menuIngredientes: "Hamburguesa de soja, queso, lechuga y tomate"
    },
    {id: 53, Nombre: "Pinamar", precio:"1950", menuIngredientes: "Queso azul, panceta, pimientos, tomate"
    },
    {id: 54, Nombre: "Cheddar", precio:"2000", menuIngredientes: "Huevo, panceta, BBQ y cheddar"
    },
    {id: 55, Nombre: "Hamburguesa de Bondiola", precio:"1790", menuIngredientes: "Queso azul, cebolla caramelizada, BBQ"
    },
    {id: 56, Nombre: "MATTONE", precio:"2210", menuIngredientes: "Doble hamburguesa , Jamón, queso, tomate, lechuga, panceta, huevo"
    },
    {id: 57, Nombre: "Hamburguesa de Bufalo", precio:"2160", menuIngredientes: "queso Cheddar, Cebolla caramelizada, Panceta"
    },
    {id: 58, Nombre: "Hamburguesa Francesa", precio:"2050", menuIngredientes: "Queso cheedar, Panceta, Cebolla caramelizada y queso Azul"
    },
]

const hamburguesasMenu = document.querySelector("#hamburguesas")


function cargarHamburguesas(){
    hamburguesas.forEach(hamburguesas => {

        const div = document.createElement("div");
        div.classList.add("menu__container");
        div.innerHTML = `<div class="menu__tittle">
                            <p>${hamburguesas.Nombre}</p>
                            <p>$${hamburguesas.precio}</p>
                        </div>
                        <p class="menu__ingredientes">${hamburguesas.menuIngredientes}</p>
                        </div>`;

                        hamburguesasMenu.append(div);
    });

    actualizarBotonesAgregar();
}
{/* <button id="${hamburguesas.id}" class="carritoAgregar producto-agregar">Agregar</button> */}

cargarHamburguesas()

// FUNCIONES PARA AGREGAR AL CARRITO



function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".producto-agregar")
    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', agregarAlCarrito);
    })
}
var productosEnCarrito = [];

function agregarAlCarrito(e) {

    const idBoton = e.currentTarget.id;
    const productoAgregado = hamburguesas.find(hamburguesas => hamburguesas.id === idBoton)
    console.log(productoAgregado);
}
