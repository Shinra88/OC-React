import './404.scss';
import { Link } from 'react-router-dom'


function Error() {
return (
    <div className='error'>
      <h2 className='error__h2'>404</h2>
      <p className='error__p'>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className='error__home'>Retourner sur la page d’accueil</Link>
      </div>
  );
}

export default Error;