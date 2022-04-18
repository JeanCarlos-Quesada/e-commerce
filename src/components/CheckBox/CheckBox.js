import React from "react";
import "./checkBox_style.css";

const CheckBox = ({ id, label }) => {
  const onCheck = () => {
    const checkbox = document.getElementById(id);

    if (!checkbox.classList.contains("check")) {
      checkbox.classList.add("check");
    } else {
      checkbox.classList.remove("check");
    }
  };

  return (
    <div className='cb_container' onClick={onCheck}>
      <div id={id} className='checkbox'>
        <div className='checkbox-contain'></div>
      </div>
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default CheckBox;
