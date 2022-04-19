import React from "react";
import "./loading_style.css";

const Loading = () => {
  return (
    <div className="loading">
      <div class='lds-ellipsis'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
