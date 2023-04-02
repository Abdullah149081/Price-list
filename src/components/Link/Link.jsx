import React from "react";

const Link = ({ route }) => {
  return (
    <a href={route.path}>
      <li>{route.name}</li>
    </a>
  );
};

export default Link;
