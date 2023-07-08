import { Spin } from "antd";

const LoadingSpin = () => {
  return (
    <div className="w-full h-screen flex items-start justify-start">
      <Spin size="large" />
    </div>
  );
};

export default LoadingSpin;
