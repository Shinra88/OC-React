import Footer from '../../asset/images/footer.svg';
import Mfooter from '../../asset/images/M_footer.svg';
import './footer.scss';

function Dfooter() {
return (

<footer>
    <div className='footer'>
    <img className="footer__img" src={Footer} srcSet={`${Footer} 521w, ${Mfooter} 520w`} alt="footer"/>
        
    </div>
</footer>
        );
}

export default Dfooter;
