import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AnimePage from './pages/AnimePage';
import MoviePage from './pages/MoviePage';
import './styles/base.css';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename="/web-api">
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/anime" element={<AnimePage />} />
            <Route path="/movie" element={<MoviePage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;