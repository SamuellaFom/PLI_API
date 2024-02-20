import { getAll,getById, create, updateById, deleteById } from "../controllers/Like.controllers";
import authenticateJWT from "../middlewares/authenticateJWT";

const express = require("express");

const routerlike = express();

routerlike.get("/likes/", getAll);
routerlike.get("/likes/:id", getById);
routerlike.post("/likes/create/", authenticateJWT, create);
routerlike.put("/likes/update/:id", authenticateJWT, updateById);
routerlike.delete("/likes/delete/:id", authenticateJWT, deleteById);

export default routerlike;
 