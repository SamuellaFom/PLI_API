import { Request, Response } from "express";
import { Post } from "../Interface";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// CREATE POST
export async function createPost(req: Request, res: Response) {
  try {
    const datas = req.body;
    console.log(datas);
    const QueryResult = await prisma.posts.create({
      data: {
        dogId: parseInt(datas.dogId),
        content: datas.content,
        image_url: datas.image_url
      },
    });
    //console.log(QueryResult);
    res.send(JSON.stringify(QueryResult, null, 2));
  } catch (error) {
    res.send("Post not created");
    console.log(error);
  }
}

// UPDATE POST
export async function updatePost(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    await prisma.posts.update({
      data: req.body,
      where: { id },
    });
    const QueryResult = await prisma.posts.findUnique({ where: { id } });
    res.send(JSON.stringify(QueryResult, null, 2));
  } catch (error) {
    res.send("Post has not been updated");
  }
}

// DELETE POST
export async function deletePost(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    await prisma.posts.delete({
      where: { id },
    });
    res.send("Post delete");
  } catch (error) {
    res.send("Post  not delete");
  }
}
