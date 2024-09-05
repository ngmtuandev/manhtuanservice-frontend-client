import api from "../../config/client.axios.api";
import { TGetDetailProduct } from "../../types";

export const apiDetailProduct = async (detailInfo?: TGetDetailProduct) => {
    const response = await api.get(`/product`, {
        params: { productId: +detailInfo?.productId!, variantId: detailInfo?.variantId }
    });
    return response.data;
};
