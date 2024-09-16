import api from "../../config/client.axios.api";
import { TDeleteItem } from "../../types";

export const apiDeleteItem = async (deleteInfo: TDeleteItem) => {
    const response = await api.delete(`/cart`, {
        params: deleteInfo
    });
    return response.data;
};
