import { useQuery } from "@tanstack/react-query";
import { apiFilterProduct } from "../../service";

export const useGetProductPhone = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["phone"],
    queryFn: () => apiFilterProduct({ brandId: 1 }),
    enabled: true,
  });
  return {
    productsPhone: data?.data,
    isLoading,
  };
};
