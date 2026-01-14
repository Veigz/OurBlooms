import logo1 from '../assets/Logos/L1.png'
import logo2 from '../assets/Logos/L2.png'
import logo from '../assets/Logos/L3.png'

import image from '../assets/Hero/cflower.png'
import image1 from '../assets/Hero/mflower.png'
import image2 from '../assets/Hero/tflower.png'

function Hero(){
    return(
        <>
        <picture>
            <source media="(min-width: 1200px)" srcSet={logo} />
            <source media="(min-width: 800px)" srcSet={logo1} />
            <img src={logo2} alt="Ourblooms Logo" />
        </picture>

        <picture>
            <source media="(min-width: 1200px)" srcSet={image} />
            <source media="(min-width: 800px)" srcSet={image1} />
            <img src={image2} alt="Ourblooms Logo" />
        </picture>




        </>
    )
}
export default Hero;