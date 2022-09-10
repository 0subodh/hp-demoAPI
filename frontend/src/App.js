import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import CharacterDetail from './components/CharacterDetail';
import { RenderedContent } from './components/RenderedContent';
import Error from './components/Error';

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RenderedContent />} />
          <Route path="/characters/:id" element={<CharacterDetail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
