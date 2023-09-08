import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[10px]", circle: "rounded-[50%]" };
const variants = {
  fill: { gray_900: "bg-gray-900 text-white-A700" },
  outline: {
    white_A700_33_white_A700_00:
      "border border-solid white_A700_33_white_A700_00_border",
  },
};
const sizes = { xs: "p-5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "xs",
  variant = "fill",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round", "circle"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["gray_900", "white_A700_33_white_A700_00"]),
};

export { Button };
