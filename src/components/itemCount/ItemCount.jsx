import { useState } from "react";
import CartWidget from "../CartWidget/CartWidget";

const ItemCount = () => {

  const [contador, setContador] = useState(0);

  console.log(contador)

  const sumarContador = () => {
    
    console.log(contador)
   setContador(contador + 1);
   

  }
  const restarContador = () => {
    
    if(contador > 0){
      setContador(contador - 1);
    }else{
      alert(`no hay productos en el carrito`);
    }
    
  }

  return (
    <div>
      <span>el contador tiene valor: {contador}</span>
      <button onClick={sumarContador}>sumar</button>
      <button onClick={restarContador}>restar</button>
    </div>
  );
}

export default ItemCount
