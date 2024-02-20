import { createPost, updatePost, deletePost } from "../services/Post.services";
import { Request, Response } from "express";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// GET ALL
export async function getAll(req: Request, res: Response) {
  const QueryResult = await prisma.posts.findMany({
    include: {
      likes: true,
    },
  });
  res.send(JSON.stringify(QueryResult, null, 2));
}

// GET BY ID
export async function getById(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const QueryResult = await prisma.posts.findUnique({
    where: {
      id: id,
    },
    include: {
      likes: true,
    },
  });
  res.send(JSON.stringify(QueryResult, null, 2));
}

// CREATE POST
export async function create(req: Request, res: Response) {
  try {
    await createPost(req, res);
  } catch (error) {
    res.send("Post not create");
    console.log(error);
  }
}

// UPDATE POST
export async function updateById(req: Request, res: Response) {
  try {
    await updatePost(req, res);
  } catch (error) {
    res.send("Post has been updated");
  }
}

// DELETE POST
export async function deleteById(req: Request, res: Response) {
  try {
    await deletePost(req, res);
  } catch (error) {
    res.send("Post not delete");
    console.log(error);
  }
}
