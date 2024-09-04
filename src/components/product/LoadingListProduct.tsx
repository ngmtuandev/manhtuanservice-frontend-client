import { Card, Skeleton } from "@nextui-org/react";

const LoadingListProduct = () => {
  const products = [1, 2, 3, 4, 5, 6];

  return (
    <div className="flex flex-wrap justify-around">
      {products &&
        products.length > 0 &&
        products.map(() => (
          <Card
            className="h-[24rem] min-w-[14rem] w-[14rem] mx-2 my-2  lg:w-[18rem]"
            radius="lg"
          >
            <Skeleton isLoaded={false} className="rounded-lg">
              <div className="h-[14rem] rounded-lg bg-secondary"></div>
            </Skeleton>
            <div className="space-y-3 mt-10 ml-4">
              <Skeleton isLoaded={false} className="w-3/5 rounded-lg">
                <div className="h-3 w-full rounded-lg bg-secondary"></div>
              </Skeleton>
              <Skeleton isLoaded={false} className="w-4/5 rounded-lg">
                <div className="h-3 w-full rounded-lg bg-secondary-300"></div>
              </Skeleton>
              <Skeleton isLoaded={false} className="w-2/5 rounded-lg">
                <div className="h-3 w-full rounded-lg bg-secondary-200"></div>
              </Skeleton>
            </div>
          </Card>
        ))}
    </div>
  );
};

export default LoadingListProduct;
