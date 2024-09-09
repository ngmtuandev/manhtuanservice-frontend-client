import { useQuery } from "@tanstack/react-query";
import { apiGetAllBrand } from "../../service";

export const useGetBrand = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["brand"],
        queryFn: () => apiGetAllBrand(),
        enabled: true,
    });
    return {
        brands: data,
        isLoading,
    };
};