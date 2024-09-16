import { atom } from "recoil";
import { TCart } from "../types";

export const stateCartCurrent = atom<TCart>({
    key: "stateCartCurrent",
    default: undefined,
});
