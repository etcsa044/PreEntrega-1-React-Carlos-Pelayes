import { useState } from "react";

const ItemCount = () => {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <span>el contador tiene valor: {contador}</span>
      <button onClick={() => setContador(contador + 1)}>sumar</button>
      <button onClick={() => setContador(contador - 1)}>restar</button>
    </div>
  );
}

export default ItemCount
