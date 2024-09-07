import { useMutation, useQueryClient } from "react-query";
import { TCreateComment } from "../../types";
import { apiCreateComment } from "../../service";
export const useCreateComment = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (commentInfo: TCreateComment) => apiCreateComment(commentInfo),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["comments"],
            });
        },
    });
};
