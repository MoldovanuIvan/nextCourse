import { FC } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { IRacket } from "@/types/racket";

export const RacketCard: FC<IRacket> = ({ imageUrl, name, id }) => {
  return (
    <Link href={`/racket/${id}`} className={styles.container}>
      <img src={imageUrl} alt={name} />
      <p>{name}</p>
    </Link>
  );
};
