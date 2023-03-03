import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const CartIcon = (props) => (
  <Svg
    width={28}
    height={34}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M25.99 20.951 24.315 6.22a1.82 1.82 0 0 0-.61-1.17 1.878 1.878 0 0 0-1.25-.464h-3.921a5.505 5.505 0 0 0-1.917-3.286A5.674 5.674 0 0 0 13 0c-1.324 0-2.605.46-3.618 1.299a5.505 5.505 0 0 0-1.917 3.286h-3.92a1.879 1.879 0 0 0-1.25.465 1.82 1.82 0 0 0-.61 1.169L.01 20.95a1.835 1.835 0 0 0 .468 1.439 1.888 1.888 0 0 0 1.393.61h22.256a1.888 1.888 0 0 0 1.393-.61 1.856 1.856 0 0 0 .468-1.439ZM9.254 9.188a.913.913 0 0 1-.274.652.944.944 0 0 1-1.324 0 .913.913 0 0 1-.274-.652V7.347c0-.244.099-.479.274-.651a.944.944 0 0 1 1.324 0 .913.913 0 0 1 .274.65v1.842Zm.117-4.603a3.68 3.68 0 0 1 1.332-1.996A3.785 3.785 0 0 1 13 1.815c.832 0 1.64.272 2.296.774a3.68 3.68 0 0 1 1.332 1.996H9.372Zm9.245 4.603a.913.913 0 0 1-.274.652.944.944 0 0 1-1.324 0 .913.913 0 0 1-.274-.652V7.347c0-.244.098-.479.274-.651a.944.944 0 0 1 1.324 0 .913.913 0 0 1 .274.65v1.842Z"
      x={1}
      y={1}
      fill={props.isActive ? "#E0C18F" : "transparent"}
      opacity={props.isActive ? 1 : 0.65}
      stroke={props.isActive ? "" : "white"}
    />
    <Circle
      cx={14}
      cy={30}
      r={2}
      fill={props.isActive ? "#E0C18F" : "transparent"}
      stroke={props.isActive ? "#E0C18F" : "transparent"}
    />
  </Svg>
);

export default CartIcon;
