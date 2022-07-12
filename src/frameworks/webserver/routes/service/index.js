import express from "express";

// Setting the routes for handling service related requests
export default function serviceRouter(controller) {
  const router = express.Router(controller);

  // Setting the routes for the service request handlers
  router.route("/send_mail").post(controller.sendMail);

  return router;
}
