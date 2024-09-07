import { atom } from "recoil";

export const stateComment = atom({
    key: "stateComment",
    default: [],
});

export const stateCommentParent = atom({
    key: "stateCommentParent",
    default: 0,
});
