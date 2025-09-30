import { FC } from "react";
import styles from "@/app/racket/[id]/styles.module.css";
import { getRacket } from "@/secvices/get-racket";
import { notFound } from "next/navigation";

interface IRacketContainerProps {
  id: string;
}

export const RacketContainer: FC<IRacketContainerProps> = async ({ id }) => {
  const { isError, data: racket } = await getRacket({ id });

  if (isError) return "error";

  if (!racket) return notFound();

  const {
    imageUrl,
    name,
    price,
    description,
    brand: { name: brandName },
  } = racket;

  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <p className={styles.brandName}>{brandName}</p>
        <p className={styles.title}>{name}</p>
        <p className={styles.desc}>{description}</p>
      </div>
      <img src={imageUrl} alt={name} />
      <p>{`$${price}`}</p>
    </div>
  );
};
