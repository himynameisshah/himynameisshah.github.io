import './App.css';
import Navbar from './Navbar.js'
import Content from './Content.js';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Navbar />
        <Content/>

      </BrowserRouter >
    </div>
  );
}

export default App;
