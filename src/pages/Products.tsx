import { useRecoilState } from "recoil";
import { BreadcrumbsHook, FilterProduct, Footer, Header, ListProduct } from "../components"
import { useGetProduct } from "../hooks";
import { stateProducts } from "../store/products.store";
import { useEffect } from "react";
import { stateFilter } from "../store/filter.store";
import path from "../utils/path";

const breacdCrumValue = [
    {
        title: "Trang chủ",
        link: path.HOME,
    },
    {
        title: "Sảm phẩm",
        link: path.PRODUCTS,
    },
];

const Products = () => {

    const [filterInfo] = useRecoilState(stateFilter);
    const { products } = useGetProduct(filterInfo);
    const [_, setProducts] = useRecoilState(stateProducts);

    useEffect(() => {
        if (products) {
            setProducts(products?.data)
        }
    }, [products])
    return (
        <>
            <Header />
            <div className="w-full pl-8 pr-2 px-container my-10">
                <BreadcrumbsHook list={breacdCrumValue} />
                <div className="flex w-full mt-10 justify-between h-[3rem]">
                    <h1 className="font-bold text-2xl">TẤT CẢ SẢN PHẨM</h1>
                </div>
                <div className="lg:flex h-auto">
                    <div className=" lg:w-1/4 lg:mr-4">
                        <FilterProduct />
                    </div>
                    <div className="my-10 lg:w-5/6 lg:ml-4 lg:my-0">
                        <ListProduct />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Products