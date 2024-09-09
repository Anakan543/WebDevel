import logo from './logo.svg';
import './App.css';
import { TestClass } from './Components/Compo1';
import { TestClass2 } from './Components/Compo2';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TestClass></TestClass>
        <TestClass2></TestClass2>
      </header>
    </div>
  );
}

export default App;
