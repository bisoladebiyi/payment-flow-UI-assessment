import React, { useState } from "react";
import useClickOut from "../../hooks/useClickOut";
import styles from "../../styles/Input.module.scss";

const Dropdown = ({ label, type, options, required, ...props }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [dropdownOptions, setDropdownOptions] = useState(options);
  const [value, setValue] = useState("");

  const domRef = useClickOut(() => {
    setShowOptions(false);
  });

  const showFn = (e) => {
    e.preventDefault();
    setShowOptions(true);
  };
  const select = (e) => {
    setValue(e.target.innerText);
    setShowOptions(false);
  };
  const onFocusLogic = () => {
    setShowOptions(true);
  };
  const onChangeLogic = (e) => {
    setValue(e.target.value);
    let filteredOptions = options.filter((op) =>
      op.includes(e.target.value.toLowerCase())
    );
    setDropdownOptions(filteredOptions);
  };
  return (
    <div className={styles.wrapper}>
      <label htmlFor="" className={styles.label}>
        {label} {required ? <span>*</span> : ""}
      </label>
      <input
        onFocus={onFocusLogic}
        onChange={onChangeLogic}
        type={type}
        value={value}
        {...props}
        className={styles.input}
        required={required}
      />
      <button className={styles.carret} onClick={showFn}>
        <svg
          width="21"
          height="11"
          viewBox="0 0 21 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.5643 10.1276C10.7693 10.1152 10.9641 10.0363 11.1177 9.90361L20.3177 1.83962C20.4083 1.76068 20.482 1.6651 20.5345 1.55838C20.5871 1.45165 20.6175 1.33589 20.624 1.21769C20.6306 1.09949 20.6131 0.981196 20.5726 0.869589C20.5321 0.757983 20.4694 0.65525 20.3881 0.56729C20.3068 0.479331 20.2084 0.407874 20.0987 0.357003C19.9889 0.306133 19.8699 0.27685 19.7486 0.270843C19.6272 0.264836 19.5058 0.282215 19.3913 0.32199C19.2768 0.361765 19.1715 0.423158 19.0815 0.502636L10.4996 8.02761L1.9177 0.502636C1.82764 0.423157 1.72235 0.361765 1.60788 0.32199C1.4934 0.282214 1.372 0.264837 1.25061 0.270843C1.12923 0.276849 1.01026 0.306119 0.900514 0.35699C0.79077 0.40786 0.692414 0.47933 0.611081 0.56729C0.529749 0.65525 0.46704 0.757982 0.426548 0.869589C0.386057 0.981196 0.368579 1.09948 0.375117 1.21768C0.381654 1.33587 0.412079 1.45165 0.464646 1.55838C0.517213 1.6651 0.590891 1.76068 0.681454 1.83962L9.88145 9.90361C9.97394 9.98377 10.0821 10.0449 10.1994 10.0834C10.3167 10.1219 10.4408 10.1369 10.5643 10.1276Z"
            fill="black"
          />
        </svg>
      </button>
      {showOptions && (
        <div ref={domRef} className={styles.options}>
          {dropdownOptions.map((option, i) => (
            <p onClick={select} key={i}>
              {option}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
