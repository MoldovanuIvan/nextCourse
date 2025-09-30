import styles from "./styles.module.css";
import { RacketCarousel } from "@/components/racketCarousel/racketCarousel";
import { getRackets } from "@/secvices/get-rackets";
import { getTop10Rackets } from "@/secvices/get-top-10-rackets";

const Home = async () => {
  const racketsPromise = getRackets({ limit: 10 });
  const racketsTop10Promise = getTop10Rackets();

  const [
    { isError: isRacketsError, data: racketsData = [] },
    { isError: isRacketsTop10Error, data: racketsTop10Data = [] },
  ] = await Promise.all([racketsPromise, racketsTop10Promise]);

  return (
    <div>
      {!isRacketsError && Boolean(racketsData.length) && (
        <RacketCarousel
          href={"/rackets"}
          rackets={racketsData}
          title={"Ракетки"}
        />
      )}
      {!isRacketsTop10Error && Boolean(racketsTop10Data.length) && (
        <RacketCarousel
          href={"/rackets/top10"}
          rackets={racketsTop10Data}
          title={"Топ-10"}
        />
      )}
    </div>
  );
};

export default Home;
