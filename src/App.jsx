import "./App.css";

// Nav
import Navbar from "./components/Navbar/NavBar";
// ItemList
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";




function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Hola, soy el ItemList. De momento el sitio está en construcción." />
      <ItemCount />    
    </div>
  );
}

export default App;
