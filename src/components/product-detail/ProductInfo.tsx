import { Button, Input } from "@nextui-org/react";
import icons from "../../utils/icons";
import { useRecoilState } from "recoil";
import { stateProductDetail } from "../../store/product-detail.store";
import { formatMoney } from "../../helper/Xfunction";
import { useGetVarient } from "../../hooks/varient/useGetVarients";
import { stateVarientCurrent } from "../../store/varient-current.store";
import React from "react";
import { useAddCart } from "../../hooks/cart/useAddCart";
import { toast } from "react-toastify";
import { useGetInfoCurrent } from "../../hooks";
import { COLOR_VARIENT } from "../../utils/constant";

const ProductInfo = ({ product }: any) => {

  const [productDetailInfo, setProductDetailInfo] = useRecoilState(stateProductDetail);
  const [, setVarient] = useRecoilState(stateVarientCurrent);
  const [numberProduct, setNumberProduct] = React.useState(1);
  const { info } = useGetInfoCurrent();

  const { mutate: $addCart } = useAddCart();


  const handleChooseVarient = (variantId: number) => {
    setVarient(variantId)
    setProductDetailInfo({ ...productDetailInfo, variantId })
  }

  const handleNumberChange = (newValue: string) => {
    if (+newValue > +productDetailInfo?.info?.varient?.quantity) {
      toast.warning("Sản phẩm trong kho hiện không đủ");
    }
    else {
      setNumberProduct(Number(newValue));
    }
  };


  const { varients } = useGetVarient(+productDetailInfo?.productId!);
  const handleOnClickAdd = () => {
    const data = { cart: { user: info?.id! }, cartItem: { quantity: +numberProduct, price: +product?.price * +numberProduct, product: product?.id } }

    $addCart(data, {
      onSuccess: (response) => {
        if (response?.data == 1) {
          toast.warning("Sản phẩm đã có trong giỏ hàng");
          return;
        }
        if (response?.status) {
          toast.success("Thêm sản phẩm thành công !!");
        } else {
          toast.warning("Thêm sản phẩm thất bại !!");
        }
      },
      onError: () => {
        toast.warning("Thêm sản phẩm thất bại !!");
      },
    });

  }

  return (
    <div className="flex w-full flex-col">
      <div className="w-full mt-4">

        <div className="text-2xl font-bold">
          {formatMoney(Number(product?.price))}
        </div>
      </div>
      <div className="w-full mt-4 font-medium">
        <h1 className="flex items-center gap-1">Màu sắc: <div className={`
                        ${product?.color.toLowerCase() === COLOR_VARIENT.BLACK ? 'w-4 h-4 bg-black rounded-sm' :
            product?.color.toLowerCase() === COLOR_VARIENT.RED ? 'w-4 h-4 bg-red-600 rounded-sm' :
              product?.color.toLowerCase() === COLOR_VARIENT.WHITE ? 'w-4 h-4 bg-white rounded-sm border border-black' :
                ''
          }`}
        ></div></h1>
        <div className="flex w-3/5 mt-2 items-center">
        </div>
      </div>
      <div className="w-full mt-4 font-medium">
        {product?.storage && product?.storage > 0 ? <h1 className="border-b-1 pb-6">Dung lượng: {product?.storage > 0 && product?.storage} GB</h1> : ''}
        <div>
          <div className="flex w-3/5 mt-4">
            {
              varients && varients?.map((item: any) => {
                return <Button
                  key={item.id}
                  onClick={(e) => {
                    e.preventDefault()
                    handleChooseVarient(item?.id)
                  }}
                  className="font-medium mx-1 py-1 h-auto bg-gray-400 min-w-36 text-white"
                >
                  <div>
                    <div className="flex gap-2">{`${+item?.storage > 0 ? `Dung lượng: ${item?.storage} GB, ` : ''}`}<div className="flex gap-1 items-center">
                      Màu: <div className={`
                        ${item?.color.toLowerCase() === COLOR_VARIENT.BLACK ? 'w-4 h-4 bg-black rounded-sm' :
                          item?.color.toLowerCase() === COLOR_VARIENT.RED ? 'w-4 h-4 bg-red-600 rounded-sm' :
                            item?.color.toLowerCase() === COLOR_VARIENT.WHITE ? 'w-4 h-4 bg-white rounded-sm' :
                              ''
                        }`}
                      ></div>
                    </div>
                    </div>
                    <div></div>
                    <div>Giá: {formatMoney(item?.price)}</div>
                  </div>
                </Button>
              })
            }


          </div>
          <div className="pt-5">
            <Input
              type="number"
              radius="full"
              variant="bordered"
              color="warning"
              label="Số lượng:"
              placeholder="1.00"
              labelPlacement="outside"
              value={`${numberProduct}`}
              className="w-1/5 text-yellow_bright"
              onValueChange={(value) => {
                handleNumberChange(value);
              }}
            />
          </div>
          <div className="w-full lg:w-5/6 border-b-1 pb-6">
            <Button
              radius="full"
              color="warning"
              className="mt-6 w-2/4 text-white"
              startContent={<icons.CiShoppingCart size={24} />}
              onClick={handleOnClickAdd}
            >
              Thêm vào giỏ hàng
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full mt-4">
        <div className="w-full lg:w-5/6 border-b-1 pb-6">
          <div className="text-yellow_bright cursor-pointer flex items-center">
            <icons.SiZalo size={26} className="bg-slate-200 rounded-md p-1" />
            <a href="https://zalo.me/pc" className=" ml-2 font-medium">
              Chat để được tư vấn thêm. (8h30-20h00)
            </a>
          </div>
          <div className="mt-4 p-4 bg-slate-100 rounded-md">
            <h1 className="font-bold text-sm">
              Miễn phí giao hàng nhanh toàn quốc cho đơn hàng trên 200.000đ
            </h1>
            <p className="text-sm mt-2 flex items-center">
              Nội thành Hà Nội và HCM nhận hàng trong 1-2 ngày
            </p>
            <p className="text-sm mt-2 flex items-center">
              Ở tỉnh thành khác nhận hàng từ 2-5 ngày
            </p>
          </div>
        </div>
      </div>
      <div className="w-full mt-4">
        <div className="w-full lg:w-5/6 border-b-1 pb-6">
          <div className="w-full flex justify-between">
            <div className="w-2/5 flex items-center">
              <img
                src="https://www.coolmate.me/images/icons/icon3.svg"
                alt=""
              />
              <p className="text-[0.6rem] ml-2">
                Đổi trả cực dễ chỉ cần số điện thoại
              </p>
            </div>
            <div className="w-2/5 flex items-center">
              <img
                src="https://www.coolmate.me/images/icons/icon5.svg"
                alt=""
              />
              <p className="text-[0.6rem] ml-2">
                Đổi hàng trong 60 ngày 60 ngày đổi trả vì bất kỳ lý do gì
              </p>
            </div>
          </div>
          <div className="w-full flex justify-between mt-4">
            <div className="w-2/5 flex items-center">
              <img
                src="https://www.coolmate.me/images/icons/icon2.svg"
                alt=""
              />
              <p className="text-[0.6rem] ml-2">
                Hotline 1900.27.27.37 hỗ trợ từ 8h30 - 22h mỗi ngày
              </p>
            </div>
            <div className="w-2/5 flex items-center">
              <img
                src="https://www.coolmate.me/images/icons/icon1.svg"
                alt=""
              />
              <p className="text-[0.6rem] ml-2">
                Đến tận nơi nhận hàng trả, hoàn tiền trong 24h
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-4">
        <div className="w-full lg:w-5/6">
          <h1 className="text-sm font-medium">Các đặt điểm nỗi bặt</h1>
          <p className="p-4 bg-slate-100 rounded-md text-[0.8rem] mt-2">
            {productDetailInfo?.info?.info}
          </p>
        </div>
      </div>
      <div className="w-full mt-4">
        <div className="w-full lg:w-5/6">
          <h1 className="text-sm font-medium">Thông tin sản phẩm</h1>
          <p className="p-4 bg-slate-100 rounded-md text-[0.8rem] mt-2">
            {productDetailInfo?.info?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
