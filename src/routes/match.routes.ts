import {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
} from "../controllers/Match.controllers";
import authenticateJWT from "../middlewares/authenticateJWT";

const express = require("express");

const routermatch = express();

routermatch.get("/matchs/", getAll);
routermatch.get("/matchs/:id", getById);
routermatch.post("/matchs/create/", authenticateJWT, create);
routermatch.put("/matchs/update/:id", authenticateJWT, updateById);
routermatch.delete("/matchs/delete/:id", authenticateJWT, deleteById);

export default routermatch;
