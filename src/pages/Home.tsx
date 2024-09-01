import { CarouselHome, Footer, Header } from "../components";
const images = [
    "https://images.pexels.com/photos/249324/pexels-photo-249324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3586249/pexels-photo-3586249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const Home = () => {
    return (
        <>
            <Header />
            <div className="w-full">
                <CarouselHome slides={images} />
                <div className="h-[1000px] bg-red-500"></div>
            </div>
            <Footer />
        </>
    );
};

export default Home;