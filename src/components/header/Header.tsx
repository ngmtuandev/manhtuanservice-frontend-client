import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import { Link as RouterLink } from "react-router-dom";
import path from "../../utils/path";
import logo from '../../assets/logonew_no_bg.png';
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { stateActiveNav } from "../../store/active-nav.store";

const Header = () => {

  const [isAcvite, setIsActive] = useRecoilState(stateActiveNav);

  let isMenuOpen = false;
  let isLogin = false;
  const navigate = useNavigate();


  const menuItems = [
    {
      name: "Trang chủ",
      url: path.HOME,
    },
    {
      name: "Sản phẩm",
      url: path.PRODUCTS,
    },
    {
      name: "Đặt thiết kế",
      url: path.DESIGN,
    },
    {
      name: "Về chúng tôi",
      url: path.ABOUT_US,
    }
  ];

  return (
    <Navbar
      shouldHideOnScroll
      maxWidth="full"
      className="py-4 bg-slate-200 bg-opacity-50"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <RouterLink to={"/"}>
            <img width={500} height={500} src={logo}></img>
          </RouterLink>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link
              className={`${isAcvite === 0 ? "text-yellow_bright" : ""
                } font-semibold sm:text-md lg:text-xl mg:mx-2 lg:mx-4 cursor-pointer`}
              color="foreground"
              onClick={() => {
                setIsActive(0);
                navigate("/");
              }}
            >
              Trang chủ
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`${isAcvite === 1 ? "text-yellow_bright" : ""
                } font-semibold sm:text-md lg:text-xl mg:mx-2 lg:mx-4 cursor-pointer`}
              color="foreground"
              onClick={() => {
                setIsActive(1);
                navigate(path.PRODUCTS);
              }}
            >
              Sản phẩm
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`${isAcvite === 3 ? "text-yellow_bright" : ""
                } font-semibold sm:text-md lg:text-xl mg:mx-2 lg:mx-4 cursor-pointer`}
              color="foreground"
              onClick={() => {
                setIsActive(3);
                navigate(path.DESIGN);
              }}
            >
              Đặt thiết kế
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`${isAcvite === 3 ? "text-yellow_bright" : ""
                } font-semibold sm:text-md lg:text-xl mg:mx-2 lg:mx-4 cursor-pointer`}
              color="foreground"
              onClick={() => {
                setIsActive(3);
                navigate(path.DESIGN);
              }}
            >
              Dịch vụ
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent justify="end">
        {!isLogin && (
          <>
            <NavbarItem className="flex">
              <Button
                onClick={() => {
                  navigate(path.SIGN_IN);
                }}
                color="warning"
                variant="flat"
              >
                Đăng nhập
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button
                onClick={() => {
                  navigate(path.SIGN_UP);
                }}
                color="warning"
                variant="flat"
              >
                Đăng ký
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>

      <NavbarMenu className="mt-8">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
              }
              className="w-full"
              size="lg"
            >
              <RouterLink to={item.url}>{item.name}</RouterLink>
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
