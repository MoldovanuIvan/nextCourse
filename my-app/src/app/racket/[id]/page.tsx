import {FC} from "react";
import styles from './styles.module.css'
import {rackets} from "../../../../public/mock";
import Image from 'next/image'
import {IRacket} from "@/types/racket";

interface IRacketPageProps {
    params: Promise<{id: string}>
}

export const generateStaticParams = () => {
    return [{id: '1'}, {id: '2'}, {id: '3'}]
}

const RacketPage: FC<IRacketPageProps> = async ({params}) => {
    const {id: racketId} = await params
    const {imageUrl, name, price, description, brand: {name: brandName}} = rackets.find(({id}) => id === +racketId) as IRacket

    return <div className={styles.wrapper}>
        <div className={styles.info}>
            <p className={styles.brandName}>{brandName}</p>
            <p className={styles.title}>{name}</p>
            <p className={styles.desc}>{description}</p>
        </div>
        <Image src={imageUrl} alt={name} />
        <p>{`$${price}`}</p>
    </div>
}

export default RacketPage