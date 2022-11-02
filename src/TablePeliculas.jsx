import React from "react";
import peliculas from "./Peliculas";

function TablePeliculas() {
  const [antman, santo] = peliculas; //Destructurar arreglo
  const {
    id: idAnt,
    nombre: nombreAntman,
    genero: generoAnt,
    fecha: { day: dayAnt, month: monthAnt, year: yearAnt }
  } = antman;
  console.log(nombreAntman);
  return (
    <table>
      <th>
        <td>ID</td>
        <td>Nombre</td>
        <td>Genero</td>
        <td>Fecha</td>
      </th>
      <tr>
        <td>{idAnt}</td>
        <td>{nombreAntman}</td>
        <td>{generoAnt}</td>
        <td>{dayAnt + " " + monthAnt + " " + yearAnt}</td>
      </tr>
    </table>
  );
}

export default TablePeliculas;
