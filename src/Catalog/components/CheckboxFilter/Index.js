import React from "react";
import "./CheckboxFilter_style.css";

const CheckboxFilter = ({ isCategories, id, defaultChecked, name, categorie, onChange }) => {
  const onCheckChange = () => {
    onChange(categorie)
    unCheck();
  };

  const unCheck = () => {
    let allChecksFathers = undefined;

    if (isCategories) {
      allChecksFathers = document.getElementsByClassName(
        "filter-check-box-categories"
      );
    } else {
      allChecksFathers = document.getElementsByClassName(
        "filter-check-box-status"
      );
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
      {isCategories && (
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
      {!isCategories && (
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
