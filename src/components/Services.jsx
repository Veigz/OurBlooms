import sm1a from '../assets/servicesModule1/Image.png'
import sm1b from '../assets/servicesModule1/Image-1.png'
import sm1c from '../assets/servicesModule1/Image-2.png'
import sm2a from '../assets/servicesModule2/Image.png'
import sm2b from '../assets/servicesModule2/Image-1.png'
import sm2c from '../assets/servicesModule2/Image-2.png'
import sm3a from '../assets/servicesModule3/Image.png'
import sm3b from '../assets/servicesModule3/Image-1.png'
import sm3c from '../assets/servicesModule3/Image-2.png'
import styles from '../styles/Services.module.css'

function Services(){
    return(
        <>
        <section>
            <div className = "services_content">
                <div className = "section_header">
                    Services
                </div>
                <hr/>
                <div className = {styles.module1}>
                    <div>
                        <p className= "heading1"> FLORAL INSTALLATIONS</p>
                        <p className= "paragraph1"> We create clean, contemporary designs that elevate any environment, from intimate gatherings to grand events. </p>
                    </div>
                    <picture>
                        <source media="(min-width:1200px)" srcSet={sm1a}/>
                        <source media="(min-width:800x)" srcSet={sm1b}/>
                        <img src = {sm1c} alt = "Person Making Boutque" />
                    </picture>
                </div>
                <hr/>
            </div>

            <div className = "services_content">
                <div className = {styles.module2}>
                    <div>
                        <p className= "heading1"> NATIVE PLANT ARRANGEMENTS </p>
                        <p className= "paragraph1">Our selection of locally sourced flora brings natural resilience and effortless elegance to your home. </p>
                    </div>
                    <picture>
                        <source media="(min-width:1200px)" srcSet={sm2a}/>
                        <source media="(min-width:800x)" srcSet={sm2b}/>
                        <img src = {sm2c} />
                    </picture>
                </div>
                <hr/>
            </div>

            <div className = "services_content">
                <div className = {styles.module3}>
                    <div>
                        <p className= "heading1"> CUSTOM FLORAL CONCEPTS </p>
                        <p className= "paragraph1"> Your vision, our blooms. We build arrangements that are both personal and exquisitely simple. </p>
                    </div>
                    <picture>
                        <source media="(min-width:1200px)" srcSet={sm3a}/>
                        <source media="(min-width:800x)" srcSet={sm3b}/>
                        <img src = {sm3c} />
                    </picture>
                </div>
                <hr/>
            </div>
        </section>
        </>
    )
}

export default Services;