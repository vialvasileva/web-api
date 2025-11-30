import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './styles/base.css';

function App() {
  return (
      <BrowserRouter basename="/web-api">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;