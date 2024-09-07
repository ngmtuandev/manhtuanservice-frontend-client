import { atom } from "recoil";

export const stateFindComment = atom({
    key: "stateFindComment",
    default: {
        productId: 0,
        parentId: 0
    },
});
