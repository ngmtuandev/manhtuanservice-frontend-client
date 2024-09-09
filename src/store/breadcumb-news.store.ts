import { atom } from "recoil";
import path from "../utils/path";

export const stateBreadcumbNews = atom({
    key: "stateBreadcumbNews",
    default: [
        {
            title: "Trang chủ",
            link: path.HOME,
        },
        {
            title: "Tin tức",
            link: path.NEWS,
        },
    ]
});
