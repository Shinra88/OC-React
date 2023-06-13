import Erreur from '../../../asset/images/d_images/d_404.png';


function Error() {
return (
    <div>
      <h2>Oups...</h2>
      <img src={Erreur} />
      <p>
        Il semblerait que la page que vous cherchez n’existe pas
      </p>
    </div>
  );
}

export default Error;