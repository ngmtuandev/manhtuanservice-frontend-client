
import { Carousel } from "antd";

type CarouselProps = {
  slides: string[];
};

const CarouselHome = ({ slides }: CarouselProps) => {
  return (
    <div className="w-full mt-10">
      <Carousel className="w-5/6 mx-auto rounded-md overflow-hidden" autoplay dotPosition="top">
        {slides?.length &&
          slides.map((slide: string, index: number) => (
            <div className="h-[20rem] shadow-md" key={index}>
              <div
                style={{ backgroundImage: `url(${slide})` }}
                className="h-full bg-no-repeat bg-cover bg-center"
              ></div>
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default CarouselHome;
