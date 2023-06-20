import logo from '../../asset/images/d_images/LOGO.svg';
import { NavLink } from 'react-router-dom'
import './header.scss';

function Header() {
    return (
      <div className='header_contener'>
        <div className='logo_contener'>
          <img src={logo} className="logo" alt="logo" />
        </div>
        <nav>
          <ul>
          <NavLink to="/" className='Home'>Accueil</NavLink>
          <NavLink to="/Apropos" className='Apropos'>A Propos</NavLink>
          </ul>
        </nav>
      </div>
      
    )
  }

export default Header