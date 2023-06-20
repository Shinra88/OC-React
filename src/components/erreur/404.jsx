import './404.scss';
import { Link } from 'react-router-dom'


function Error() {
return (
    <div className='error_contener'>
      <h2 className='error_h2'>404</h2>
      <p className='error_p'>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/Home" className='error_home'>Retourner sur la page d’accueil</Link>
      </div>
  );
}

export default Error;