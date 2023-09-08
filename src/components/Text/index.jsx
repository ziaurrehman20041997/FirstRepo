import React from "react";

const sizeClasses = {
  txtPoppinsRegular20Gray9009e: "font-normal font-poppins",
  txtPoppinsSemiBold32Gray90087: "font-poppins font-semibold",
  txtSpaceGroteskBold56Cyan200: "font-bold font-spacegrotesk",
  txtSpaceGroteskBold56WhiteA700: "font-bold font-spacegrotesk",
  txtSpaceGroteskBold56: "font-bold font-spacegrotesk",
  txtPoppinsSemiBold16Gray900: "font-poppins font-semibold",
  txtSpaceGroteskBold100Cyan200: "font-bold font-spacegrotesk",
  txtPoppinsSemiBold16: "font-poppins font-semibold",
  txtPoppinsLightItalic190: "font-light font-poppins italic",
  txtPoppinsSemiBold32: "font-poppins font-semibold",
  txtPoppinsLightItalic56: "font-light font-poppins italic",
  txtSpaceGroteskBold100Gray900: "font-bold font-spacegrotesk",
  txtPoppinsBold24Gray900: "font-bold font-poppins",
  txtPoppinsRegular16WhiteA70087: "font-normal font-poppins",
  txtSpaceGroteskBold100Bluegray10001: "font-bold font-spacegrotesk",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsBold24: "font-bold font-poppins",
  txtSpaceGroteskBold200: "font-bold font-spacegrotesk",
  txtPoppinsSemiBold32Gray900: "font-poppins font-semibold",
  txtSpaceGroteskBold100: "font-bold font-spacegrotesk",
  txtPoppinsRegular16Gray900: "font-normal font-poppins",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtPoppinsLightItalic100WhiteA700: "font-light font-poppins italic",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtPoppinsSemiBold32Cyan200: "font-poppins font-semibold",
  txtPoppinsRegular20Gray900: "font-normal font-poppins",
  txtPoppinsRegular20WhiteA7009e: "font-normal font-poppins",
  txtPoppinsLightItalic100: "font-light font-poppins italic",
  txtPoppinsRegular20Gray90087: "font-normal font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
