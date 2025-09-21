import Link from "next/link";
import {rackets} from "../../public/mock";
import {RacketCard} from "@/components/racketCard";
import styles from './styles.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
          <p>Ракетки</p>
          <Link href={'/rackets'}>Все</Link>
        </div>

        <div className={styles.cardsContainer}>
          {rackets.slice(0, 3).map(racket => <RacketCard key={racket.id} {...racket} />)}
        </div>
    </div>
  );
}
