import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Empty } from "antd";
import LoadingListProduct from "./LoadingListProduct";
import { useRecoilState } from "recoil";
import { stateProducts } from "../../store/products.store";
import PaginationCustom from "../common/PaginationCustom";

export type ListProductProps = {
  products: any;
};

const ListProduct = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isNotFound, setIsNotFound] = useState<boolean>(false);

  const [products, _]: any = useRecoilState(stateProducts);
  console.log("🚀 ~ ListProduct ~ products:", products);

  useEffect(() => {
    if (products?.length <= 0) {
      setIsLoading(true);
      const timeout = setTimeout(() => {
        setIsNotFound(true);
      }, 2000);
      return () => clearTimeout(timeout);
    } else {
      setIsLoading(false);
      setIsNotFound(false);
    }
  }, [products]);

  return (
    <div className="flex flex-wrap justify-around">
      {products &&
        products?.length > 0 &&
        products?.map((product: any, index: number) => (
          <ProductCard
            key={index}
            product={product}
            className="my-4 lg:w-[18rem]"
          />
        ))}
      {isLoading && !isNotFound && <LoadingListProduct />}
      {isNotFound && products?.length <= 0 && (
        <Empty
          description={
            <h1 className="text-medium font-medium">
              Không có sản phẩm hợp lệ vui lòng tìm kiếm lại
            </h1>
          }
        />
      )}
      <PaginationCustom total={products?.totalPages}></PaginationCustom>
    </div>
  );
};

export default ListProduct;
