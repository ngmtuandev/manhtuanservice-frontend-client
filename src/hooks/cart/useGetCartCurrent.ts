import { useQuery } from "@tanstack/react-query";
import { apiCartUserCurrent } from "../../service";
import { useGetInfoCurrent } from "../user/useGetInfoCurrent";

export const useGetCartCurrent = () => {
    const { info } = useGetInfoCurrent();
    const { data, isLoading } = useQuery({
        queryKey: ["cart-current", info?.data?.id],
        queryFn: () => apiCartUserCurrent(info?.id),
        enabled: true || !!info?.id,
    });
    return {
        cart: data?.data,
        isLoading,
    };
};