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

  const onDataChante = () => {
    saveIsTyping(true);
    let value = document.getElementById(id).value;

    changeColor(value);
    onSaveData(value);
  };

  const changeColor = (value) => {
    let element = document.getElementById(`div_${id}`);
    if (isTyping && value === "" && isRequired) {
      element.style.border = "1px solid red";
      element.style.marginBottom = "10%";
      saveMessage("Required Input");
    } else {
      element.style.marginBottom = "5%";
      saveMessage("");
      if (isTyping) {
        element.style.border = "1px solid #136960";
      } else {
        element.style.border = "1px solid grey";
      }
    }
  };

  return (
    <div id={`div_${id}`} className={`div-input ${extraCss}`}>
      <label htmlFor={id} className="input-label">
        {title}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onDataChante}
        autoComplete="false"
        className="default-input"
      />
      {message !== "" && (
        <p style={{ color: "red", marginLeft: "-10px" }} className="mt-1">
          {message}
        </p>
      )}
    </div>
  );
};

export default Input;
