import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import ErrorIcon from "@mui/icons-material/Error";
import DeleteIcon from "@mui/icons-material/Delete";
import MailIcon from "@mui/icons-material/Mail";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import "./Mail.css";
import { useNavigate } from "react-router-dom";

const MailTools = () => {
  const navigate = useNavigate();

  return (
    <div className="mainTools">
      <div className="mainTool">
        <IconButton>
          <ArrowBackIcon onClick={() => navigate("/")} />
        </IconButton>
        <IconButton>
          <SystemUpdateAltIcon />
        </IconButton>
        <IconButton>
          <ErrorIcon />
        </IconButton>
        <IconButton>
          <DeleteIcon />
        </IconButton>
        <IconButton>
          <MailIcon />
        </IconButton>
        <IconButton>
          <AccessTimeIcon />
        </IconButton>
        <IconButton>
          <CheckCircleIcon />
        </IconButton>
        <IconButton>
          <DoubleArrowIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
      <div className="mainTool">
        <IconButton>
          <UnfoldMoreIcon />
        </IconButton>
        <IconButton>
          <LocalPrintshopIcon />
        </IconButton>
        <IconButton>
          <ExitToAppIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default MailTools;
