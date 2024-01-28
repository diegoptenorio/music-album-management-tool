import "./layout.scss";

export const LayoutHeader = ({ children }) => (
    <header>
      <div className="container">
        {children}
      </div>
    </header>
);