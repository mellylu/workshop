import React from "react"
import { AiOutlineLogout } from "react-icons/ai"
import styles from "./header.module.scss"

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.menu}>
                <ul className={styles.ul}>
                    <AiOutlineLogout
                        size={30}
                        color="#61dafb"
                        onClick={() => {
                            logout()
                        }}
                        className={styles.logout}
                    />
                </ul>
            </nav>
        </header>
    )
}

export default Header
