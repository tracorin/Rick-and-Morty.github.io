// react
import React from "react";
// styles
import styles from "./styles.module.scss";

const Button = ({ title, onClick, disabled }) => {
  return (
    <button
      type={"button"}
      className={disabled ? styles.disable : styles.button}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
