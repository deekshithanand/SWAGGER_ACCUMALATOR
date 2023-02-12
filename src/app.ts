import express from "express";
import serviceDocRoute from "./routes/serviceDocumentRouter.js";
import swaggerRoute from "./routes/swaggerUi.js";

const port = 3000;

const app: express.Application = express();

app.use(serviceDocRoute);
app.use(swaggerRoute);

app.listen(port, () => console.log("App started on port " + port));
