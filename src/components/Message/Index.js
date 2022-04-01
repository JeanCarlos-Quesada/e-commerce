import React from "react";
import "./message_style.css";

const Message = ({ message }) => {
  return (
    <div className="message">
      <p>{message}</p>
    </div>
  );
};

export default Message;
