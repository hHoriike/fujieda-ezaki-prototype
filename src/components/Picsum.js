import React from "react";

const Picsum = ({
  id,
  className,
  width = "auto",
  height = "200px",
  filter,
}) => (
  <img
    src={`https://picsum.photos/id/${id}/200/300`}
    alt="Picsum"
    className={className}
    style={{ objectFit: "cover", width: width, height: height, filter }}
  />
);

export default Picsum;
