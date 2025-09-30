import {RacketCard} from "@/components/racketCard";
import styles from '../styles.module.css'
import {getTop10Rackets} from "@/secvices/get-top-10-rackets";

const Top10Page = async () => {
    const {isError, data: rackets} = await getTop10Rackets()

    if (isError) return 'error'

    if (!rackets) return "no result"

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
                Топ 10
            </div>
            <div className={styles.container}>
                {rackets.map(racket => <RacketCard key={racket.id} {...racket}/>)}
            </div>
        </div>
    </div>
}

export default Top10Page
