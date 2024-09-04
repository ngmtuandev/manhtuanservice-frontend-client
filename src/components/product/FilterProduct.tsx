import BrandFilter from "../common/BrandFilter"
import SearchHook from "../common/SearchHook"
import SliderHook from "../common/SliderHook"

const FilterProduct = () => {
    return (
        <div>
            <h2 className="my-4 text-medium font-semibold">LỌC SẢN PHẨM</h2>
            <div className="my-4">
                <h1 className="font-semibold text-xl mb-4">Tìm kiếm theo tên</h1>
                <SearchHook />
            </div>
            <div className="my-4">
                <h1 className="font-semibold text-xl mb-4">Khoản giá</h1>
                <SliderHook />
            </div>
            <div className="my-4">
                <h1 className="font-semibold text-xl mb-4">Loại sản phẩm</h1>
                <BrandFilter />
            </div>
        </div>
    )
}

export default FilterProduct