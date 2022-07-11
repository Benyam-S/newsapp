import validationService from "../../../application/services/validation";
import { CATEGORY_ALL } from "../../../entities/constants";

// serviceController is a controller function defines all the service related controller functions
export default function serviceController(emailService, emailServiceImpl) {
  let vService = validationService();
  let eService = emailService(emailServiceImpl());

  // sendMail is a request handler function that handles email sending request
  const sendMail = (req, res, next) => {
    let name = req.body.name;
    let email = req.body.email;
    let category = req.body.category ?? CATEGORY_ALL;

    // Validating the input values
    let nameError = vService.validateName(name);
    let emailError = vService.validateEmail(email);

    // If there is an error with email or name
    if (nameError || emailError) {
      let response = {
        status: "bad",
        error: { name: nameError, email: emailError },
      };

      // Setting status code to ok and sending the json response
      res.status(400).json(response);
    }

    // Sending email for the provided email address
    eService.sendEmail(email, {
      text: `Thank you for subscribing to '${category.toUpperCase()}' news category! We will keep you updated.`,
    });

    // Setting status code to ok and sending the json response
    res.status(200).end();
  };

  return {
    sendMail,
  };
}
