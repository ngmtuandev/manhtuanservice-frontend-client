import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiDeleteItem } from "../../service";
import { TDeleteItem } from "../../types";
export const useDeleteItemCart = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (deleteInfo: TDeleteItem) => apiDeleteItem(deleteInfo),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["cart-current"],
            });
        },
    });
};
