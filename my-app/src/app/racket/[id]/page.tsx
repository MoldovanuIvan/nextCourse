import { FC, Suspense } from "react";
import { RacketContainer } from "@/components/racketCard/racketContainer";

interface IRacketPageProps {
  params: Promise<{ id: string }>;
}

const RacketPage: FC<IRacketPageProps> = async ({ params }) => {
  const { id } = await params;

  return (
    <Suspense fallback={"loading"}>
      <RacketContainer id={id} />
    </Suspense>
  );
};

export default RacketPage;
