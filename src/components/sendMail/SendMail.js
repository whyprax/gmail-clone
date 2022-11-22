import React from "react";
import "./SendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../../features/mailSlice";

const SendMail = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon
          className="sendMail__close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("To", { required: true })}
          name="to"
          placeholder="To"
          type="text"
        />
        {errors.to && <p className="sendMail__error">To is Required</p>}
        <input
          {...register("Subject", { required: true })}
          name="subject"
          placeholder="Subject"
          type="text"
        />
        {errors.subject && <p className="sendMail__error">To is Required</p>}
        <input
          {...register("Message", { required: true })}
          name="message"
          className="sendMail__message"
          type="text"
        />
        {errors.message && <p className="sendMail__error">To is Required</p>}

        <div className="sendMail__options">
          <Button
            variant="contained"
            className="sendMail__send"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
