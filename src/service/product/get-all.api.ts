import api from "../../config/client.axios.api";
import { TFilterProduct } from "../../types";

export const apiFilterProduct = async (filterInfo?: TFilterProduct) => {
    const response = await api.get(`/product/filter`, {
        params: filterInfo
    });
    return response.data;
};
