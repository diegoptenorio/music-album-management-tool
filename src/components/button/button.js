import "./button.scss";

export const Button = ({ icon, onClick, radius, text }) => {
    return (
      <button onClick={onClick} style={{ borderRadius: radius }}>
        {icon && <span className="icon">{icon}</span>}
        {text}
      </button>
    );
}