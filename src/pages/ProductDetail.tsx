import { useParams } from "react-router-dom";
import { BreadcrumbsHook, Detail, Footer, Header, SlideProduct } from "../components"
import path from "../utils/path";
import { useRecoilState } from "recoil";
import { stateProductDetail } from "../store/product-detail.store";
import { useGetDetailProduct } from "../hooks";
import { useEffect } from "react";
import { stateImageProductDetail } from "../store/image-product-detail.store";

const breacdCrumValue = [
    {
        title: "Trang chủ",
        link: path.HOME,
    },
    {
        title: "Sảm phẩm",
        link: path.PRODUCTS,
    },
    {
        title: "Chi tiết sản phẩm",
        link: path.PRODUCT_DETAIL,
    },
];
const ProductDetail = () => {

    let { id } = useParams();
    const [productDetailInfo, setProductDetailInfo] = useRecoilState(stateProductDetail);
    const [_, setImageProductDetailInfo] = useRecoilState(stateImageProductDetail);

    const { isLoading, detail_product } = useGetDetailProduct(productDetailInfo);



    useEffect(() => {
        setProductDetailInfo({ ...productDetailInfo, productId: id, info: detail_product?.data })
        setImageProductDetailInfo(detail_product?.data?.varient?.images)
    }, [id, isLoading])

    return (
        <>
            <Header />
            <div className="pl-8 pr-2 px-container">
                <BreadcrumbsHook list={breacdCrumValue} className="mt-4" />
                {!isLoading && (
                    <div className="w-full lg:flex lg:justify-between my-10">
                        {!isLoading && detail_product && <SlideProduct images={detail_product?.data?.varient?.images} />}
                        {!isLoading && detail_product && (
                            <Detail
                                product={detail_product?.data?.varient}
                                className="w-full lg:w-3/5 lg:ml-4"
                            />
                        )}
                    </div>
                )}
            </div>
            <Footer />
        </>
    )
}

export default ProductDetail