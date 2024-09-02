import { Button } from "@nextui-org/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const About = (className: any) => {
  const [images, setImages] = useState(
    {
      1: "url(https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      2: "url(https://images.pexels.com/photos/4705618/pexels-photo-4705618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      3: "url(https://images.pexels.com/photos/593093/pexels-photo-593093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
    }
  );

  const handleClick = (e: any) => {
    const target: string = e.target.classList[0];
    const urlTarget = e.target.style.backgroundImage;
    const tmpUrl = images[1];
    setImages(prevImages => ({
      ...prevImages,
      [1]: `${urlTarget}`,
      [Number(target.split('-')[1])]: `${tmpUrl}`
    }));
  };

  return (
    <div
      className={`${className} px-container my-16  lg:flex w-full lg:h-[30rem] lg:justify-center lg:items-center`}
    >
      <div className="relative w-3/5 h-[26rem] md:w-3/5 md:h-[24rem] lg:w-1/4 lg:h-full  lg:mr-[10rem] lg:mx-0 lg:my-0 mx-auto my-[4rem] ">
        <div
          style={{
            backgroundImage: `${images[1]}`,
          }}
          className="card-1 w-full h-full bg-no-repeat bg-center bg-cover shadow-2xl z-10 absolute transition-all duration-75 "
          onClick={handleClick}
          id="card"
        ></div>
        <div
          style={{
            backgroundImage: `${images[2]}`,
          }}
          className="card-2 w-full h-full bg-no-repeat bg-center bg-cover shadow-xl absolute transition-all duration-75 -left-20 z-0 skew-x-6 -skew-y-6"
          onClick={handleClick}
          id="card"
        ></div>
        <div
          style={{
            backgroundImage: `${images[3]}`,
          }}
          className="card-3 w-full h-full bg-no-repeat bg-center bg-cover shadow-xl absolute transition-all duration-75 -right-20 z-0 -skew-x-6 skew-y-6"
          onClick={handleClick}
          id="card"
        ></div>
      </div>
      <div className="w-full my-6 lg:w-1/5 lg:ml-10">
        <div className="text-slate-700 text-xl my-2 ">Mạnh Tuấn Service</div>
        <h2 className="text-3xl font-semibold my-2">Dịch vụ sửa chữa máy tính tại nhà</h2>
        <p className="my-4">
          Chúng tôi cam kết luôn mang lại lòng tin đến với khách hàng với những mức giá phù hợp và chế độ bảo hành lâu dài
          Mạnh Tuấn Service hứa hẹn mang đến những trải nhiệm tốt nhất đến với khách hàng.
        </p>
        <Button className="border-yellow_bright text-yellow_bright" variant="bordered">
          <Link to={""}>Đặt lịch ngay</Link>
        </Button>
      </div>
    </div>
  );
};

export default About;
