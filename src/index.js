import React from 'react';
import ReactDOM from 'react-dom';
import Dhome from './home/d_home/d_home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dlogement from './home/d_logement/d_logement';
import Header from './components/header/d_header/d_header';
import Footer from './components/footer/d_footer/d_footer';
import Error from './components/erreur/d_404/d_404';

 
ReactDOM.render(
    <React.StrictMode>
      <Router>
          <Routes>
            <Route path="/" element={<Dhome />} />
            <Route>
            <Dhome />
          </Route>
          </Routes>
          
        </Router>
    </React.StrictMode>,
document.getElementById('root')
)
