import { Dog } from "../Interface";
import {
  createDog,
  deleteDog,
  updateDog,
  updatePass,
} from "../services/Dog.services";

import { Request, Response } from "express";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// GET ALL
export async function getAll(req: Request, res: Response) {
  const QueryResult = await prisma.dogs.findMany({
    include: {
      posts: true,
      likes: true,
      matched: true,
      matched_dog: true,
      sent_messages: true,
      received_messages: true,
    },
  });

  res.send(JSON.stringify(QueryResult, null, 2));
}

// GET BY ID
export async function getById(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const QueryResult: Dog = await prisma.dogs.findUnique({
    where: {
      id: id,
    },
    include: {
      posts: true,
      likes: true,
      matched: true,
      matched_dog: true,
      sent_messages: true,
      received_messages: true,
    },
  });
  res.send(JSON.stringify(QueryResult, null, 2));
}

// CREATE dog
export async function register(req: Request, res: Response) {
  try {
    await createDog(req, res);
  } catch (error) {
    res.send("dog not create");
    console.log(error);
  }
}

// UPDATE dog
export async function updateById(req: Request, res: Response) {
  try {
    await updateDog(req, res);
  } catch (error) {
    res.send("dog has been updated");
  }
}

export async function updatePassword(req: Request, res: Response) {
  try {
    await updatePass(req, res);
  } catch (error) {
    res.send("Password dog has been updated");
  }
}

// DELETE dog
export async function deleteById(req: Request, res: Response) {
  try {
    await deleteDog(req, res);
  } catch (error) {
    res.send("dog not delete");
    console.log(error);
  }
}

// LOGIN
export async function login(req: Request, res: Response) {
  const body = req.body;

  const QueryResult = await prisma.dogs.findUnique({
    where: { email: body.email },
  }); 
  console.log(QueryResult)
  
  if (QueryResult) {
    bcrypt.compare(body.password, QueryResult.password).then((valid: any) => {
      if (!valid) {
        res.status(404).send("error: email or password incorrect");
      } else {
        const acces = jwt.sign(
          {
            email: QueryResult.email,
            id: QueryResult.id,
          },
          process.env.JWT_SIGN_SECRET,
          {
            expiresIn: "24h",
          }
        );
        // console.log(acces)
        const result = { token: acces , id: QueryResult.id};
        return res.status(200).json(result);
      }
    });
  } else {
    res.status(404).send("error: email or password incorrect");
  }
}
