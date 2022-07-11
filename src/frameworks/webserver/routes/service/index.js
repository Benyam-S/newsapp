import serviceController from "../../../../adapter/controller/service";
import emailServiceInterface from "../../../../application/services/email";
import emailServiceImpl from "../../../services/email";

// Setting the routes for handling service related requests
export default function serviceRouter(express) {
  const router = express.Router();

  // load controller with dependencies
  const controller = serviceController(emailServiceInterface, emailServiceImpl);

  // Setting the routes for the service request handlers
  router.route("/send_mail").post(controller.sendMail);

  return router;
}
