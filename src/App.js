import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemCount from './components/itemCount/ItemCount';
function App() {
// los tastes seria el "stock"

  const tastes = 4
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting='bienvenido a helados a tu gusto!! '/>
      <ItemCount tastes = {tastes}/>
    </div>
  );
}

export default App;
