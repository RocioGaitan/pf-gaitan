/*ingresa tu nombre*/
let tuNombre = prompt("Ingresa tu nombre");
alert("¡Hola " + tuNombre + "! Estas ingresando a la Tienda online Almacén de medias");

//ingresa a la tienda
let seleccion = prompt("¿Desea comprar algún producto de la tienda, si o no?");
while(seleccion != "si" && seleccion != "no"){
    alert("Por favor ingrese en letra minúscula si o no");
    seleccion = prompt("¿Desea comprar algún producto de la tienda? Ingrese si o no para continuar");
}
if(seleccion == "si") {
    alert("A continuación nuestra lista de productos:");
} else if (seleccion == "no") {
  console.log("Gracias por visitar nuestra tienda online Almacén de medias. Hasta pronto.");
  alert("Aprete enter en el caso de querer conocer la lista de productos de nuestra Tienda online Almacén de medias");
}
   
//selección de producto

let opcion = prompt("Ingrese el número del producto que desea comprar en nuestra tienda online: 1 -MEDIAS HONGOS: $800 2 -MEDIAS PALTA: $1000 3 -MEDIAS FUEGO: $1300");   

if(opcion == "1") {
    alert("Medias hongos: $800 tienen un 10% de descuento. Posteriormente podrá ingresar los valores anteriores y le calculamos el valor final del producto")
} else if(opcion == "2") {
    alert("Medias palta $1000 tienen un 30% de descuento. Posteriormente podrá ingresar los valores anteriores y le calculamos el valor final del producto")
} else if(opcion == "3") {
    alert("Medias fuego $1300 tienen un 40% de descuento. Posteriormente podrá ingresar los valores anteriores y le calculamos el valor final del producto")
} else{
    alert("Ingrese el número del producto: 1, 2 o 3")
    opcion = prompt("Ingrese el número del producto en el que esta interesado");
    console.log("1: Medias hongos: $800 10% descuento, 2: Medias palta $1000 30% descuento, 3: Medias fuego $1300 40% descuento");
}


//descuento del producto

let precio = parseInt(prompt("¿Cuál es el precio del producto?"));
console.log("El precio del producto:", precio);
let porcentaje = parseInt(prompt("¿Qué porcentaje de descuento desea aplicarle al producto seleccionado?"));
console.log("El porcentaje de descuento:", porcentaje);
let descuento = 0;
let total = precio;

if(porcentaje > 0) {
    descuento = precio * (porcentaje/100);
}
total = precio - descuento;
console.log("El valor final del producto es de " + total);
alert("El valor final del producto es de " + total);
alert("Aprete enter para continuar con la compra")

//cantidad de productos comprados 

let numeros = prompt("Ingrese la cantidad de productos comprados. Ej: 2");
switch(numeros) {
    case "1":
     alert("Felicidades adquiriste 1 producto de nuestra Tienda online Almacén de medias");
    break;

    case "2":
     alert("Felicidades adquiriste 2 productos de nuestra Tienda online Almacén de medias");
    break;

    case "3":
     alert("Felicidades adquiriste 2 productos de nuestra Tienda online Almacén de medias");
    break;

    default:
     alert("Felicidades adquiriste muchos productos de nuestra Tienda online Almacén de medias. ¡Gracias por la confianza!");
    break;  
}

//obtener cupón de descuento sorpresa

let opinion = prompt("En una escala del 1 al 10 cuánto estas conforme con la página?");
let i = opinion;
while (i >= 8) {
    alert("Felicidades por estar conforme con nuestro sitio web y productos te ofrecemos un 30% de descuento en tu proxima compra en efectivo");
    break;
}
alert("¡Gracias por visitar nuestro sitio web vuelvas prontos!");

//PRE-ENTREGA 2 - GAITÁN

//función constructora para un objeto

function Producto(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
}
 
alert("Pulse aceptar para completar los siguientes campos y recibir el detalle de su compra");

let nombre = prompt("Ingresa el nombre del producto. Ej: medias rosas");
let precios = parseFloat(prompt("¿Cuál es el precio del producto? Ej: 1500"));
let cantidad = parseInt(prompt("Cantidad de productos comprados Ej: 3"));
let productos = new Producto(nombre, precio, cantidad);
console.log("--> Detalle de su compra online: ", productos);

//verificar la exitencia de propiedades, IN

console.log("1- ¿Aparece detallada la propiedad PRECIO dentro del objeto en el detalle de la compra?", {
  resultado: "precio" in productos
});

console.log("2- ¿Se especifica el DESCUENTO del producto en el detalle de la compra?", {
 resultado: "descuento" in productos
});

//for in

console.log("Detalles de las propiedades del objeto:");
for (const propiedad in productos) {
    console.log("La propiedad " + propiedad + " tiene el valor de: " + productos[propiedad]);
}

alert("Oprima aceptar si el detalle de su compra es correcto");

//cantidad de elementos que tiene un array (en este caso aplicado a la lista de productos con descuento)

alert("Si desea continuar y ver los productos destacados de nuestra tienda online oprima aceptar");
console.log("Productos destacados Tienda Online Almacén de medias");
let nombres = ["medias homero", "medias universo", "medias flores"];
for(let i = 0; i < nombres.length; i++) {
 console.log("Producto destacado con 50% de descuento --> Pruducto número " + i + " " + nombres[i]);
}

