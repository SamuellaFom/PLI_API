import { createInterest, updateInterest, deleteInterest } from "../services/Interest.service";
import { Response, Request } from "express";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// GET ALL
export async function getAll(req: Request, res: Response) {
  const QueryResult = await prisma.interests.findMany();
  res.send(JSON.stringify(QueryResult, null, 2));
}

// GET BY ID
export async function getById(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const QueryResult = await prisma.interests.findUnique({
    where: { id },
  });
  res.send(JSON.stringify(QueryResult, null, 2));
}

// CREATE INTEREST
export async function create(req: Request, res:Response) {
  try {
    await createInterest(req, res);
  } catch (error) {
    res.send("Interest not created");
    console.log(error);
  }
}

// UPDATE INTEREST
export async function updateById(req: Request, res: Response) {
  try {
    await updateInterest(req, res);
  } catch (error) {
    res.send("Interest has been updated");
  }
}

// DELETE INTEREST
export async function deleteById(req: Request, res: Response) {
  try {
    await deleteInterest(req, res);
  } catch (error) {
    res.send("Interest not delete");
    console.log(error);
  }
}