// Imports:

import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <header className="header">
      <img src="../src/img/logo150x150.jpg" alt="imagen logo" />

      <section className="nav">
        <nav>
          <ul>
            <li>
              <a href="">Inicio</a>
            </li>
            <li>
              <a href="">Actividades</a>
            </li>
            <li>
              <a href="">Contacto</a>
            </li>
          </ul>
        </nav>

        <CartWidget />
      </section>
    </header>
  );
};

export default Navbar;
