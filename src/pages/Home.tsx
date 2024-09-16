import { About, CarouselHome, Footer, Header, ProductsHome } from "../components";
import { useGetProductBackCover, useGetProductPhone } from "../hooks";
const images = [
    "https://images.pexels.com/photos/249324/pexels-photo-249324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3586249/pexels-photo-3586249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const Home = () => {

    const { productsBackcover, isLoading: isLoadingBackCover } = useGetProductBackCover();
    const { productsPhone, isLoading: isLoadingPhone } = useGetProductPhone();
    return (
        <>
            <Header />
            <div className="w-full">
                <CarouselHome slides={images} />
                <About />
                <ProductsHome products={productsBackcover} isLoading={isLoadingBackCover} label={'Ốp lưng'}></ProductsHome>
                <ProductsHome products={productsPhone} isLoading={isLoadingPhone} label={'Điện thoại'}></ProductsHome>
            </div>
            <Footer />
        </>
    );
};

export default Home;