// Setting the routes for handling article related requests
export default function articleRouter(express) {
  const router = express.Router();

  // GET endpoints
  router.route("/").get(() => {});

  return router;
}
