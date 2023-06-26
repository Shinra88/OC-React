
import React from 'react';
import { useEffect } from 'react';
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
          <h1 className="bannerH">Chez vous, partout et ailleurs</h1>
        </div>
        <div className='Home-Contener'>
           {appartements.map((appartement) => (
            <Card key={appartement.id} 
                  title={appartement.title} 
                  imageUrl={appartement.cover} 
                  id={appartement.id} />))}
        </div>
        </main>
    
  );
}

export default Home;

