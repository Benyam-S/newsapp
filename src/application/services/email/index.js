import config from "../../../config/config";

// emailService is a function that defines all the email service functions
export default function emailService(service) {
  // sendEmail is a function that sends email to provide email
  const sendEmail = (to, mailOption) => {
    let from = mailOption
      ? mailOption.from ?? config.emailAddress
      : config.emailAddress;
    let subject = mailOption
      ? mailOption.subject ?? "Email Confirmation"
      : "Email Confirmation";
    let text = mailOption
      ? mailOption.text ?? "Thank you subscribing the news platform!"
      : "Thank you subscribing the news platform!";

    service.sendEmail(from, to, subject, text);
  };

  return {
    sendEmail,
  };
}
