
import React from 'react';
import { useEffect } from 'react';
import Banner from '../asset/images/banner.png';
import Card from '../components/card/card';
import './home.scss';
import { useState } from 'react'




function Home() {

  const [appartements, setAppartement] = useState([]);

  useEffect(fetchAppartements, []);

function fetchAppartements() {
fetch("/backend.json")
.then((res) => res.json())
.then((res) => setAppartement(res))
.catch(console.error);
}

  return (
      <main className="Home">
        <div className="Home-banner">
          <h2>Chez vous, partout et ailleurs</h2>
        <img src={Banner} className="banner" alt="logo" />
        </div>
        <div className='Home-Contener'>
           {appartements.map((appartement) => (
            <Card key={appartement} title={appartement.title} imageUrl={appartement.cover} />))}
        </div>
        </main>
    
  );
}

export default Home;

