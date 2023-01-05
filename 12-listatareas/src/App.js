import './App.css';
import Logo from './images/logo.png';
import ListaTareas from './components/ListaTareas';

function App() {
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
          src={Logo}
          className='logo'
          alt='Logo'
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Lista de Tareas</h1>
        <ListaTareas />
      </div>
    </div>
  );
}

export default App;
