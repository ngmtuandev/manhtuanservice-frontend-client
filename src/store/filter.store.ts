import { atom } from "recoil";
import { TFilterProduct } from "../types";


export const stateFilter = atom<TFilterProduct>({
    key: "stateFilter",
    default: {
        name: undefined,
        priceMin: undefined,
        priceMax: undefined,
        brandId: undefined
    },
});
