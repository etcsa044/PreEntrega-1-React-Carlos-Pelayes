import "./App.css";

// Nav
import Navbar from "./components/Navbar/NavBar";
// ItemList
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";



function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Hola, soy el ItemList. De momento el sitio está en construcción." />
    </div>
  );
}

export default App;
