import React from "react";
import "./CheckboxFilter_style.css";

const CheckboxFilter = ({ isHorizontal, id, defaultChecked, name, category, onChange }) => {
  const onCheckChange = () => {
    onChange(category)
    unCheck();
  };

  const unCheck = () => {
    let allChecksFathers = undefined;

    if (!isHorizontal) {
      allChecksFathers = document.getElementsByClassName("filter-check-box-categories");
    } else {
      allChecksFathers = document.getElementsByClassName("filter-check-box-status");
    }

    for (var i = 0; i < allChecksFathers.length; i++) {
      let checkbox = allChecksFathers[i].getElementsByTagName("input")[0];
      if (checkbox.id !== id) {
        checkbox.checked = false;
      }
    }
  };

  return (
    <React.Fragment>
      {!isHorizontal && (
        <div className="filter-check-box-categories">
          <input
            id={id}
            type={"checkbox"}
            defaultChecked={defaultChecked}
            onChange={onCheckChange}
          ></input>
          <label htmlFor={id}>{name}</label>
        </div>
      )}
      {isHorizontal && (
        <div className="filter-check-box-status">
          <input
            id={id}
            type={"checkbox"}
            defaultChecked={defaultChecked}
            onChange={onCheckChange}
          ></input>
          <label htmlFor={id}>{name}</label>
        </div>
      )}
    </React.Fragment>
  );
};

export default CheckboxFilter;
