import Circle from "react-circle";

const ProcessCircularBar = () => {
  return (
    <Circle
      size="65"
      bgColor="#cad2c5  "
      progressColor="#007ea7"
      lineWidth="30"
      percentSpacing={5}
      showPercentage={true}
      progress={7.8 * 10}
    />
  );
};

export default ProcessCircularBar;
