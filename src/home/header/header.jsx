import logoD from '../../asset/images/d_images/LOGO.svg';
import logoM from '../../asset/images/m_images/LOGO.svg';
import { NavLink } from 'react-router-dom'
import './header.scss';

function Header() {

  
    
    // var logo;
    // if("matchMedia" in window) { 
    //   if(window.matchMedia("(min-width:600px)").matches) {
    //     logo={logoD}
    //   } else {
    //     logo={logoM}
    //   }
    // }
  

    return (
      <div className='header_contener'>
        <div className='logo_contener'>

        <img src={logoD} className='logo'
                alt="logo" />

          {/* <img src="../../asset/images/d_images/LOGO.svg" srcset="../../asset/images/m_images/LOGO.svg 480w,
                ../../asset/images/d_images/LOGO.svg 800w"
                sizes="(max-width: 600px) 480px, 800px"
                alt="logo" /> */}
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