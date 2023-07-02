import logo from '../../asset/images/LOGO.svg';
import { NavLink } from 'react-router-dom'
import './header.scss';

function Header() {

    return (
      <div className='header_contener'>
        <div className='logo_contener'>
          < a href="/"><img src={logo} className='logo' alt="logo"/></a >
          </div>
        <nav>
          <ul>
          <NavLink to="/" 
          style={({ isActive }) => isActive ? { textDecoration: "underline" } : undefined} 
          className='Home'>
          Accueil
          </NavLink>

          <NavLink to="/Apropos" 
          style={({ isActive }) => isActive ? { textDecoration: "underline" } : undefined} 
          className='Apropos'>
          A Propos
          </NavLink>
          </ul>
        </nav>
      </div>
    )
  }

export default Header