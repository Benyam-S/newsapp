import nodemailer from "nodemailer";
import config from "../../../config/config";

// emailService is a function that implements all the need functions for the email service
export default function emailService() {
  // Configuring the nodemailer transport
  let transport = nodemailer.createTransport({
    pool: true,
    maxConnections: 50,
    host: config.emailHost, // The email host
    port: config.emailPort, // The port used
    secure: config.emailPort == 465 ? true : false, // Secure if 465
    auth: {
      user: config.emailAddress, // The email account
      pass: config.emailPassword, // The email password
    },
  });

  // sendEmail is a function that sends email to provide email using nodemailer
  const sendEmail = (from, to, subject, text) => {
    // Sending the email
    transport.sendMail({ from, to, subject, text }, (err) => {
      if (err) {
        console.log(err);
      }
    });
  };

  return {
    sendEmail,
  };
}
