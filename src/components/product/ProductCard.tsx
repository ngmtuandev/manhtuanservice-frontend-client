import { Card, CardBody, CardFooter, Chip, Image } from "@nextui-org/react";
import icons from "../../utils/icons";
import { Link } from "react-router-dom";


const ProductCard = ({ product, className }: any) => {
  return (
    <Link to={`/products/${product?.id}`}>
      <Card
        key={product?.id}
        shadow="sm"
        isPressable
        className={`h-[24rem] min-w-[14rem] w-[14rem] mx-2 my-2 ${className}`}
        onPress={() => console.log("item pressed")}
      >
        <CardBody className="overflow-visible p-0 group">
          <Image
            radius="lg"
            width="100%"
            isZoomed
            className="w-full object-cover h-[17rem] p-1"
            src={product?.thumbnail}
          />
        </CardBody>
        <CardFooter className="text-small justify-between ">
          <div className="w-full overflow-hidden">
            <p className="text-medium text-wrap truncate font-semibold">
              {product.name}
            </p>
            <div className="my-1">
              {product?.images &&
                product?.images?.length > 0 &&
                product.images?.map((image: any, index: number) => (
                  <Chip
                    key={index}
                    color="primary"
                    className="bg-slate-600 mx-1 hover:bg-opacity-70"
                  >
                    {image?.color}
                  </Chip>
                ))}
            </div>
            <div className="w-full flex justify-between my-2">
              <icons.FaPlus
                size={24}
                className="text-end hover:text-blue-500 mb-1 transition-all "
              />
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
