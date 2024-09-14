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
import { useState } from "react";
import moment from "moment";
import { Empty } from "antd";
import icons from "../../utils/icons";
import { formatMoney } from "../../helper/Xfunction";

const Cart = () => {
  const [products] = useState<any>();
  const [numberProduct] = useState<Number>(0);


  return (
    <NavbarContent as="div" justify="end">
      <Dropdown placement="bottom-end">
        <Badge
          content={`${numberProduct}+`}
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
          {products && products.length > 0 && (
            <DropdownSection className=" max-h-[18rem]  overflow-auto">
              {products.map((product: any, index: number) => (
                <DropdownItem
                  key={index}
                  className="max-h-[18rem] bg-hover-dropdown-item overflow-auto"
                  isReadOnly={true}
                >
                  <div className="overflow-hidden ">
                    <div className="text-medium font-bold truncate">
                      {product?.productOption?.Product?.name}
                    </div>
                    <div className="w-full flex justify-between items-center my-4">
                      <div className="flex">
                        <Image
                          width={60}
                          src={product?.productOption?.Product?.mainImage}
                          alt="NextUI Album Cover"
                          className="w-[4rem] h-[6rem] object-cover"
                        />
                        <div className="w-[12rem] ml-2 ">
                          <p className="mt-2 font-medium">
                            Số lượng: {product?.quantity}
                          </p>
                          {true ? (
                            <p className="mt-1 font-sm">
                              giá tiền:
                              <span className="text-red-400">
                                123
                              </span>
                              <span className="line-through text-slate-500">
                                {formatMoney(
                                  product?.productOption?.Product?.price
                                )}
                              </span>
                            </p>
                          ) : (
                            <p className="mt-1 font-sm">
                              giá tiền:{" "}
                              {formatMoney(
                                product?.productOption?.Product?.price
                              )}
                            </p>
                          )}

                          <p className="mt-1 font-[0.8rem] text-slate-400">
                            Màu: {product?.productOption?.Color?.color}/ size{" "}
                            {product?.productOption?.Size?.name}
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
                            // handleRemove(product);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </DropdownItem>
              ))}
            </DropdownSection>
          )}
          {products && products?.length === 0 && (
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
