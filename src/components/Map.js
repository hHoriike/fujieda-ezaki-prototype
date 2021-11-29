import React from "react";
import map from "../map.png";

const Map = () => (
  <img
    src={map}
    alt="test"
    style={{
      objectFit: "cover",
      width: "100%",
      height: "100%",
    }}
  />
);

export default Map;
