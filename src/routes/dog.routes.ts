import {
  getAll,
  getById,
  register,
  updateById,
  updatePassword,
  deleteById,
  login,
} from "../controllers/Dog.controllers";
import authenticateJWT from "../middlewares/authenticateJWT";

const express = require("express");

const routerdogs = express();

routerdogs.get("/dogs/", getAll);
routerdogs.get("/dogs/:id", authenticateJWT, getById);
routerdogs.post("/dogs/register/", register);
routerdogs.post("/dogs/auth/", login);
routerdogs.put("/dogs/update/:id", authenticateJWT, updateById);
routerdogs.put("/dogs/update/password/:id", authenticateJWT, updatePassword);
routerdogs.delete("/dogs/delete/:id", authenticateJWT, deleteById);

export default routerdogs;
