import "../css/componenets/Button.css";

/* eslint-disable react/prop-types */
export default function Button({
  text,
  onClick,
  icon = null,
  isInverted = false,
  isDisabled = false,
}) {
  const classes = isInverted ? "inverted btn" : "btn";

  return (
    <button disabled={isDisabled} className={classes} onClick={onClick}>
      {icon ?? <span className="btn-icon">{icon}</span>} {text}
    </button>
  );
}
