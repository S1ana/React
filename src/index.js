import React from "react";
import ReactDOM from "react-dom/client";
/*import PI, { doublePi, triplePi } from "./mates.js";
import TellTime from "./TellTime";
import ListFood from "./ListFood";
import Heading from "./Heading";*/
import App from "./App";

//import "./styles.css";

const container = document.getElementById("root");

const saludo = "Hola a todos";

const primerNombre = "Carlos";
const primerApellido = "Rubio";
const clase = "heading";

const st = { color: "blue" };

if (new Date().getHours() < 12) {
  st.color = "green";
}

const root = ReactDOM.createRoot(container);
root.render(<App />);
//ReactDOM.render("QUE VOY A AGREGAR, DONDE LO VOY A AGREGAR.");
/*ReactDOM.render(
  <div>
    <h2>{saludo}</h2>
    <p>La hora es: {new Date().getHours()}</p>
    <ul>
      <li>{listacomida[0]}</li>
      <li>{listacomida[1]}</li>
      <li>{listacomida[2]}</li>
      <li>{listacomida[3]}</li>
    </ul>
  </div>,
  document.getElementById("root")
);*/

const lista = [5, 1, 40, 1850, 6, 36, 9, 9, 587, 1, 1000];

//Map crear un nuevo arreglo aplicando una función
//a todos los elementos del arreglo
/*let new_lista = [];
lista.forEach(function (x) {
  new_lista.push(x * 2);
});
console.log(new_lista);*/
/*let new_lista = lista.map(function (x) {
  return x * 2;
});
console.log(new_lista);*/

let new_lista = lista.map((x) => x * 2);
console.log("Elementos modificados:", new_lista);

//Filter crea un nuevo arreglo que contiene
//solamente los elementos que cumplen un criterio
/*let filtered = [];
lista.forEach(function (x) {
  if (x > 50) {
    filtered.push(x);
  }
});
console.log("Elementos filtrados:", filtered);*/

let filtered = lista.filter((x) => x > 50);
console.log("Elementos filtrados:", filtered);

//Reduce regresa un valor que incluye información
//de todos los elementos, acumulándolos
/*let reduced = 0;
lista.forEach(function (x) {
  reduced += x;
});
console.log("Arreglo reducido:", reduced);*/
let reduced = lista.reduce((accum, x) => accum + x);
console.log("Arreglo reducido:", reduced);
