import React from "react";
import { useAppSelector } from "../../hooks/useSeleceter";
import { getContrastingColor } from "../../config/hepler";

type CustomeProps = {
  type: string;
  title: string;
  handleClick?: any;
  customStyles?: string;
};

const CustomButton: React.FC<CustomeProps> = ({
  type,
  title,
  handleClick,
  customStyles,
}) => {
  const snap = useAppSelector((state) => state.design);

  const generateStyle = (type: string) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    } else if (type === "outline") {
      return {
        borderWidth: "1px",
        borderColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    }
  };

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
