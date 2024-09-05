import { useQuery } from "react-query";
import { apiGetAllVarient } from "../../service";
import { useRecoilState } from "recoil";
import { stateProductDetail } from "../../store/product-detail.store";


export const useGetVarient = (productId?: number) => {
    const [product] = useRecoilState(stateProductDetail);
    const { data, isLoading } = useQuery({
        queryKey: ["varients", product.productId],
        queryFn: () => apiGetAllVarient(productId),
        enabled: true,
    });
    return {
        varients: data?.data,
        isLoading,
    };
};