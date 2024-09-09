import { useQuery } from "@tanstack/react-query";
import { TGetDetailProduct } from "../../types";
import { apiDetailProduct } from "../../service";
import { useRecoilState } from "recoil";
import { stateProductDetail } from "../../store/product-detail.store";
import { stateVarientCurrent } from "../../store/varient-current.store";

export const useGetDetailProduct = (detailInfo?: TGetDetailProduct) => {
    const [product_detail_id] = useRecoilState(stateProductDetail);
    const [varient] = useRecoilState(stateVarientCurrent);
    const { data, isLoading } = useQuery({
        queryKey: ["detail_product", product_detail_id.productId, varient],
        queryFn: () => apiDetailProduct(detailInfo),
        enabled: true,
    });
    return {
        detail_product: data,
        isLoading,
    };
};