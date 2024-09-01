import { Empty } from "antd";
const NotFound = () => {
  return (
    <Empty
      image={
        "https://nissan.navigation.com/static/WFS/Shop-Site/-/Shop/en_US/Product%20Not%20Found.png"
      }
      description="Không tìm thấy dữ liệu"
    />
  );
};

export default NotFound;
