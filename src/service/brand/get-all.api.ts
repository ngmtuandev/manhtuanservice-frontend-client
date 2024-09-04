import api from "../../config/client.axios.api";

export const apiGetAllBrand = async () => {
    const response = await api.get(`/brand`);
    return response.data;
};
