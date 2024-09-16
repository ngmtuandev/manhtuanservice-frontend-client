import { atom } from "recoil";
import { TPagination } from "../types";


export const statePagination = atom<TPagination>({
    key: "statePagination",
    default: {
        totalPages: 10,
        currentPage: 1,
        limit: 6
    },
});
