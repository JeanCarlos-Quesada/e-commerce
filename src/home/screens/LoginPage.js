import React from "react";
import Input from "../../components/Input/Index";

const LoginPage = () => {
  const onChange = (value) => {
    console.log(value);
  };

  return (
    <div className="center-div">
      <div className="login-div">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#333333"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </span>
        <div className="w-100 mt-2">
          <Input
            id="userName"
            type="text"
            title="User Name"
            isRequired={true}
            onSaveData={onChange}
          />
          <Input
            id="password"
            type="password"
            title="Password"
            isRequired={false}
            onSaveData={onChange}
          />
          <button className="btn btn-default-hover">Ingresar</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
