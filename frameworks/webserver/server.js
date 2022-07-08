export default function serverConfig(app, config) {
  // Starting the web server
  function startServer() {
    app.listen(
      config.port,
      console.log(
        "Express server listening on %d, in %s mode",
        config.port,
        app.get("env")
      )
    );
  }

  return { startServer };
}
