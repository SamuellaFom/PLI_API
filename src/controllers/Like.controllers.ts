import { createLike, updateLike, deleteLike } from "../services/Like.services";
import { Response, Request } from "express";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// GET ALL
export async function getAll(req: Request, res: Response) {
  const QueryResult = await prisma.likes.findMany();
  res.send(JSON.stringify(QueryResult, null, 2));
}

// GET BY ID
export async function getById(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const QueryResult = await prisma.likes.findUnique({
    where: { id },
  });
  res.send(JSON.stringify(QueryResult, null, 2));
}

// CREATE LIKE
export async function create(req: Request, res: Response) {
  try {
    await createLike(req, res);
  } catch (error) {
    res.send("Like not created");
    console.log(error);
  }
}

// UPDATE LIKE
export async function updateById(req: Request, res: Response) {
  try {
    await updateLike(req, res);
  } catch (error) {
    res.send("Like has been updated");
  }
}

// DELETE LIKE
export async function deleteById(req: Request, res: Response) {
  try {
    await deleteLike(req, res);
  } catch (error) {
    res.send("Like not delete");
    console.log(error);
  }
}
