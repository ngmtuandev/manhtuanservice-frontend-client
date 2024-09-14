import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { isLoginState } from "../../store/auth.store";
import { useRecoilState } from "recoil";
import { stateUserInfoCurrent } from "../../store/user-info-current.store";
import { USER_LOCAL } from "../../utils/constant";

const Profile = () => {

  const navigate = useNavigate();
  const [_, setIsLogin] = useRecoilState(isLoginState);
  const [info]: any = useRecoilState(stateUserInfoCurrent);

  console.log('info   :   ', info)


  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="primary"
          name={`tuaans`}
          size="sm"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-semibold">
            Người dùng:
          </p>
          <p className="">{info?.email}</p>
        </DropdownItem>

        <DropdownItem onClick={() => navigate("/profile")} key="settings">
          Chi tết trang cá nhân
        </DropdownItem>

        <DropdownItem onClick={() => navigate("/cart")} key="cart">
          Giỏ hàng
        </DropdownItem>
        <DropdownItem key="logout" color="danger" onClick={() => {
          setIsLogin(false)
          localStorage.removeItem(USER_LOCAL.KEY);
        }}>
          Đăng xuất
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default Profile;
