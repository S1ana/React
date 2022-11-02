import React from "react";

function ListFood() {
  const listacomida = ["Hamburguesas", "Boneless", "Sushi", "Burritos"];
  return (
    <div>
      <h6>Lista de comida:</h6>
      <ul>
        <li>{listacomida[0]}</li>
        <li>{listacomida[1]}</li>
        <li>{listacomida[2]}</li>
        <li>{listacomida[3]}</li>
      </ul>
    </div>
  );
}

export default ListFood;
