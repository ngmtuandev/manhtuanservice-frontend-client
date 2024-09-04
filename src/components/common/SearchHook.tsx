import React, { useEffect } from "react";
import { Input } from "@nextui-org/react";
import { TIME_DEBOUCE } from "../../utils/constant";
import useDebounce from "../../hooks/useDebouce";
import { useRecoilState } from "recoil";
import { stateFilter } from "../../store/filter.store";


const SearchHook = () => {
  const [value, setValue] = React.useState("");
  const valueDebouce = useDebounce(value, TIME_DEBOUCE.SEARCH_HEADER);
  const [filterInfo, setFilterInfo] = useRecoilState(stateFilter);

  useEffect(() => {
    setFilterInfo({ ...filterInfo, name: value });
  }, [valueDebouce]);

  return (
    <div className="w-full flex flex-col gap-2 max-w-[240px]">
      <Input
        label="Sản phẩm"
        placeholder="Nhập tên sản phẩm"
        value={value}
        onValueChange={setValue}
      />
      <p className="text-default-500 text-small">
        Sản phẩm đang tìm:
      </p>
    </div>
  );
};

export default SearchHook;
