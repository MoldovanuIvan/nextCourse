import { revalidateTag } from "next/cache";

export const GET = () => {
  revalidateTag("getTop10Rackets");
};
