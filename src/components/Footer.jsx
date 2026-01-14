import cfooter from '../assets/Footer/cfooter.png'
import mfooter from '../assets/Footer/mfooter.png'
import tfooter from '../assets/Footer/tfooter.png'


function Footer(){
    return(
        <>
        <footer>
            <picture>
                <source media = '(min-width:1200px)' srcSet={cfooter}/>
                <source media = '(min-width:800px)' srcSet={tfooter}/>
                <img src={mfooter} alt = "footer image" />
            </picture>
        </footer>
        </>
    )
}

export default Footer;