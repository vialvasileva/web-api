import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { Layout } from './components/Layout';
import HomePage from './pages/HomePage/HomePage';
import MoviePage from './pages/MoviePage/MoviePage';
import AnimePage from './pages/AnimePage/AnimePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import './styles/globals.css';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter basename="/web-api">
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movie" element={<MoviePage />} />
            <Route path="/anime" element={<AnimePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;