import api from "../../config/client.axios.api";

export const apiCartUserCurrent = async (userId: number) => {
    const response = await api.get(`/cart`, {
        params: { userId }
    });
    return response.data;
};
