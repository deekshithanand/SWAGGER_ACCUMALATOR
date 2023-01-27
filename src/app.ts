import express from "express";

const port = 3000;

const app: express.Application = express();

app.get("/", (_req: express.Request, res: express.Response) => {
  res.send("Its working! Welcome!");
});

app.listen(port, () => console.log("App started on port " + port));
