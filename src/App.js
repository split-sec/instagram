import './global.scss';
import './App.module.scss';
import Landing from '../src/pages/Landing/Landing.jsx';
import Signup from './pages/Signup/Signup';
import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
}

export default App;
