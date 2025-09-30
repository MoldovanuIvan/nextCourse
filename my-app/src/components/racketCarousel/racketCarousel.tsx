import styles from "./styles.module.css";
import Link from "next/link";
import { RacketCard } from "@/components/racketCard";
import { IRacket } from "@/types/racket";
import { FC } from "react";

interface IRacketCarouselProps {
  title: string;
  rackets: IRacket[];
  href: string;
}

export const RacketCarousel: FC<IRacketCarouselProps> = ({
  title,
  rackets,
  href,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>{title}</p>
        <Link href={href}>Все</Link>
      </div>

      <div className={styles.cardsContainer}>
        {rackets.map((racket) => (
          <RacketCard key={racket.id} {...racket} />
        ))}
      </div>
    </div>
  );
};
