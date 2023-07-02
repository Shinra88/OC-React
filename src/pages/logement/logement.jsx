import "./logement.scss";
import Collapse from '../../components/collapse/collapse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ImageBanner } from '../../components/carrousel/carrousel';
import { useAppartement } from "../../hooks/useAppartement";
import Error from "../../components/erreur/404";
import Loading from "../../components/loading/loading";


function Logement() {
  const [Appartement, isloading] = useAppartement(); // destructuring objet js
  
console.log(useAppartement());
  if (isloading === true) {
    return Loading()
}

  if (!Appartement) { 
    return <Error /> 
  }
 
  return (

    <div className="logement">
        <ImageBanner pictures={Appartement.pictures}/>

        <div className='logement__contener'>
          <div className='logement__infos'>
            <div className='logement__titre'>
              <h2>{Appartement.title}</h2>
              <p>{Appartement.location}</p>
            </div>

            <div className='logement__tags'>
                  {Appartement.tags.map((tag) => (<span className='logement__tag' key={tag}>{tag}</span>))}
            </div>
          </div>

          <div className='logement__hotes'>
            <div className='logement__profil'>
              <div className='logement__nom'>
                <span>{Appartement.host.name}</span>
              </div>
            
              <div className='logement__photo'>
                <img src={Appartement.host.picture} alt="profil" />
              </div>
            </div>
            <div className='logement__stars'>
              {[1,2,3,4,5].map((num) => <span key={num} className={Appartement.rating >= num ? "on" : "off"}><FontAwesomeIcon icon={faStar} /></span>)}
            </div>
          </div>
        </div>
        
          <div className='logement__details'>
            <Collapse title="Description" content={Appartement.description} />
            <Collapse title="Équipements" content={Appartement.equipments.map((eq, i) => <li key={i}>{eq}</li>)} />
          </div>
    </div>
  );
}

export default Logement;