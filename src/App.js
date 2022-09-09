import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
function App() {

  return (
  <>
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting ='bienvenido a helados a tu gusto!'/>
    </div>
    </>
  );
}

export default App;
