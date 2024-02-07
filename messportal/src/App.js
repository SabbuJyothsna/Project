import logo from './logo.svg';
import './App.css';
import Subscribecomp from './Components/Subscribecomp';
import Menuupdatecomp from './Components/Menuupdatecomp';
import vendorsignupcomp, { Vendorsignupcomp } from './Components/vendorsignupcomp';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      {/* <Subscribecomp></Subscribecomp> */}
      <Menuupdatecomp></Menuupdatecomp>
      {/* <Vendorsignupcomp></Vendorsignupcomp> */}
    </div>
  );
}

export default App;
