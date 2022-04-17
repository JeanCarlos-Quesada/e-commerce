import React from "react";
import "./productSelectColor_style.css";

const ProductSelectColor = ({ color }) => {
  const select = () => {
    let colors = document.getElementsByClassName("color-selector");
    for (let i = 0; i < colors.length; i++) {
      let div = colors[i];
      if (div.id === color) {
        let containClass = div.classList.contains("color-selector-selected");
        if (containClass) {
          div.classList.remove("color-selector-selected");
        } else {
          div.classList.add("color-selector-selected");
        }
      } else {
        div.classList.remove("color-selector-selected");
      }
    }
  };

  return (
    <div
      id={color}
      className="color-selector"
      style={{ background: color }}
      onClick={select}
    ></div>
  );
};

export default ProductSelectColor;
