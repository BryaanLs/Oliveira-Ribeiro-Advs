import React from "react";
import "/src/index.css";

// eslint-disable-next-line react/prop-types
const Container = ({ classContainer, containerBg, children }) => {
  return <section className={`container ${containerBg}`}>{children}</section>;
};

export default Container;
