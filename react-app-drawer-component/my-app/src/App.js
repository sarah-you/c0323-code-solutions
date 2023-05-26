import ShowMenu from './AppDrawer';
import './App.css';

function App() {
  const menu = [
    { id: 1, page: 'About' },
    { id: 2, page: 'Get Started' },
    { id: 3, page: 'Sign In' },
  ];
  return (
    <div className="App">
      <div className="menu-wrap">
        <ShowMenu menu={menu} />
      </div>
    </div>
  );
}

export default App;
