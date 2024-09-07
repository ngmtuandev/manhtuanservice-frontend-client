import { useQuery } from "react-query";
import { TFindComment } from "../../types";
import { apiGetComment } from "../../service";

export const useGetComment = (queryInfo: TFindComment) => {

    // const [findCommentInfo] = useRecoilState(stateFindComment);
    // const [commentParent] = useRecoilState(stateCommentParent);
    const { data, isLoading, refetch } = useQuery({
        queryKey: ["comments", queryInfo.parentId, queryInfo.productId],
        queryFn: () => apiGetComment(queryInfo),
        enabled: true,
    });
    return {
        comments: data?.data,
        isLoading,
        refetch
    };
};