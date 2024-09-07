import { useMutation, useQueryClient } from "react-query";
import { apiLikeComment } from "../../service";
export const useLikeComment = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (commentId: number) => apiLikeComment(commentId),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["comments"],
            });
        },
    });
};
