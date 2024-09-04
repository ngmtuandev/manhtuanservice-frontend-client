import { Select, SelectItem } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useGetBrand } from "../../hooks";
import { TBrand } from "../../types";
import { useRecoilState } from "recoil";
import { stateFilter } from "../../store/filter.store";

const BrandFilter = () => {
  const [value, setValue] = React.useState(new Set([]));
  const [filterInfo, setFilterInfo] = useRecoilState(stateFilter);

  const { brands } = useGetBrand();

  const handleSelect = (valueSelect: any) => {
    setValue(valueSelect['currentKey'])
    setFilterInfo({ ...filterInfo, brandId: valueSelect['currentKey'] })
  };

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Select
        label="Sản phẩm"
        variant="bordered"
        placeholder="Chọn loại sản phẩm"
        selectedKeys={value}
        className="max-w-xs"
        onSelectionChange={(e: any) => {
          handleSelect(e);
        }}
      >
        {brands?.data &&
          brands?.data?.map((brand: TBrand) => (
            <SelectItem key={brand?.id} value={brand?.id}>
              {brand?.brand}
            </SelectItem>
          ))}
      </Select>
    </div>
  );
};

export default BrandFilter;
