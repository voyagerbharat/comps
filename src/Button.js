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
}) {
  const classes = className(
    "px-3 py-1.5 border",
    {
      "border-blue-500 bg-blue-500 border": primary,
    },
    {
      "border-gray-500 bg-gray-500 border": secondary,
    },
    {
      "border-red-500 bg-red-500 border": danger,
    },
    {
      "border-yellow-500 bg-yellow-500 border": warning,
    },
    {
      "border-green-500 bg-green-500 border": success,
    }
  );
  return <button className={classes}>{children}</button>;
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
      console.log(warning);
      return new Error("only one color scheme allowed");
    }
  },
};
export default Button;
