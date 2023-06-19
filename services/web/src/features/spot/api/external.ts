import axios from "axios";
import { Spot, SpotApi } from "../types"

const path = "http://localhost:3001/api/v1/spots";

type FetchSpotListResponse = {
    spots: Spot[]
}

type FetchSpotByIdResponse = {
    spot: Spot
}

export const externalSpotApi = (): SpotApi => {
    const fetchSpotList = async () => {
        const response = await axios.get<FetchSpotListResponse>(path);
        return response.data.spots;
    }

    const fetchSpotById = async (id: string) => {
        const response = await axios.get<FetchSpotByIdResponse>(`${path}/${id}`);
        return response.data.spot;
    }

    return {
        fetchSpotList,
        fetchSpotById
    }
}