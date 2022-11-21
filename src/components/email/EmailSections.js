import React from "react";
import "./EmailList.css";

const EmailSections = ({ Icon, title, color, selected }) => {
  return (
    <div
      className={`emailSection ${selected && `section--selected`}`}
      style={{
        borderBottom: `${selected && `3px solid ${color}`}`,
        color: `${selected && color}`,
      }}
    >
      <Icon />
      <h3>{title}</h3>
    </div>
  );
};

export default EmailSections;
