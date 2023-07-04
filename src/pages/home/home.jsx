
import React from 'react';
import Card from '../../components/card/card';
import './home.scss';
import { useAppartements } from '../../hooks/useAppartements';

function Home() {
const appartements = useAppartements();

  return (
      <main className="home">
        <div className="bannerH">
          <h1 className='banner_titre'><span> Chez vous,</span> <span> partout et ailleurs</span></h1>
        </div>
        <div className='home-Contener'>
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

