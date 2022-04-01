import React from "react";
import CheckboxFilter from "../CheckboxFilter/Index";
import "./Filter_style.css";

const Filters = ({ state, saveState }) => {
  const [currentRange, saveCurrentRange] = React.useState(0);

  const onFilter = (categorieValue) => {
    let search = document.getElementById("search-catalog").value.toUpperCase();
    let minPrice = parseFloat(document.getElementById("price").value);

    state.filterProducts = state.products.filter(
      (item) =>
        item.name.toUpperCase().includes(search) &&
        parseFloat(item.price) >= minPrice
    );

    if (categorieValue !== "0" && /[0-9]+/.test(categorieValue)) {
      state.filterProducts = state.filterProducts.filter(
        (item) => item.categorie == categorieValue
      );
    }

    saveState({ ...state });
    saveCurrentRange(minPrice);
  };

  return (
    <div className="filter-container">
      <div className="input-filter-catalog">
        <label htmlFor="search-catalog">Search</label>
        <br />
        <input
          id="search-catalog"
          type={"text"}
          placeholder="Search"
          onChange={onFilter}
        />
      </div>
      <div className="input-filter-catalog">
        <label htmlFor="price">Min Price</label>
        <br />
        <div className="w-100 range-price">
          <span className="mr-auto">$0</span>
          {currentRange !== 0 && (
            <span className="current-price">{`$${currentRange}`}</span>
          )}
          <span className="ml-auto">$100</span>
        </div>
        <input
          id="price"
          type={"range"}
          defaultValue={0}
          max={100}
          onChange={onFilter}
        ></input>
      </div>
      <div className="input-filter-catalog">
        <label>Status</label>
        <br />
        <CheckboxFilter
          isCategories={false}
          id="status_new"
          name={"New"}
          defaultChecked={false}
          onChange={onFilter}
        />
        <CheckboxFilter
          isCategories={false}
          id="status_used"
          name={"Used"}
          defaultChecked={false}
          onChange={onFilter}
        />
      </div>
      <div className="input-filter-catalog">
        <label>Categories</label>
        <br />
        {state.categories.map((item, index) => {
          return (
            <CheckboxFilter
              isCategories={true}
              id={`categorie_${item.name}`}
              name={item.name}
              defaultChecked={item.isCheck}
              categorie={item.id}
              onChange={onFilter}
              key={`categorie-filter-${index}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Filters;
