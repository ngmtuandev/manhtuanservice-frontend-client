import api from "../../config/client.axios.api";

export const apiGetAllVarient = async (productId?: number) => {
    const response = await api.get(`/varients/find-all?productId=${productId}`);
    return response.data;
};
