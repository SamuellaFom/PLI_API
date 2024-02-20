import { getAll, getById, create, updateById, deleteById } from "../controllers/Interest.controllers";
import authenticateJWT from "../middlewares/authenticateJWT";

const express = require("express");

const routerInterest = express();

routerInterest.get("/interests/", getAll);
routerInterest.get("/interests/:id", getById);
routerInterest.post("/interests/create/", authenticateJWT, create);
routerInterest.put("/interests/update/:id", authenticateJWT, updateById);
routerInterest.delete("/interests/delete/:id", authenticateJWT, deleteById);

export default routerInterest;