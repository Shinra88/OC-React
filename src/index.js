import React from 'react';
import Home from './home/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Logement from './home/logement/logement';
import Header from './home/header/header';
import Footer from './components/footer/footer';
import Error from './components/erreur/404';
import Apropos from './home/apropos/apropos';
import "./style.scss";
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
<React.StrictMode>
  <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Logement" element={<Logement />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
</React.StrictMode>,
);
