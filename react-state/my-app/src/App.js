import logo from './logo.svg';
import './App.css';
import ToggleButton from './ToggleButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>react-state</p>
        <ToggleButton color="orange" text="Orange Button" />
        <ToggleButton color="purple" text="Purple Button" />
        <ToggleButton color="green" text="Green Button" />
      </header>
    </div>
  );
}

export default App;
