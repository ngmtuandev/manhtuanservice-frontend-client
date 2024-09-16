import api from "../../config/client.axios.api";

export const apiAddCart = async (cartInfo: any) => {
    const response = await api.post(`/cart`, cartInfo);
    return response.data;
};
