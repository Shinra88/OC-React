import './apropos.scss';

function Apropos() {
    return (
      <div className="apropos">
        <h1>test A Propos</h1>
      </div>
    );
  }
  const Home = document.getElementById('Home');
// Récupère le style CSS de #intro
let styleHome = window.getComputedStyle(Home);
// Affiche la valeur de la propriété CSS top de #intro
console.log( styleHome.getPropertyValue('text-decoration') ); // "underline"
export default Apropos;