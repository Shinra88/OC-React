import './apropos.scss';
import Collapse from '../../components/collapse/collapse';
import AproposBanner from '../../asset/images/d_images/d_apropos_banner.png';

function Apropos() {
    return (
      <div className="apropos">
        <div className='apropos_banner'>
          <img className='banner' src={AproposBanner} alt='banner apropos'></img>
        </div>
        <div className='collapse__contener'>
          <Collapse title="Fiabilité" content="Fiabilité"/>
          <Collapse title="Respect" content="Respect"/>
          <Collapse title="Service" content="Service"/>
          <Collapse title="Sécurité" content="Sécurité"/>
        </div>
      </div>
     
    );
  }
export default Apropos;