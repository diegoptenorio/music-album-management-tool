import { Copyright, Logo, User } from "../components";
import "./layout.scss";

export const Layout = ({ children }) => (
  <div className="layout">
    <header>
      <div className="container">
        <Logo />
        <User />
      </div>
    </header>
    <main>{children}</main>
    <footer>
      <Copyright />
    </footer>
  </div>
);