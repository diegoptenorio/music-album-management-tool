import VenturusLogo from "../../assets/img/logo.png";
import "./logo.scss";

export const Logo = () => (
  <div className="logo">
    <img src={VenturusLogo} alt="Logo Music Management Tool" />
    <h1>Music Management Tool</h1>
  </div>
);