import { FC, Suspense } from "react";
import { RacketContainer } from "@/components/racketCard/racketContainer";
import { Metadata } from "next";
import { getRacketMetadata } from "@/secvices/get-racket-metadata";

interface IRacketPageProps {
  params: Promise<{ id: string }>;
}

export const generateMetadata = async ({
  params,
}: IRacketPageProps): Promise<Metadata> => {
  const { id } = await params;

  const { data: metadata } = await getRacketMetadata({ id });

  return {
    title: metadata?.name,
    description: metadata?.description,
  };
};

const RacketPage: FC<IRacketPageProps> = async ({ params }) => {
  const { id } = await params;

  return (
    <Suspense fallback={"loading"}>
      <RacketContainer id={id} />
    </Suspense>
  );
};

export default RacketPage;
