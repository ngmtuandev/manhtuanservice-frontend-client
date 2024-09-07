import { Tabs, Tab } from "@nextui-org/react";
import ProductInfo from "./ProductInfo";
import ProductComment from "./ProductComment";

const Detail = ({
    product,
    className,
}: any) => {
    return (
        <div className={` ${className}`}>
            <h1 className="text-3xl font-bold mb-4">{product?.name}</h1>
            <Tabs aria-label="Options ">
                <Tab key="ProductInfo" title="Thông tin sản phẩm" className="">
                    <ProductInfo product={product} />
                </Tab>
                <Tab key="ProductRating" title="Đánh giá sản phẩm">
                    <ProductComment />
                </Tab>
            </Tabs>
        </div>
    );
};

export default Detail;
