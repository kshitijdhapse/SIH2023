import React from "react";

const sizeClasses = {
  txtMontserratBold15: "font-bold font-montserrat",
  txtInterRegular40: "font-inter font-normal",
  txtInterRegular36Black900: "font-inter font-normal",
  txtInterRegular32: "font-inter font-normal",
  txtInterSemiBold36: "font-inter font-semibold",
  txtInterSemiBold24: "font-inter font-semibold",
  txtMontserratRegular40: "font-montserrat font-normal",
  txtInterSemiBold40: "font-inter font-semibold",
  txtMontserratRegular36: "font-montserrat font-normal",
  txtMontserratRegular48: "font-montserrat font-normal",
  txtMontserratRegular15: "font-montserrat font-normal",
  txtMontserratRegular56: "font-montserrat font-normal",
  txtMontserratRomanSemiBold20: "font-montserrat font-semibold",
  txtInterRegular34: "font-inter font-normal",
  txtInterRegular24: "font-inter font-normal",
  txtInterRegular24Blue500: "font-inter font-normal",
  txtInterRegular36: "font-inter font-normal",
  txtComfortaaRegular2844: "font-comfortaa font-normal",
  txtInterRegular40Black900: "font-inter font-normal",
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
