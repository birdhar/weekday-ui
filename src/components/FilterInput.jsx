import style from "./Style.module.css";
import { useState } from "react";

function FilterInput({
  value,
  placeholder,
  handleChange,
  type,
  options,
  reff,
}) {
  const [inputVal, setInputVal] = useState("");
  const [open, setOpen] = useState(false);
  //   console.log(value, value ? "Yes" : "No");
  return (
    <div className={style.inputcontainer} onClick={() => setOpen(!open)}>
      {value && value !== "" && (
        <div className={style.selectedval}>
          {value}{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={style.close}
            onClick={() => {
              handleChange(value, "remove");
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      )}
      <input
        type={type}
        value={inputVal}
        className={style.input}
        placeholder={placeholder}
        onChange={(e) => setInputVal(e.target.value)}
      />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={style.icon}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </svg>

      {(open || (inputVal && inputVal !== "")) && (
        <div className={style.dropdown}>
          {options?.map((option, index) => (
            <div
              className={style.dropdownitem}
              key={index}
              onClick={() => {
                handleChange(option, "add");
                setInputVal("");
                setOpen(false);
              }}
            >
              {option} {reff === "basepayRef" && "L"}{" "}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FilterInput;
