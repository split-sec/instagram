import { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './global.scss';
import './App.module.scss';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
  );
}

export default App;
