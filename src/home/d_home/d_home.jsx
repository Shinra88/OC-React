
import Banner from '../../asset/images/banner.png';
import Card from '../../components/card/d_card/d_card';


function Dhome() {
  return (
    <div className="Dhome">
      <main>
        <img src={Banner} className="Dhome-banner" alt="logo" />
        <img src={Card} className="Dhome-card" alt="logo" />
        <div className='DhomeContener'>

        </div>
        </main>
    </div>
  );
}

export default Dhome;
