import React from "react";

import "./style.css";

export const AppButton = ({ isActive, children, onClick }) => {
  return (
    <div onClick={onClick} className={`tag-name ${isActive ? "active" : ""}`}>
      {children}
    </div>
  );
};

AppButton.propTypes = {};
