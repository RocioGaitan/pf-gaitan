/*el usuario ingresa su nombre y mensaje de bienvenida a la tienda*/
let nombre = prompt("Ingrese su nombre");
alert("¡Hola " + nombre + "! Estas ingresando a tienda online Almacén de medias");

/*ingresa a la tienda*/
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
   
/*selección de producto*/

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


/*descuento del producto*/

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
alert("Aprete enter para continuar con la compra")

/*cantidad de productos comprados */
let numero = prompt("Ingrese la cantidad de productos comprados. Ej: 2");
switch(numero) {
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

/*obtener cupón de descuento sorpresa*/

let opinion = prompt("En una escala del 1 al 10 cuánto estas conforme con la página?");
let i = opinion;
while (i >= 8) {
    alert("Felicidades por estar conforme con nuestro sitio web y productos te ofrecemos un 30% de descuento en tu proxima compra en efectivo");
    break;
}
alert("¡Gracias por visitar nuestro sitio web vuelvas prontos!");

 





