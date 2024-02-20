import {
  createMatch,
  updateMatch,
  deleteMatch,
} from "../services/Match.services";
import { Request, Response } from "express";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// GET ALL
export async function getAll(req: Request, res: Response) {
  const QueryResult = await prisma.matchs.findMany();
  res.send(JSON.stringify(QueryResult, null, 2));
}

// GET BY ID
export async function getById(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const QueryResult = await prisma.matchs.findUnique({
    where: { id },
  });
  res.send(JSON.stringify(QueryResult, null, 2));
}

// CREATE MATCH
export async function create(req: Request, res: Response) {
  try {
    await createMatch(req, res);
  } catch (error) {
    res.send("Match not created");
    console.log(error);
  }
}

// UPDATE MATCH
export async function updateById(req: Request, res: Response) {
  try {
    await updateMatch(req, res);
  } catch (error) {
    res.send("Match has been updated");
  }
}

// DELETE MATCH
export async function deleteById(req: Request, res: Response) {
  try {
    await deleteMatch(req, res);
  } catch (error) {
    res.send("Match not delete");
    console.log(error);
  }
}
