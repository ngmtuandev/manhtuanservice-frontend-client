import api from "../../config/client.axios.api";
import { TFindComment } from "../../types";

export const apiGetComment = async (findCommentInfo: TFindComment) => {
    const response = await api.get(`/comment/find-all`,
        {
            params: findCommentInfo
        }
    );
    return response.data;
};
