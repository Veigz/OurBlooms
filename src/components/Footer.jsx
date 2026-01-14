import cfooter from '../assets/footer/cfooter.png'
import mfooter from '../assets/footer/mfooter.png'
import tfooter from '../assets/footer/tfooter.png'


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