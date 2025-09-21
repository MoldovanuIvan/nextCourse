"use client"

import styles from './styles.module.css'
import Link from "next/link";
import {usePathname} from "next/navigation";

const Header =  () => {
    const pathname = usePathname()

    return <header className={styles.header}>
        <div className={styles.title}>TENNIS STORE</div>
        <div>
            <Link style={{color: pathname === '/' ? 'orange' : 'black'}} href={'/'}>Главная</Link>
            <Link style={{color: pathname === '/rackets' ? 'orange' : 'black'}} href={'/rackets'}>Ракетки</Link>
        </div>
    </header>
}

export default Header
