import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import serviceRegistry from "../configs/ServiceConfig.js";

const swaggerRoute = Router();
const swaggerUrls = serviceRegistry;
const options = {
  swaggerOptions: {
    urls: swaggerUrls,
  },
  explorer: true,
};

swaggerRoute.use("/", swaggerUi.serve);
swaggerRoute.get("/", swaggerUi.setup(null, options));

export default swaggerRoute;
