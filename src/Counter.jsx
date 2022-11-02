import React from "react";

//let counter = 0;

function Counter() {
  const [counter, setCounter] = React.useState(0);

  function incrementar() {
    setCounter(counter + 1);
    //console.log(counter);
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={incrementar}>+</button>
    </div>
  );
}

export default Counter;
