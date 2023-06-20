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
          <Collapse title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/>
          <Collapse title="Respect" content="La bienveillance fait partie des valeurs foncdatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre platerforme."/>
          <Collapse title="Service" content="La bienveillance fait partie des valeurs foncdatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre platerforme."/>
          <Collapse title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond au critères de sécurité établis par nos services. En kaissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
        </div>
      </div>
     
    );
  }
export default Apropos;