console.log("--> ¿Cuántos productos destacados hay?", nombres.length);
console.log("--> ¿Cuál es el último producto de la lista que tiene descuento?", nombres[2]);

//agregar un elemento al final del array anterior "NOMBRES"

let NOMBRES = ["medias homero", "medias universo", "medias flores"];
let pregunta = prompt("¿Qué producto queres que se agregue a la lista de descuento? Ej: medias universo");
NOMBRES.push(pregunta);
console.log("El producto que selecciono " + tuNombre.toUpperCase() + " para que se le genere el descuento es " + pregunta);
console.log(NOMBRES);

//agregar un elemento al principio del array "NOMBRES"

alert("En el caso de querer agregar otro producto de sugerencia para el descuento apreta enter");
let pregunta1 = prompt("¿Qué producto queres que se agregue a la lista de descuento? Ej: medias palta");
NOMBRES.unshift(pregunta1);
console.log("El producto que selecciono " + tuNombre.toLowerCase() + " para que se le genere el descuento es " + pregunta1);
console.log(NOMBRES);

//reemplazar un valor de la posición 1 del array

console.log("Algunos pruductos recomendados con estampado de frutas son:");
let producto1 = ["medias manzana", " medias uvas", " medias banana"];
console.log(producto1);
let preguntas = prompt("¿Qué producto queres que se agregue a la lista de descuento? Ej: medias banana");
producto1[1] = preguntas;
console.log("El producto seleccionado por el usuario se agrego a la lista de descuentos reemplazando otro producto " + producto1);

console.log("Productos sugeridos con descuentos en nuestra tienda online")
producto1.pop();
console.log(producto1);

producto1.shift();
console.log(producto1);

NOMBRES.splice(0,1);
console.log(NOMBRES);

alert("Toque aceptar y encontrate con un descuento especial un único día")
console.log("Los dias sábados tiene un descuento especial este producto", NOMBRES);

//combinar dos arrays

let productos2 = ["medias messi", "medias argentinas", "medias talleres"];
let arrays = productos2.concat(NOMBRES);
console.log("Productos totales: ", arrays);

// conocer si existe la posición de un elemento/ producto dentro del array

let medias = ["medias blancas", "medias azules", "medias rojas", "medias verdes"];
let colores = medias.indexOf("medias azules");
console.log("stock medias seleccionadas: ", colores);
let colores1 = medias.indexOf("medias celestes");
console.log("stock medias seleccionadas: ", colores1);

//conocer si existe o no un elemento dentro del array

let producto3 = ["medias lunes", "medias martes", "medias miercoles", "jueves"];
let dias = prompt("¿Qué medias con la tematica de los días de la semana buscas? Ej: medias lunes");
let existe = producto3.includes(dias);
if(existe) {
    console.log("El producto seleccionado se encuentra en la lista de medias con tematica de días");
} else {
    console.log("El producto buscado no se encuentra en la lista de medias disponibles");
}

//class

class Elemento {
    constructor(medias, dinero) {
        this.medias = medias.toUpperCase();
        this.dinero = parseFloat(dinero);
    }
}

let misProductos = [];

let respuesta = "SI";

do {
    alert("aceptar para guardar el nombre y código de su producto para registrar la compra en sistema");
    let medias = prompt("Ingrese el nombre del producto. Ej: medias messi");
    let dinero = prompt("Ingrese el precio del producto. Ej: 1500");
    const unProducto = new Elemento(medias, dinero);
    misProductos.push(unProducto);
    console.log("--> Cantidad de productos vendidos", misProductos.length);
    respuesta = prompt("¿Quieres seguir agregando productos?");
} while (respuesta.toLocaleUpperCase() !== "NO");

console.log("Lista de los productos vendidos agregados al sistema", misProductos);

let suma = 0;

for (const unProducto of misProductos) {
    console.log("Total de ventas ", unProducto);
    suma = suma + unProducto.dinero;
}
console.log("Total: $ ", suma);

//Abstracción

function mayor(n) {
    return (m) => m > n
}

let menorEdad = mayor(16);
let mayorEdad = mayor(20);

let numero = parseInt(prompt("¿Qué edad tenes?"));
let resultado = mayorEdad(numero);

if(resultado) {
    alert ("La persona es mayor de edad puede realizar la compra");
} else {
    alert("La persona no es mayor de edad para realizar la compra");
}

//Uso del forEach para iterar osbre los elementos del array

alert("Toca aceptar para ver el listado ordenado de lo productos que ingresaron")
class Listado {
    constructor(id, nombre, precios) {
        this.id = id;
        this.nombre = nombre;
        this.precios = precios;
    }

    toString = function () {
        return this.nombre;
    };
}

let listaProductos = [
    new Listado(1, "Medias argentina", 900),
    new Listado(2, "Medias huevo fritos", 1000),
    new Listado(3, "Medias lunares", 1200),
    new Listado(4, "Medias homero js", 1500),
    new Listado(5, "Medias lisa", 800),
    new Listado(6, "Medias rosas", 1500),
];

listaProductos.forEach(unProducto => {
    console.log("-->", unProducto.toString());
});

alert("Gracias por visitar nuestra Tienda online Almacén de medias. ¡Vuelvas prontos!");