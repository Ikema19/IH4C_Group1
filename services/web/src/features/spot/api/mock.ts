import { Spot, SpotApi } from "../types";
import { spots } from "../../../constants";

export const MockSpotApi = (): SpotApi => {
    const fetchSpotList = async () => {
        return spots as unknown as Spot[];
    }

    const fetchSpotById = async (id: string) => {
        return spots.find(spot => spot.id === id) as unknown as Spot;
    }

    return {
        fetchSpotList,
        fetchSpotById
    }
}