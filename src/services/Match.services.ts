import { Request, Response } from "express";
import { Match } from "../Interface";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// CREATE MATCH
export async function createMatch(req: Request, res: Response) {
  try {
    const datas: Match = req.body;

    const QueryResult = await prisma.matchs.create({
      data: datas,
    });

    res.send(JSON.stringify(QueryResult, null, 2));
  } catch (error) {
    res.status(500).send("Failed to create match");
    console.log(error);
  }
}

// UPDATE MATCH
export async function updateMatch(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    await prisma.matchs.update({
      data: req.body,
      where: { id },
    });
    const QueryResult = await prisma.matchs.findUnique({ where: { id } });
    res.send(JSON.stringify(QueryResult, null, 2));
  } catch (error) {
    res.send("Match has not been updated");
  }
}
// DELETE UPDATE
export async function deleteMatch(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    await prisma.matchs.delete({
      where: { id },
    });
    res.send("Match delete");
  } catch (error) {
    res.send("Match  not delete");
  }
}
