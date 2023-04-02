import React from "react";

const Link = ({ route }) => {
  return (
    <>
      <a href={route.path}>
        <li className="mt-3 md:mt-0 text-primary hover:text-purple-500">{route.name}</li>
      </a>
    </>
  );
};

export default Link;
