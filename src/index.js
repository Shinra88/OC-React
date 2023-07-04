import React from 'react';
import Home from './pages/home/home';
import { Navigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Logement from './pages/logement/logement';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Error from './pages/erreur/404';
import Apropos from './pages/apropos/apropos';
import "./style.scss";
import { createRoot } from 'react-dom/client';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
// <React.StrictMode>
  <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Logement/:logementId" element={<Logement />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/404" element={<Error />} />
        <Route path="*" element={ <Navigate to="/404" /> } />
      </Routes>
      <Footer />
    </Router>
// </React.StrictMode>
,
);
