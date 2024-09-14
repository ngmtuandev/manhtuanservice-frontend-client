import api from "../../config/client.axios.api";

export const apiInfoUserCurrent = async () => {
    const response = await api.get(`/user/info-current`);
    return response.data;
};
