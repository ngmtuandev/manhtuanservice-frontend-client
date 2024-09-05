import { atom } from "recoil";
import { TGetDetailProduct } from "../types";

export const stateProductDetail = atom<TGetDetailProduct>({
    key: "stateProductDetail",
    default: {
        productId: undefined,
        variantId: undefined,
        info: undefined
    },
});
