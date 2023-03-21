// Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

// Carrito mas cantidad de elementos

const CartWidget = () => {
  return (
    <section className="cart">
      <FontAwesomeIcon icon={faCartShopping} size="2x" /><a href="#">2</a>
    </section>
  );
};


export default CartWidget