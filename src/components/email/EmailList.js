import React from "react";
import EmailSections from "./EmailSections";
import EmailSettings from "./EmailSettings";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import EmailRow from "./EmailRow";

const Emaillist = () => {
  return (
    <div className="emaillist">
      <EmailSettings />

      <div className="emailList__sections">
        <EmailSections
          Icon={InboxIcon}
          title="Primary"
          color="#E41B17"
          selected
        />
        <EmailSections Icon={PeopleIcon} title="Social" color="green" />
        <EmailSections Icon={LocalOfferIcon} title="Promotions" color="blue" />
      </div>

      <div className="emailList__list">
        <EmailRow
          email="Sonnny@gmail.com"
          title="This is the amazing subject "
          subtitle="YOOOO!!"
          date="Thu, 24 Dec, 2024 10:47:12 GMT"
        />
        <EmailRow
          email="Sonnny@gmail.com"
          title="This is the amazing subject "
          subtitle="YOOOO!!"
          date="Thu, 24 Dec, 2024 10:47:12 GMT"
        />
        <EmailRow
          email="Sonnny@gmail.com"
          title="This is the amazing subject "
          subtitle="YOOOO!!"
          date="Thu, 24 Dec, 2024 10:47:12 GMT"
        />
      </div>
    </div>
  );
};

export default Emaillist;
