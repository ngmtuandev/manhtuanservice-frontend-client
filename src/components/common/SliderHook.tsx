import React, { memo } from "react";
import { Slider } from "@nextui-org/react";
import { stateFilter } from "../../store/filter.store";
import { useRecoilState } from "recoil";



const SliderHook = memo(() => {

  const [filterInfo, setFilterInfo] = useRecoilState(stateFilter);
  const [value, setValue] = React.useState([0, 50000000]);

  const setValueHandle = (value: any) => {
    setValue(value);
  };

  const handleSliderChangeComplete = () => {
    setFilterInfo({ ...filterInfo, priceMin: value[0], priceMax: value[1] })
  };

  return (
    <div className="flex flex-col gap-2 w-full h-full max-w-md items-start justify-center">
      <Slider
        label="Khoản tiền"
        formatOptions={{ style: "currency", currency: "VND" }}
        step={10000}
        maxValue={50000000}
        minValue={0}
        value={value}
        onChange={setValueHandle}
        onChangeEnd={handleSliderChangeComplete}
        className="max-w-md"
      />
      <p className="text-default-500 font-medium text-small">
        Khoản tiền:{" "}
        {Array.isArray(value) && value.map((b) => `₫${b}`).join(" – ")}
      </p>
    </div>
  );
});

export default SliderHook;
