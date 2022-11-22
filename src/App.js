import './App.css';

import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>React Dictionary App</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="wine" />
        </main>
        <footer className="App-footer">
          <small>Coded by Sarah</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
