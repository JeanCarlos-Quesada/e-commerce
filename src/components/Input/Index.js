import React from "react";
import "./input_style.css";

const Input = ({
  id,
  type,
  placeholder,
  title,
  extraCss,
  onSaveData,
  isRequired,
}) => {
  const [isTyping, saveIsTyping] = React.useState(false);
  const [message, saveMessage] = React.useState("");

  const onDataChange = () => {
    saveIsTyping(true);
    let value = document.getElementById(id).value;

    changeColor(value);
    onSaveData(id, value);
  };

  const changeColor = (value) => {
    let element = document.getElementById(`div_${id}`);
    if (isTyping && value === "" && isRequired) {
      element.style.border = "1px solid red";
      saveMessage("Required Input");
    } else {
      saveMessage("");
      if (isTyping) {
        element.style.border = "1px solid #136960";
      } else {
        element.style.border = "1px solid grey";
      }
    }
  };

  return (
    <React.Fragment>
      <div id={`div_${id}`} className={`div-input ${extraCss}`}>
        <label htmlFor={id} className='input-label'>
          {title}
        </label>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          onChange={onDataChange}
          autoComplete='false'
          className='default-input'
        />
      </div>
      {message !== "" && <p className='input-message'>{message}</p>}
    </React.Fragment>
  );
};

export default Input;
