import logok from '../../asset/images/d_images/d_k.png';
import logoAlogo from '../../asset/images/d_images/d_Alogo.png';
import logos from '../../asset/images/d_images/d_s.png';
import logoa from '../../asset/images/d_images/d_a.png';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import './header.scss';

function Header() {
    return (
      <div className='header_contener'>
        <div className='logo_contener'>
          <img src={logok} className="logok" alt="logo" />
          <img src={logoAlogo} className="logoAlogo" alt="logo" />
          <img src={logos} className="logos" alt="logo" />
          <img src={logoa} className="logoa" alt="logo" />
        </div>
        <nav>
          <ul>
          <Link to="/Home" className='Home'>Accueil</Link>
          <Link to="/Apropos" id='Apropos'>A Propos</Link>
          </ul>
        </nav>
      </div>
      
    )
  }
function underApropos(){
  if(window.location.pathname === '/Apropos'){
    const LinkApropos = styled.link`
    cursor: default;
      text-decoration: underline;
  `}
}
underApropos()

export default Header