import React from "react";

type CustomeProps = {
  type: string;
  title: string;
  handleClick?: any;
  customStyles?: string;
};

const CustomButton: React.FC<CustomeProps> = ({
  title,
  handleClick,
  customStyles,
}) => {

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
