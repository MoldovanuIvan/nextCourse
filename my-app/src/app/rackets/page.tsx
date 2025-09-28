import {rackets} from "../../../public/mock";
import {RacketCard} from "@/components/racketCard";
import styles from './styles.module.css'

const RacketsPage = () => {
    return <div className={styles.wrapper}>
        <nav className={styles.nav}>
            <p>Бренд</p>
            <ol>
                <li>All</li>
                <li>Head</li>
                <li>Yonex</li>
            </ol>
        </nav>
        <div>
            <div className={styles.title}>
                Ракетки
            </div>
            <div className={styles.container}>
                {rackets.map(racket => <RacketCard key={racket.id} {...racket}/>)}
            </div>
        </div>
    </div>
}

export default RacketsPage
