import { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './global.scss';
import './App.module.scss';
import HomePage from './pages/HomePage/HomePage';
// import { ViewportProvider, viewportContext } from './helper/ViewPortContext';

function App() {
  // const { width, height } = useContext(viewportContext);
  // console.log(width);
  return (
    // <ViewportProvider>
      <BrowserRouter>
        {/* { width < 600 ? <HomePage /> : <h1>Here</h1>} */}
        <HomePage />
      </BrowserRouter>
    // </ViewportProvider>
  );
}

export default App;
