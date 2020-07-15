'use strict'


//array dentro de otros


var categorias = ["accion", "terror", "comedia"];
var peliculas = ["la verdad duele", "la vida es bella", "gran torino"];


var cine = [categorias, peliculas];

/*console.log(cine[0][1]); //accedo a terror

console.log(cine[1][2]); //accedo a gran torino
*/

/*
while (elemento != "uno") {
  var elemento = prompt("introduce tu pelicula");
peliculas.push(elemento); //añadir varios elementos a un array
}
peliculas.pop(); //elimina el ultimo elemento del array
*/

//buscar y eliminar un elemento del array
/*
var indice = peliculas.indexOf("gran torino");
console.log(indice);
if (indice >-1) {
  peliculas.splice(indice, 1);
}
//convertir un array a texto
var pelis = peliculas.join();
*/
console.log(peliculas);
//console.log(pelis);

//convertir un texto a un array
var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");

//console.log(cadena_array);

//ordenar un array

peliculas.sort();  //ordenar  array por orden alfabetico
peliculas.reverse(); //que tenga el orden inverso

console.log(peliculas);
