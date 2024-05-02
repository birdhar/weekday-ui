import { MenuItem, Select } from "@mui/material";
import style from "./Style.module.css";

function FilterInput({ value, placeholder, handleChange, type }) {
  return (
    <div className={style.inputcontainer}>
      {type === "select" ? (
        <select
          value={value}
          onChange={handleChange}
          style={{ border: "none", outline: "none" }}
        >
          <option value="" disabled selected hidden>
            Remote
          </option>

          <option value={true}>True</option>
          <option value={false}>False</option>
        </select>
      ) : (
        <input
          type={type}
          value={value}
          className={style.input}
          placeholder={placeholder}
          onChange={handleChange}
        />
      )}
      {/* <svg
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
    </svg> */}
    </div>
  );
}

export default FilterInput;
