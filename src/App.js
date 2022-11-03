import logo from './logo.svg';
import './App.css';
import AjaxApis from './Componentes/AjaxApi';
import ContadorHooks from './Componentes/HOOOOOOKS/ContadorHooks';
import ScrollHooks from './Componentes/HOOOOOOKS/ScrollHook';
import RelojHooks from './Componentes/HOOOOOOKS/RelojHooks';
import Pokemones from './Componentes/HOOOOOOKS/Pokemones'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <AjaxApis/>
      <hr/>
      <ContadorHooks />
      <ScrollHooks />
      <hr></hr>
      <RelojHooks/>
      <hr></hr>
      <Pokemones/>
    </div>
  );
}

export default App;
