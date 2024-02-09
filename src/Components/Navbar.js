// css styles 
import styles from "../styles/navbar.module.css";

// Navbar Component
export default function Navbar(){
    return(
        <>
            <div className={styles.navbarContainer}> 
                <div className={styles.appName}>
                    MYAPP
                </div>

                <div>
                    <span>
                        PIZZA SHOP
                    </span>
                </div>
            </div>
        </>
    )
}
