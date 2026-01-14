import styles from '../styles/Navbar.module.css'
import { Link } from 'react-router-dom';
function Navbar(){
    return(
        <>
        <nav className={styles.navbar}>
            <Link to = "/"><p className="display"> Our Blooms </p></Link>
            <ul className={styles.ul}>
                <Link to = "/gallery"><li className="caption1"> GALLARY </li></Link>
                <Link to = "/about"><li className="caption1"> ABOUT </li></Link>
                <li className="caption1"> CONTACT </li>
            </ul>
        </nav>
        <hr className='divider' />
        </>
    )
}

export default Navbar;