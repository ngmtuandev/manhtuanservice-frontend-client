import { Button } from "@nextui-org/react";
import icons from "../../utils/Icons";

const Footer = () => {
  return (
    <div className="px-container bg-black h-auto w-full py-6 md:flex  relative bottom-0 left-0 right-0">
      <div className="text-white md:w-2/5 my-4 mx-8">
        <h1 className="text-xl font-medium mt-2">
          Chúng tôi luôn lắng nghe bạn !
        </h1>
        <p className="text-sm font-thin mt-2">
          Chúng tôi mong đợi nhận được những sự phản hồi về dịch vụ và chất lượng của các bạn để có thể cải thiện hơn nữa
        </p>
        <Button className="mt-4 md:w-[8rem]" color="warning" variant="shadow">
          Liên hệ ngay
        </Button>
      </div>
      <div className="text-white md:w-1/3 my-4 mx-8">
        <div className="flex items-center">
          <icons.FaPhoneAlt className="w-6 h-6 cursor-pointer"></icons.FaPhoneAlt>
          <div className="ml-4">
            <p>Hotline</p>
            <p className="text-sm font-medium">
              0363073476
            </p>
            <p className="text-sm font-medium">(6:00 - 20:00)</p>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <icons.FaMailBulk className="w-6 h-6 cursor-pointer"></icons.FaMailBulk>
          <div className="ml-4">
            <p>Email</p>
            <p className="text-sm font-medium">nguyenmanhtuancomputer@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="text-white w-2/5 my-4 mx-8">
        <div className="w-full h-3/5 mt-10 flex ">
          <a target="_blank" href="https://www.facebook.com/profile.php?id=61564138945558">
            <icons.SiFacebook className="w-6 h-6 cursor-pointer mx-6"></icons.SiFacebook>
          </a>
          <a target="_blank" href="">
            <icons.SiZalo className="w-6 h-6 cursor-pointer mx-6"></icons.SiZalo>
          </a>
          <a target="_blank" href="https://www.tiktok.com/@manhtuanservice?lang=vi-VN">
            <icons.SiTiktok className="w-6 h-6 cursor-pointer mx-6"></icons.SiTiktok>
          </a>
          <a target="_blank" href="">
            <icons.SiLinkedin className="w-6 h-6 cursor-pointer mx-6"></icons.SiLinkedin>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
