import logok from '../../../asset/images/d_images/d_k.png';
import logoAlogo from '../../../asset/images/d_images/d_Alogo.png';
import logos from '../../../asset/images/d_images/d_s.png';
import logoa from '../../../asset/images/d_images/d_a.png';

function Header() {
    return (
      <nav>
        <img src={logok} className="Logok" alt="logo" />
        <img src={logoAlogo} className="LogoAlogo" alt="logo" />
        <img src={logos} className="Logos" alt="logo" />
        <img src={logoa} className="Logoa" alt="logo" />
        <div>
          
        </div>
      </nav>
    )
  }

export default Header