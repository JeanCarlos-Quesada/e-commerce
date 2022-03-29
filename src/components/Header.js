import React from "react";
import { useDispatch, useSelector } from "react-redux";

/*Actions*/
import { getCart } from "../actions/CartActions";

const Header = () => {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.list);

  React.useEffect(() => {
    dispatch(getCart());
  }, []);

  return (
    <header>
      <div className='mr-auto'>
        <span className='action-icon'>
          <svg
            width='21'
            height='17'
            viewBox='0 0 21 17'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M20.299 0.477941H5.62745C5.51691 0.477941 5.42647 0.563971 5.42647 0.669118V2.00735C5.42647 2.1125 5.51691 2.19853 5.62745 2.19853H20.299C20.4096 2.19853 20.5 2.1125 20.5 2.00735V0.669118C20.5 0.563971 20.4096 0.477941 20.299 0.477941ZM20.299 7.26471H5.62745C5.51691 7.26471 5.42647 7.35074 5.42647 7.45588V8.79412C5.42647 8.89927 5.51691 8.98529 5.62745 8.98529H20.299C20.4096 8.98529 20.5 8.89927 20.5 8.79412V7.45588C20.5 7.35074 20.4096 7.26471 20.299 7.26471ZM20.299 14.0515H5.62745C5.51691 14.0515 5.42647 14.1375 5.42647 14.2426V15.5809C5.42647 15.686 5.51691 15.7721 5.62745 15.7721H20.299C20.4096 15.7721 20.5 15.686 20.5 15.5809V14.2426C20.5 14.1375 20.4096 14.0515 20.299 14.0515ZM0 1.33824C-2.75302e-09 1.51397 0.0363896 1.68799 0.107091 1.85036C0.177793 2.01272 0.281421 2.16024 0.412061 2.28451C0.5427 2.40878 0.697791 2.50735 0.86848 2.5746C1.03917 2.64186 1.22211 2.67647 1.40686 2.67647C1.59161 2.67647 1.77456 2.64186 1.94525 2.5746C2.11593 2.50735 2.27103 2.40878 2.40166 2.28451C2.5323 2.16024 2.63593 2.01272 2.70663 1.85036C2.77734 1.68799 2.81373 1.51397 2.81373 1.33824C2.81373 1.1625 2.77734 0.988477 2.70663 0.826115C2.63593 0.663753 2.5323 0.516227 2.40166 0.39196C2.27103 0.267693 2.11593 0.16912 1.94525 0.101867C1.77456 0.0346144 1.59161 0 1.40686 0C1.22211 0 1.03917 0.0346144 0.86848 0.101867C0.697791 0.16912 0.5427 0.267693 0.412061 0.39196C0.281421 0.516227 0.177793 0.663753 0.107091 0.826115C0.0363896 0.988477 -2.75302e-09 1.1625 0 1.33824ZM0 8.125C-2.75302e-09 8.30074 0.0363896 8.47476 0.107091 8.63712C0.177793 8.79948 0.281421 8.94701 0.412061 9.07127C0.5427 9.19554 0.697791 9.29412 0.86848 9.36137C1.03917 9.42862 1.22211 9.46324 1.40686 9.46324C1.59161 9.46324 1.77456 9.42862 1.94525 9.36137C2.11593 9.29412 2.27103 9.19554 2.40166 9.07127C2.5323 8.94701 2.63593 8.79948 2.70663 8.63712C2.77734 8.47476 2.81373 8.30074 2.81373 8.125C2.81373 7.94926 2.77734 7.77524 2.70663 7.61288C2.63593 7.45052 2.5323 7.30299 2.40166 7.17872C2.27103 7.05446 2.11593 6.95588 1.94525 6.88863C1.77456 6.82138 1.59161 6.78676 1.40686 6.78676C1.22211 6.78676 1.03917 6.82138 0.86848 6.88863C0.697791 6.95588 0.5427 7.05446 0.412061 7.17872C0.281421 7.30299 0.177793 7.45052 0.107091 7.61288C0.0363896 7.77524 -2.75302e-09 7.94926 0 8.125ZM0 14.9118C-2.75302e-09 15.0875 0.0363896 15.2615 0.107091 15.4239C0.177793 15.5862 0.281421 15.7338 0.412061 15.858C0.5427 15.9823 0.697791 16.0809 0.86848 16.1481C1.03917 16.2154 1.22211 16.25 1.40686 16.25C1.59161 16.25 1.77456 16.2154 1.94525 16.1481C2.11593 16.0809 2.27103 15.9823 2.40166 15.858C2.5323 15.7338 2.63593 15.5862 2.70663 15.4239C2.77734 15.2615 2.81373 15.0875 2.81373 14.9118C2.81373 14.736 2.77734 14.562 2.70663 14.3996C2.63593 14.2373 2.5323 14.0898 2.40166 13.9655C2.27103 13.8412 2.11593 13.7427 1.94525 13.6754C1.77456 13.6081 1.59161 13.5735 1.40686 13.5735C1.22211 13.5735 1.03917 13.6081 0.86848 13.6754C0.697791 13.7427 0.5427 13.8412 0.412061 13.9655C0.281421 14.0898 0.177793 14.2373 0.107091 14.3996C0.0363896 14.562 -2.75302e-09 14.736 0 14.9118Z'
              fill='#333333'
            />
          </svg>
        </span>
        <a href='#logo'>Logo</a>
      </div>
      <div className='ml-auto'>
        <a href='#Register'>Register</a>
        <a href='/Login' className='btn'>
          Login
        </a>
        <span className='action-icon'>
          <span className='cartCount'>
            {cartList.length > 99 ? `+99` : cartList.length}
          </span>
          <svg
            width='26'
            height='29'
            viewBox='0 0 26 29'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M24 7.14286H19.1429V6.57143C19.1429 2.94286 16.2 0 12.5714 0C8.94286 0 6 2.94286 6 6.57143V7.14286H1.14286C0.510714 7.14286 0 7.65357 0 8.28572V27.4286C0 28.0607 0.510714 28.5714 1.14286 28.5714H24C24.6321 28.5714 25.1429 28.0607 25.1429 27.4286V8.28572C25.1429 7.65357 24.6321 7.14286 24 7.14286ZM8.57143 6.57143C8.57143 4.36071 10.3607 2.57143 12.5714 2.57143C14.7821 2.57143 16.5714 4.36071 16.5714 6.57143V7.14286H8.57143V6.57143ZM22.5714 26H2.57143V9.71429H6V12.8571C6 13.0143 6.12857 13.1429 6.28571 13.1429H8.28572C8.44286 13.1429 8.57143 13.0143 8.57143 12.8571V9.71429H16.5714V12.8571C16.5714 13.0143 16.7 13.1429 16.8571 13.1429H18.8571C19.0143 13.1429 19.1429 13.0143 19.1429 12.8571V9.71429H22.5714V26Z'
              fill='#333333'
            />
          </svg>
        </span>
      </div>
    </header>
  );
};

export default Header;
