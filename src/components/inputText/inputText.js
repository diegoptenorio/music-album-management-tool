import Search from "../../assets/img/search.svg";
import "./inputText.scss";

export const InputText = ({ icon, label, name, onChange, value }) => (
  <div className="input">
    <label htmlFor={name}>{label}</label>
    <div className="inputContainer">
      <input
        type="text"
        name={name}
        id={name}
        onChange={(event) => onChange(event)}
        value={value}
      />
      {icon === "search" && <img src={Search} alt="search" draggable={false} />}
    </div>
  </div>
);
