import { atom } from "recoil";

export const stateVarientCurrent = atom<number>({
    key: "stateVarientCurrent",
    default: undefined,
});
