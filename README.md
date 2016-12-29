# swagger-express-demo
Demo of swagger with express app

## Overview
Express REST APIs can be created adhering to [OpenAPI spec](https://github.com/OAI/OpenAPI-Specification) using [Swagger editor](http://editor.swagger.io/), [swaggerize-express](https://github.com/krakenjs/swaggerize-express) and [Swagger UI](https://github.com/swagger-api/swagger-ui).

    1. Design your APIs using [Swagger editor](http://editor.swagger.io/).
    2. Desgin in YAML mode as it is more readable and download the spec in JSON mode.
    3. Install Yoeman - `npm install -g yo`
    4. Install swaggerize-express generator - `npm install -g generator-swaggerize`
    5. Create you project folder and run - `yo swaggerize`
    6. Point to the downloaded swagger spec json and choose express as the framework.
    7. In the generated code, make changes to the express app as per your needs.
    8. This results in a working express app serving your APIs.
    9. To add Swagger UI support in your app, there are two options,
        a. [swagger-ui-express](https://github.com/scottie1984/swagger-ui-express) to serve default swagger UI
        b. Directly using [swagger ui](https://github.com/swagger-api/swagger-ui) in a public folder

