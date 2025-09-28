"use client"

import styles from './styles.module.css'
import {usePathname} from "next/navigation";
import {Link} from "@/components/link/link";

const Header =  () => {
    const pathname = usePathname()

    return <header className={styles.header}>
        <div className={styles.title}>TENNIS STORE</div>
        <div>
            <Link href={'/'}>Главная</Link>
            <Link href={'/rackets'}>Ракетки</Link>
        </div>
    </header>
}

export default Header
