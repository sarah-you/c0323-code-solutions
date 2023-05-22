import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton';

function App() {
  function handleCustomClick(text) {
    window.alert(text);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <CustomButton
          text="Click LightBlue!"
          onCustomClick={handleCustomClick}
          color="lightblue"
        />
        <CustomButton
          text="Click Pink!"
          onCustomClick={handleCustomClick}
          color="pink"
        />
        <CustomButton
          text="Click Yellow!"
          onCustomClick={handleCustomClick}
          color="yellow"
        />
      </header>
    </div>
  );
}

export default App;
