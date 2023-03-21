import "./App.css";


// Nav
import Navbar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";



function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer greeting="Hola, soy el ItemList
    "/>
    </>    
  );
}

export default App;
