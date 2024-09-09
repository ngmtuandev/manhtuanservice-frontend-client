import api from "../../config/client.axios.api";
import { TGetDetailNews } from "../../types";

export const apiDetailNews = async (detailInfo?: TGetDetailNews) => {
    const response = await api.get(`/news`, {
        params: detailInfo
    });
    return response.data;
};
