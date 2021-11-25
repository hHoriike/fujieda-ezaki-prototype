import React from "react";

const Picsum = ({ id, className, width = "auto", height = "200px" }) => (
  <img
    src={`https://picsum.photos/id/${id}/200/300`}
    alt="Picsum"
    className={className}
    style={{ objectFit: "cover", width: width, height: height }}
  />
);

export default Picsum;
