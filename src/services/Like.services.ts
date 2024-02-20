import { Response, Request } from "express";
import { Like } from "../Interface";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// CREATE LIKE
export async function createLike(req: Request, res: Response) {
  try {
    const datas: Like = req.body;

    const QueryResult = await prisma.likes.create({
      data: datas,
    });

    res.send(JSON.stringify(QueryResult, null, 2));
  } catch (error) {
    res.status(500).send("Failed to create like");
    console.log(error);
  }
}

// UPDATE LIKE
export async function updateLike(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    await prisma.likes.update({
      data: req.body,
      where: { id },
    });
    const QueryResult = await prisma.likes.findUnique({ where: { id } });
    res.send(JSON.stringify(QueryResult, null, 2));
  } catch (error) {
    res.send("Like has not been updated");
  }
}

// DELETE LIKE
export async function deleteLike(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    await prisma.likes.delete({
      where: { id },
    });
    res.send("Like delete");
  } catch (error) {
    res.send("Like not delete");
  }
}
