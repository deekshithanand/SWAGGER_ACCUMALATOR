import { Router } from "express";
import serviceRegistry from "../configs/ServiceConfig.js";
import axios from "axios";

const serviceDocRoute = Router();

const rpc = axios.create({
  proxy: false
})

serviceDocRoute.get("/getDoc/:service", async (req, res) => {
  const { service } = req.params;

  const url = serviceRegistry.find(
    (entry) => entry.url === ("/getDoc/" + service)
  )?.swaggerURL;

  if (null == url) {
    res.sendStatus(404);
    return;
    
  }

  try {
    const jsonResponse = await rpc.get(url);
    res.json(jsonResponse.data);
  } catch (err) {
    res.status(500).send("Error received while API call: " + err);
  }
});

export default serviceDocRoute;
