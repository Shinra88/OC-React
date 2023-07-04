import DFooter from '../../asset/images/footer.svg';
import Mfooter from '../../asset/images/M_footer.svg';
import './footer.scss';

function Footer() {
return (

<footer>
    <div className='footer'>
    <img className="footer__img" src={DFooter} srcSet={`${DFooter} 521w, ${Mfooter} 520w`} alt="footer"/>
        
    </div>
</footer>
        );
}

export default Footer;
