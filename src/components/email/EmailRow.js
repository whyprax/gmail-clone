import React from "react";
import CheckBox from "@mui/material/Checkbox";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const EmailRow = ({ email, title, subtitle, date }) => {
  const navigate = useNavigate();

  return (
    <div
      className="emailRow"
      onClick={() => {
        navigate("/email");
      }}
    >
      <div className="emailRow__left">
        <CheckBox />
        <IconButton>
          <StarBorderIcon />
        </IconButton>
        <IconButton>
          <ArrowRightIcon />
        </IconButton>
        <p>{email}</p>
      </div>
      <div className="emailRow__middle">
        <p>{title}</p>
        <span>-</span>
        <span>{subtitle}</span>
      </div>
      <div className="emailRow__right">
        <p>{date}</p>
      </div>
    </div>
  );
};

export default EmailRow;
