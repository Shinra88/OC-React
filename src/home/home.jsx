
import Banner from '../asset/images/banner.png';
import Card from '../asset/images/d_images/d_card.png';
import './home.scss';



function Home() {
  return (
    <div className="Home">
      <main>
        <img src={Banner} className="Home-banner" alt="logo" />
        <div className='HomeContener'>
          <img src={Card} className="Home-card" alt="logo" />
        </div>
        </main>
    </div>
  );
}

export default Home;
