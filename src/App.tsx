import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AnimePage from './pages/AnimePage';
import './styles/base.css';

function App() {
  return (
      <BrowserRouter basename="/web-api">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/anime" element={<AnimePage />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;