import styles from "./styles.module.css";
import Link from "next/link";
import {RacketCard} from "@/components/racketCard";
import {IRacket} from "@/types/racket";
import {FC} from "react";

interface IRacketCarouselProps {
    title: string
    rackets: IRacket[]
}

export const RacketCarousel: FC<IRacketCarouselProps> = ({title, rackets}) => {
    return <div className={styles.container}>
        <div className={styles.header}>
            <p>{title}</p>
            <Link href={'/rackets'}>Все</Link>
        </div>

        <div className={styles.cardsContainer}>
            {rackets.slice(0, 10).map(racket => <RacketCard key={racket.id} {...racket} />)}
        </div>
    </div>
}