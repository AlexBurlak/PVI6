import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import Header from './components/Header/Header';
import Central from './components/Central/Central';

function App() {
  return (
    <div>
      <Header />
      <Central />
    </div>
  );
}

export default App;
