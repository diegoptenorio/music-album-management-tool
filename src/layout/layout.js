import { Copyright, Logo, User } from "../components";
import "./layout.scss";

export const Layout = ({ children }) => (
  <>
    <header>
      <div className="container">
        <Logo />
        <User />
      </div>
    </header>
    <footer>
      <Copyright />
    </footer>
  </>
);