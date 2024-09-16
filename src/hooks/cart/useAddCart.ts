import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiAddCart } from "../../service";
export const useAddCart = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: any) => apiAddCart(data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["cart-current"],
            });
        },
    });
};
