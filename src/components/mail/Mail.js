import React from "react";
import "./Mail.css";
import MailTools from "./MailTools";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import { Paper } from "@mui/material";

const Mail = () => {
  return (
    <div className="mail">
      <MailTools />

      <div className="mail__body">
        <Paper variant="outlined" elevation={2} className="main__bodyContainer">
          <div className="mail__bodyHeader">
            <div className="main__bodyHeaderDetails">
              <h2>Subject</h2>
              <LabelImportantIcon className="mail__important" />
              <p>Title</p>
            </div>
            <div>
              <p>10pm</p>
            </div>
          </div>
          <div className="mail__message">
            <p>
              This is the message. kdk kdkd dkd kdjkj dkjdk jdkjd kdjk djdkl
              jdklj dkjd kjdk jdkl jdkj dkdj kdjk jdk
            </p>
          </div>{" "}
        </Paper>
      </div>
    </div>
  );
};

export default Mail;
