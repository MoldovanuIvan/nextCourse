import styles from './styles.module.css'
import {RacketCarousel} from "@/components/racketCarousel/racketCarousel";
import {rackets} from "../../public/mock";

export default function Home() {
    return (
        <div>
            <RacketCarousel rackets={rackets} title={'Ракетки'} />
        </div>
    );
}
