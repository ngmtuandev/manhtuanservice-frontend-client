import ProductCard from '../product/ProductCard'
import LoadingListProduct from '../product/LoadingListProduct'
import { Empty } from 'antd'

const ProductsHome = ({ products, isLoading, label }: any) => {
    return (
        <div className='py-5'>
            <div className="flex md:ml-12 ml-2 items-center">
                <div className="bg-gradient-to-br from-gray-900 via-gray-700 to-gray-500 rounded-md text-white flex justify-center items-center w-52 h-9 sm:w-52 sm:h-9 md:w-52 md:h-9 shadow-xl">
                    <p className="text-center text-sm sm:text-sm uppercase font-bold py-2 md:text-lg">{label}</p>
                </div>
            </div>
            <div className="flex flex-wrap justify-around">
                {products &&
                    products?.length > 0 &&
                    products.map((product: any, index: number) => (
                        <ProductCard
                            key={index}
                            product={product}
                            className="my-4 lg:w-[18rem]"
                        />
                    ))}
                {isLoading && <LoadingListProduct />}
                {products?.length <= 0 && (
                    <Empty
                        description={
                            <h1 className="text-medium font-medium">
                                Không có sản phẩm hợp lệ vui lòng tìm kiếm lại
                            </h1>
                        }
                    />
                )}
            </div>
        </div>
    )
}

export default ProductsHome