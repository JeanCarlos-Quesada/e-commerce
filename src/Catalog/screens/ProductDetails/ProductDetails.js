import React from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import "./productDetails_style.css";

/*Components*/
import ProductBanner from "../../components/ProductBanner/ProductBanner";
import ProductSelectColor from "../../components/ProductSelectColor/ProductSelectColor";
import CheckBox from "../../../components/CheckBox/CheckBox";

/*Hooks*/
import useProduct from "../../../hooks/useProduct";

/*Redux*/
import { setItemToCart } from "../../../actions/CartActions";
import { showMessage, hiddenMessage } from "../../../actions/UtilitiesActions";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { GetOne } = useProduct();

  const [searchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);

  const [product, saveProduct] = React.useState({
    colors: [],
    sizes: [],
  });
  const [cartInfo, saveCartInfo] = React.useState({
    amount: 1,
    price: 0,
    amountInInventory: 0
  });

  React.useEffect(() => {
    GetOne(params.code).then((product) => {
      saveProduct(product);

      cartInfo.price = product.price;
      cartInfo.amountInInventory = product.amountInInventory;
      saveCartInfo({ ...cartInfo });
    });
  }, []);

  const changeAmount = (type) => {
    if (product.amountInInventory > cartInfo.amount) {
      if (type === 1 && cartInfo.amount > 1) {
        cartInfo.amount -= 1;
      } else if (type === 2) {
        cartInfo.amount += 1;
      }

      cartInfo.price = (product.price * cartInfo.amount).toFixed(2);

      saveCartInfo({ ...cartInfo });
    } else {
      dispatch(showMessage("Max amount valid"));
      /*hidden message*/
      setTimeout(() => {
        dispatch(hiddenMessage());
      }, 2100);
    }
  };

  const addToCart = () => {
    let message = "Max amount valid";
    if (product.amountInInventory >= cartInfo.amount) {
      dispatch(
        setItemToCart({
          id: product.id,
          name: product.name,
          details: product.details,
          price: cartInfo.price,
          amount: cartInfo.amount,
          amountInInventory: cartInfo.amountInInventory
        })
      );
      message = "Product Register";
    }
    dispatch(showMessage(message));
    /*hidden message*/
    setTimeout(() => {
      dispatch(hiddenMessage());
    }, 2100);
  };

  return (
    <React.Fragment>
      <ProductBanner />
      <div className='product-information'>
        <h2 className='title'>{product.name}</h2>
        <p>{product.details}</p>
        <div className='sub-details'>
          {product.sizes.length > 0 && <h1>Colors</h1>}
          {product.colors.map((item, index) => {
            return <ProductSelectColor color={item} key={`color_${index}`} />;
          })}
        </div>
        <div className='sub-details'>
          {product.sizes.length > 0 && <h1>Size</h1>}
          {product.sizes.map((item, index) => {
            return (
              <CheckBox
                id={`checkBox_id_${item}`}
                label={item}
                key={`size_${index}`}
              />
            );
          })}
        </div>
        <div className='sub-details'>
          <h2 className='product-price'>${cartInfo.price}</h2>
          <div className='form-inline'>
            <div className='amount-products'>
              <span
                onClick={() => {
                  changeAmount(1);
                }}
              >
                <svg
                  width='18'
                  height='18'
                  viewBox='0 0 18 18'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M1 2C1 1.44772 1.44772 1 2 1H16C16.5523 1 17 1.44772 17 2V16C17 16.5523 16.5523 17 16 17H2C1.44771 17 1 16.5523 1 16V2Z'
                    stroke='currentColor'
                    strokeWidth='2'
                  />
                  <path
                    d='M14.25 9C14.25 9.41421 13.9142 9.75 13.5 9.75H4.5C4.08579 9.75 3.75 9.41421 3.75 9C3.75 8.58579 4.08579 8.25 4.5 8.25H13.5C13.9142 8.25 14.25 8.58579 14.25 9Z'
                    fill='currentColor'
                  />
                </svg>
              </span>
              <p>{cartInfo.amount}</p>
              <span
                onClick={() => {
                  changeAmount(2);
                }}
              >
                <svg
                  width='18'
                  height='18'
                  viewBox='0 0 18 18'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M16 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM16 16H2V2H16V16ZM8 14H10V10H14V8H10V4H8V8H4V10H8V14Z'
                    fill='currentColor'
                  />
                </svg>
              </span>
            </div>
            <button className='cart-button' onClick={addToCart}>
              <svg
                width='18'
                height='19'
                viewBox='0 0 18 19'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M8.81448 7.09714H10.5774V4.43571H13.2217V2.66143H10.5774V0H8.81448V2.66143H6.17014V4.43571H8.81448V7.09714ZM5.28869 15.0814C4.3191 15.0814 3.53461 15.8799 3.53461 16.8557C3.53461 17.8316 4.3191 18.63 5.28869 18.63C6.25828 18.63 7.05159 17.8316 7.05159 16.8557C7.05159 15.8799 6.25828 15.0814 5.28869 15.0814ZM14.1032 15.0814C13.1336 15.0814 12.3491 15.8799 12.3491 16.8557C12.3491 17.8316 13.1336 18.63 14.1032 18.63C15.0728 18.63 15.8661 17.8316 15.8661 16.8557C15.8661 15.8799 15.0728 15.0814 14.1032 15.0814ZM6.25828 10.6457H12.8251C13.4862 10.6457 14.0679 10.282 14.3676 9.73196L17.77 3.51309L16.2363 2.66143L12.8251 8.87143H6.63731L2.88234 0.887143H0V2.66143H1.7629L4.93611 9.39484L3.74616 11.5595C3.1027 12.7482 3.94889 14.1943 5.28869 14.1943H15.8661V12.42H5.28869L6.25828 10.6457Z'
                  fill='#F2F2F2'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductDetails;
