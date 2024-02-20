import {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
} from "../controllers/Post.controllers";
import authenticateJWT from "../middlewares/authenticateJWT";

const express = require("express");

const routerannounces = express();

routerannounces.get("/posts/", getAll);
routerannounces.get("/posts/:id", getById);
routerannounces.post("/posts/create/", create);
routerannounces.put("/posts/update/:id", authenticateJWT, updateById);
routerannounces.delete("/posts/delete/:id", authenticateJWT, deleteById);

export default routerannounces;
