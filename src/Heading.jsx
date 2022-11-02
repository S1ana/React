import React from "react";

function Heading() {
  const primerNombre = "Carlos";
  const primerApellido = "Rubio";
  const clase = "heading";
  return (
    <h2
      className={clase} /*style={st}*/
      contentEditable="true"
      spellCheck="false"
    >
      Hola, {primerNombre + " " + primerApellido}
    </h2>
  );
}

export default Heading;
