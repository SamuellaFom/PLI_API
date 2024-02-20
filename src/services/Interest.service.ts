import { Response, Request } from "express";
import { Interest } from "../Interface";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// CREATE INTEREST
export async function createInterest(req: Request, res: Response) {
  try {
    const datas: Interest = req.body;

    const QueryResult = await prisma.interests.create({
      data: datas,
    });

    res.send(JSON.stringify(QueryResult, null, 2));
  } catch (error) {
    res.status(500).send("Failed to create interest");
    console.log(error);
  }
}

// UPDATE INTEREST
export async function updateInterest(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    await prisma.interests.update({
      data: req.body,
      where: { id },
    });
    const QueryResult = await prisma.interests.findUnique({ where: { id } });
    res.send(JSON.stringify(QueryResult, null, 2));
  } catch (error) {
    res.status(500).send("Interest has not been updated");
    console.log(error);
  }
}

// DELETE INTEREST
export async function deleteInterest(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    await prisma.interests.delete({
      where: { id },
    });
    res.send("Interest delete");
  } catch (error) {
    res.send("Interest not delete");
  }
}