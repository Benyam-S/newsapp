# newsapp-backend

News Articles is a web application that displays the latest news articles from https://newsapi.org/. The application enables you to search articles using their title, displays articles based on category and sort articles based on their published time.

newsapp-backend is the backend side of this platform. It uses express.js framework for accepting and sending api request. In order to have clean and scalable platform this repository uses clean code architecture.

# Directory Description

- First all the business logic and server related files are found in the 'src' directory.
- The 'adapter' directory contains all the request handler functions, meaning an api request related to searching articles are handled by the controller functions inside this directory.
- The 'application' directory contains the business logic of the platform and the interfaces for their implementation.
- The 'config' directory contains the configuration settings for starting the express server and performing other service such as API key for the https://newsapi.org/ service.
    Note: configuration isn't directly saved inside the 'config' directory, the system uses environmental variables for setting this important values. Therefore in order to start the server refer the config file and set the environmental variables accordingly.
- The 'entities' directory contains the core entities used in the system like 'Article'.
- The 'frameworks' directory contains all implementations of the platform business logic.
- This repository also includes unit tests for the repository and api modules
- And it uses github actions for CI/CD