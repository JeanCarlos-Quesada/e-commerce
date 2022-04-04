import React from "react";
import { useSearchParams } from "react-router-dom";
import "./Filter_style.css";

/*Components*/
import CheckboxFilter from "../CheckboxFilter/Index";

const Filters = ({ state, saveState, saveTitle }) => {
  const [searchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);

  const [currentRange, saveCurrentRange] = React.useState(0);
  const [maxPrice, saveMaxPrice] = React.useState(0);
  const [lastCategory, saveLastCategory] = React.useState(undefined);

  React.useEffect(() => {
    let categorySelected = state.categories.find(
      (item) => item.name === params.category
    );

    if (categorySelected !== undefined) {
      state.filterProducts = state.products.filter(
        (item) => item.category === categorySelected.id
      );
      saveLastCategory(categorySelected.id);
      saveTitle(categorySelected.name);
    } else {
      state.filterProducts = state.products;
    }

    saveState({ ...state });
    calMaxPrice();
  }, [searchParams]);

  const onFilter = (categoryValue) => {
    let search = document.getElementById("search-catalog").value.toUpperCase();
    let minPrice = parseFloat(document.getElementById("price").value);
    let products = [];

    products = state.products.filter(
      (item) =>
        item.name.toUpperCase().includes(search) &&
        parseFloat(item.price) >= minPrice
    );

    if (search === "") {
      if (categoryValue !== "0" && /[0-9]+/.test(categoryValue)) {
        products = products.filter((item) => item.category === categoryValue);
        saveLastCategory(categoryValue);
      } else if (lastCategory !== undefined && categoryValue !== "0") {
        products = products.filter((item) => item.category === lastCategory);
      }
    }

    if (categoryValue !== "0" || lastCategory !== "0") {
      let newTitle = state.categories.find((item) => item.id === categoryValue).name;
      saveTitle(newTitle);
    }

    

    state.filterProducts = products;

    saveState({ ...state });
    saveCurrentRange(minPrice);
    calMaxPrice();
  };

  const calMaxPrice = async () => {
    let maxPrice = 0;
    if (state.filterProducts.length !== 0) {
      maxPrice = parseInt(
        state.filterProducts.sort(
          (a, b) => parseFloat(b.price) - parseFloat(a.price)
        )[0].price
      );
    }

    saveMaxPrice(maxPrice);
  };

  return (
    <div className='filter-container'>
      <div className='input-filter-catalog'>
        <label htmlFor='search-catalog'>Search</label>
        <br />
        <input
          id='search-catalog'
          type={"text"}
          placeholder='Search'
          onChange={onFilter}
        />
      </div>
      <div className='input-filter-catalog'>
        <label htmlFor='price'>Min Price</label>
        <br />
        <div className='w-100 range-price'>
          <span className='mr-auto'>$0</span>
          {currentRange !== 0 && (
            <span className='current-price'>{`$${currentRange}`}</span>
          )}
          <span className='ml-auto'>${maxPrice}</span>
        </div>
        <input
          id='price'
          type={"range"}
          defaultValue={0}
          max={maxPrice}
          onChange={onFilter}
        ></input>
      </div>
      <div className='input-filter-catalog'>
        <label>Status</label>
        <br />
        <CheckboxFilter
          isHorizontal={true}
          id='status_new'
          name={"New"}
          defaultChecked={false}
          onChange={onFilter}
        />
        <CheckboxFilter
          isHorizontal={true}
          id='status_used'
          name={"Used"}
          defaultChecked={false}
          onChange={onFilter}
        />
      </div>
      <div className='input-filter-catalog'>
        <label>Categories</label>
        <br />
        {state.categories.map((item, index) => {
          return (
            <CheckboxFilter
              isHorizontal={false}
              id={`category_${item.name}`}
              name={item.name}
              defaultChecked={params.category && params.category === item.name ? true : params.category === undefined && item.name === 'All'}
              category={item.id}
              onChange={onFilter}
              key={`category-filter-${index}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Filters;
