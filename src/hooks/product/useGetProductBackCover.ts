import { useQuery } from "@tanstack/react-query";
import { apiFilterProduct } from "../../service";

export const useGetProductBackCover = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["backcover"],
        queryFn: () => apiFilterProduct({ brandId: 3 }),
        enabled: true,
    });
    return {
        productsBackcover: data?.data?.data,
        isLoading,
    };
};