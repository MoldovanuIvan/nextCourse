import {IRacket} from "@/types/racket";
import {Response} from "@/types/response";
import {BASE_API_URL} from "@/constants/api";

interface Params {
    id: string;
}

export const getRacket = async ({id}: Params): Promise<Response<IRacket>> => {
    const result = await fetch(
        `${BASE_API_URL}/product/${id}`
    );

    if (!result.ok) {
        return {isError: true, data: undefined};
    }

    const data: IRacket = (await result.json()).product;

    return {isError: false, data};
};