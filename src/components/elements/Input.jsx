import React, { useState } from "react";
import styles from "../../styles/Input.module.scss";

const Input = ({ label, type, required, inputType, ...props }) => {
  const [value, setValue] = useState("");
  const onChangeFn = (e) => {
    //   logic to check if content is erased
    if (e.target.value.length < value.length) {
      setValue(e.target.value);
      return;
    }
    // end

    // check max length 
    if (
      inputType === "cardNo" &&
      e.target.value.replaceAll(" ", "").length === 17
    ) {
      return;
    }
    if (
        inputType === "cvv" &&
        e.target.value.replaceAll(" ", "").length === 4
      ) {
        return;
    }
    if (
        inputType === "date" &&
        e.target.value.replaceAll(" ", "").length === 6
      ) {
        return;
    }
    // end 

    if (inputType === "date" && e.target.value.length === 2) {
      setValue(`${e.target.value}  /  `);
    } else if (
      inputType === "cardNo" &&
      e.target.value.replaceAll(" ", "").length % 4 === 0
    ) {
      setValue(`${e.target.value}   `);
    } else {
      setValue(e.target.value);
    }
  };
  return (
    <div className={styles.wrapper}>
      <label htmlFor="" className={styles.label}>
        {label} {required ? <span>*</span> : ""}
      </label>
      {type === "email" && <p>The purchase reciept would be sent to this address</p>}
      <input
        type={type}
        value={value}
        onChange={onChangeFn}
        {...props}
        className={styles.input}
        required={required}
      />
    </div>
  );
};

export default Input;
