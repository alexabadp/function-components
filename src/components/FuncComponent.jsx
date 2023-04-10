import { useState } from "react";

function FuncComponent() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      Component funcional
      <p>
        <button onClick={() => setContador(contador - 1)}>-</button> {contador}
        <button onClick={() => setContador(contador + 1)}>+</button>
      </p>
    </div>
  );
}

export default FuncComponent;
