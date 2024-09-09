import api from "../../config/client.axios.api";
import { TFindNews } from "../../types";

export const apiGetAllNews = async (findNewsInfo: TFindNews) => {
    const response = await api.get(`/news/find-all`,
        {
            params: findNewsInfo
        }
    );
    return response.data;
};
