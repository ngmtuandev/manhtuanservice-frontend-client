import { useQuery } from "@tanstack/react-query";
import { TFilterProduct } from "../../types";
import { apiFilterProduct } from "../../service";
import { useRecoilState } from "recoil";
import { stateFilter } from "../../store/filter.store";

export const useGetProduct = (filterInfo?: TFilterProduct) => {
    const [filter] = useRecoilState(stateFilter);
    const { data, isLoading } = useQuery({
        queryKey: ["products", filter.name, filter.priceMax, filter.priceMin, filter.brandId],
        queryFn: () => apiFilterProduct(filterInfo),
        enabled: true,
    });
    return {
        products: data,
        isLoading,
    };
};