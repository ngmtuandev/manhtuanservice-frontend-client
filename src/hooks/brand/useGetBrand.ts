import { useQuery } from "react-query";
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