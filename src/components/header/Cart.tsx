import {
  DropdownTrigger,
  NavbarContent,
  Badge,
  Button,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
  Image,
} from "@nextui-org/react";
import moment from "moment";
import { Empty } from "antd";
import icons from "../../utils/icons";
import { formatMoney } from "../../helper/Xfunction";
import { useDeleteItemCart, useGetCartCurrent } from "../../hooks";
import { TDeleteItem } from "../../types";
import { toast } from "react-toastify";

const Cart = () => {

  const { cart } = useGetCartCurrent()
  const { mutate: $deleteItemCart } = useDeleteItemCart();

  const handleRemove = (deleteInfo: TDeleteItem) => {
    $deleteItemCart(deleteInfo, {
      onSuccess: (response) => {
        if (response?.status) {
          toast.success("Sản phẩm đã xoá khỏi giỏ hàng");
        } else {
          toast.warning("Xoá sản phẩm thất bại !!!");
        }
      },
      onError: () => {
        toast.warning("Xoá sản phẩm thất bại !!!");
      },
    });
  }


  return (
    <NavbarContent as="div" justify="end">
      <Dropdown placement="bottom-end">
        <Badge
          content={`${cart?.items?.length! ?? '0'}`}
          shape="circle"
          color="danger"
          className="mr-6"
        >
          <DropdownTrigger>
            <Button
              radius="full"
              isIconOnly
              aria-label="more than 99 notifications"
              variant="light"
              className="mr-6"
            >
              <icons.CiShoppingCart size={24} />
            </Button>
          </DropdownTrigger>
        </Badge>
        <DropdownMenu
          aria-label="cart Actions"
          variant="flat"
          className="w-[24rem]"
        >
          <DropdownSection aria-label="Profile & Actions" showDivider>
            <DropdownItem
              className="h-14 gap-2 bg-hover-dropdown-item"
              key="cart"
              isReadOnly={true}
            >
              <p className="font-semibold text-md text-center ">GIỎ HÀNG</p>
            </DropdownItem>
          </DropdownSection>
          {cart?.items && cart?.items?.length > 0 && (
            <DropdownSection className=" max-h-[18rem]  overflow-auto">
              {cart?.items?.map((product: any, index: number) => (
                <DropdownItem
                  key={index}
                  className="max-h-[18rem] bg-hover-dropdown-item overflow-auto"
                  isReadOnly={true}
                >
                  <div className="overflow-hidden ">
                    <div className="text-medium font-bold truncate">
                      {product?.product?.name}
                    </div>
                    <div className="w-full flex justify-between items-center my-4">
                      <div className="flex">
                        <Image
                          width={60}
                          src={product?.product?.images ? product?.product?.images[0] : null}
                          alt="NextUI Album Cover"
                          className="w-[4rem] h-[6rem] object-cover"
                        />
                        <div className="w-[12rem] ml-2 ">
                          <p className="mt-2 font-medium">
                            Số lượng: {product?.quantity}
                          </p>
                          {true ? (
                            <p className="mt-1 font-sm">
                              Giá tiền:
                              <span className="text-slate-500">
                                {formatMoney(
                                  product?.product?.price
                                )}
                              </span>
                            </p>
                          ) : (
                            <p className="mt-1 font-sm">
                              giá tiền:{" "}
                              {formatMoney(
                                product?.product?.price
                              )}
                            </p>
                          )}

                          <p className="mt-1 font-[0.8rem] text-slate-400">
                            Màu: {product?.product?.color}
                          </p>
                          <p className="text-[0.8rem] text-slate-400">
                            Ngày thêm:{" "}
                            {moment(product?.dateAdd).format("DD-MM-YYYY")}
                          </p>
                        </div>
                      </div>
                      <div className=" flex items-center justify-center w-1/6 ">
                        <icons.CiTrash
                          size={20}
                          className="hover:text-blue-500"
                          onClick={() => {
                            handleRemove({ productId: product?.product?.id, cartId: cart?.id });
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </DropdownItem>
              ))}
            </DropdownSection>
          )}
          {!cart?.items && (
            <DropdownSection>
              <DropdownItem className="bg-hover-dropdown-item">
                <Empty
                  description={
                    <h1 className="text-medium font-medium">
                      Chưa có sản phẩm
                    </h1>
                  }
                />
              </DropdownItem>
            </DropdownSection>
          )}
        </DropdownMenu>
      </Dropdown>
    </NavbarContent>
  );
};

export default Cart;
