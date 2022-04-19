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
  const [lastSubCategory, saveLastSubCategory] = React.useState(undefined);

  /*Execute cal max price when the state change*/
  React.useEffect(() => {
    calMaxPrice();
  }, [state]);

  React.useEffect(() => {
    let categorySelected = state.categories.find((item) => item.name === params.category);

    if (categorySelected !== undefined) {
      state.filterProducts = state.products.filter((item) => item.category === categorySelected.id);
      saveLastCategory(categorySelected.id);
      saveTitle(categorySelected.name);
    } else {
      state.filterProducts = state.products;
    }

    saveState({ ...state });
    calMaxPrice();
  }, [searchParams]);


  const onFilter = (value, type)=>{
    let search = document.getElementById("search-catalog").value.toUpperCase();
    let minPrice = parseFloat(document.getElementById("price").value);
    let products = [];

    if (search !== "") {
      products = state.products.filter((item) => item.name.toUpperCase().includes(search));
      products = products.filter(x => parseFloat(x.price) >= minPrice);
      resetCheckBox(true);
    } else{
      switch (type) {
        case 'category':
          products = onFilterCategory(value);
          state.filterSubCategories = value === "0" ? state.subCategories : state.subCategories.filter(x => x.category === value || x.category === "0");
          break;
        case 'subCategory':
          products = onFilterSubCategories(value);
          break;
        case 'price':
          products = onFilterSubCategories(value);
          products = products.filter(x => parseFloat(x.price) >= minPrice);
          break;
        default:
          products = state.products;
          break;
      }
    }
    
    state.filterProducts = products;

    saveCurrentRange(minPrice);
    saveState({...state});
  }

  const onFilterCategory = (category)=>{
    let products = state.products;
    let newTitle = "All";
    if (category !== "0" && /[0-9]+/.test(category)) {
      products = products.filter((x) => x.categoryID.toString() === category);
      newTitle = state.categories.find((item) => item.id === category).name;
      saveLastCategory(category);
    } else if (lastCategory !== undefined && category !== "0") {
      products = products.filter((item) => item.categoryID.toString() === lastCategory);
      newTitle = state.categories.find((item) => item.id === lastCategory).name;
    } else {
      saveLastCategory(undefined);
    }

    saveTitle(newTitle);
    resetCheckBox(false);

    return products;
  }

  const onFilterSubCategories = (subCategory)=>{
    let products = state.products;

    if (subCategory !== "0" && /[0-9]+/.test(subCategory)) {
      products = products.filter((x) => x.subCategoryID.toString() === subCategory && (x.categoryID.toString() === lastCategory || lastCategory === undefined));
      saveLastSubCategory(subCategory);
    } else if (lastSubCategory !== undefined && subCategory !== "0") {
      products = products.filter((x) => x.subCategoryID.toString() === lastSubCategory && (x.categoryID.toString() === lastCategory || lastCategory === undefined));
    } else if (lastCategory !== undefined) {
      saveLastSubCategory(undefined);
      products = products.filter((x) => x.categoryID.toString() === lastCategory);
    }

    return products;
  }

  const resetCheckBox = (resetCategories) =>{
    let allChecksFathers = document.getElementsByClassName("filter-check-box-categories");

    for (var i = 0; i < allChecksFathers.length; i++) {
      let checkbox = allChecksFathers[i].getElementsByTagName("input")[0];
      if(checkbox.id.includes("sub_category")){
        checkbox.checked = checkbox.id === "sub_category_All";
      } else if (resetCategories) {
        checkbox.checked = checkbox.id === "category_All";
      }
    }
  }

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
          onChange={() => {
            onFilter(null,"price");
          }}
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
              onChange={(value) => {
                onFilter(value,"category");
              }}
              key={`category-filter-${index}`}
            />
          );
        })}
      </div>
      <div className='input-filter-catalog'>
        <label>Sub Categories</label>
        <br />
        {state.filterSubCategories.map((item, index) => {
          return (
            <CheckboxFilter
              isHorizontal={false}
              id={`sub_category_${item.name}`}
              name={item.name}
              defaultChecked={params.category && params.category === item.name ? true : params.category === undefined && item.name === 'All'}
              category={item.id}
              onChange={(value) => {
                onFilter(value,"subCategory");
              }}
              key={`category-filter-${index}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Filters;
