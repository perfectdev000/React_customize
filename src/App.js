import logo from './logo.svg';
import './App.css';
import TheHeader from './components/TheHeader/TheHeader';
function App() {
  return (
    <div className="App">
      <TheHeader login={false}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is my <b>React</b> exercises.
        </p>
      </header>
    </div>
  );
}

export default App;
