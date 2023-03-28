// Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

// Carrito mas cantidad de elementos

const CartWidget = ({unidades}) => {

  const [productos, setProductos] = useState(0)

  const agregarProducto = () => {
    return setProductos(productos + 1);
  };

  const restarProducto = () => {
    return setProductos(productos -1);
  }

  return (
    <section className="cart">
      <FontAwesomeIcon icon={faCartShopping} size="2x" /><a href="#">{productos}</a>
    </section>
  );
};


export default CartWidget