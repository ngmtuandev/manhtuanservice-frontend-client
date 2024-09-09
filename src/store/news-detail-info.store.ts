import { atom } from "recoil";

export const stateNewsDetail = atom({
    key: "stateNewsDetail",
    default: {
        newsId: 0,
        newsInfo: undefined
    },
});
