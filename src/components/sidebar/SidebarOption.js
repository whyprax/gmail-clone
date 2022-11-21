import { IconButton } from "@mui/material";
import React from "react";
import "./Sidebar.css";

const SidebarOption = ({ Icon, title, number, selected }) => {
  return (
    <div className={`sidebarOption ${selected && "sidebarOption--active"}`}>
      <IconButton>
        <Icon />
      </IconButton>
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
};

export default SidebarOption;
