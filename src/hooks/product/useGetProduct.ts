import { useQuery } from "@tanstack/react-query";
import { TFilterProduct } from "../../types";
import { apiFilterProduct } from "../../service";
import { useRecoilState } from "recoil";
import { stateFilter } from "../../store/filter.store";
import { statePagination } from "../../store/pagination.store";

export const useGetProduct = (filterInfo?: TFilterProduct) => {
  const [filter] = useRecoilState(stateFilter);
  const [pagination] = useRecoilState(statePagination);
  const { data, isLoading } = useQuery({
    queryKey: [
      "products",
      filter.name,
      filter.priceMax,
      filter.priceMin,
      filter.brandId,
      pagination?.currentPage,
    ],
    queryFn: () =>
      apiFilterProduct({
        ...filterInfo,
        page: pagination?.currentPage,
        limit: pagination?.limit,
      }),
    enabled: true,
  });
  return {
    products: data?.data,
    isLoading,
  };
};
