import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import EmailList from "./components/email/EmailList";
import Mail from "./components/mail/Mail";
import "./App.css";
import SendMail from "./components/sendMail/SendMail";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Routes>
            <Route path="/" element={<EmailList />} />
            <Route path="/email" element={<Mail />} />
          </Routes>
        </div>

        <SendMail />
      </div>
    </BrowserRouter>
  );
};

export default App;
