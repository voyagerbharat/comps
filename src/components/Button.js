// eslint-disable-next-line no-unused-vars
import propTypes from "prop-types";
import className from "classnames";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const classes = className("px-3 py-1.5 border flex items-center", {
    "border-blue-500 bg-blue-500 border": primary,

    "border-gray-500 bg-gray-500 border": secondary,

    "border-red-500 bg-red-500 border": danger,

    "border-yellow-500 bg-yellow-500 border": warning,

    "border-green-500 bg-green-500 border": success,

    "rounded-full": rounded,
    "bg-white": outline,
    "text-blue-500": primary && outline,
    "text-gray-500": outline && secondary,
    "text-yellow-500": outline && warning,
    "text-red-500": outline && danger,
    "text-green-500": outline && success,
  });
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}
Button.propTypes = {
  checkValueVariation: ({ primary, secondary, warning, danger, success }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!danger) +
      Number(!!warning) +
      Number(!!success);
    if (count > 1) {
      return new Error("only one color scheme allowed");
    }
  },
};
export default Button;
