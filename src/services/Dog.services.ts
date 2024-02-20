import { Request, Response } from "express";
import { Dog, NewPassword } from "../Interface";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// CREATE Dog
export async function createDog(req: Request, res: Response) {
  try {
    const datas: Dog = req.body;
    const hash = await bcrypt.hash(datas.password, 10);
    const date = new Date(datas.birthday);
    const age = Age(date);

    const QueryResult = await prisma.dogs.create({
      data: {
        username: datas.username,
        email: datas.email,
        password: hash,
        name: datas.name,
        poids: datas.poids,
        race: datas.race,
        birthday: date,
        age: age,
        gender: datas.gender,
        location: datas.location,
        interest: datas.interest,
        sterilization: datas.sterilization,
        profile_picture: datas.profile_picture,
      },
    });

    const acces = jwt.sign(
      {
        email: datas.email,
        id: datas.id,
      },
      process.env.JWT_SIGN_SECRET,
      {
        expiresIn: "24h",
      }
    );
    console.log(acces)
    const result = { token: acces , id: QueryResult.id};
    res.send(JSON.stringify(QueryResult, null, 2));
    return result;
  } catch (error) {
    res.send("Dog not create");
    console.log(error);
  }
}

// UPDATE Dog
export async function updateDog(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    const datas: Dog = req.body;
    await prisma.dogs.update({
      data: datas,
      where: { id },
    });
    const QueryResult = await prisma.dogs.findUnique({ where: { id } });
    res.send(JSON.stringify(QueryResult, null, 2));
  } catch (error) {
    res.send("Dog has not been updated");
  }
}

export async function updatePass(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    const datas: NewPassword = req.body;
    //let hash = await bcrypt.hash(datas.password, 10);

    const QueryResult = await prisma.dogs.findUnique({
      where: { id: id },
    });

    if (QueryResult) {
      bcrypt
        .compare(datas.password, QueryResult.password)
        .then(async (valid: any) => {
          if (valid) {
            if (datas.new_password == datas.repeat_password) {
              const hash = await bcrypt.hash(datas.password, 10);
              await prisma.dogs.update({
                data: {
                  password: hash,
                },
                where: { id },
              });
              res.send("Password updated");
            } else {
              res.send("Repeat password and New password are different");
            }
          } else {
            res.send("Password is different");
          }
        });
    } else {
      res.send("Dog not found");
    }
  } catch (error) {
    res.send("Dog not delete");
  }
}
// DELETE DOG
export async function deleteDog(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    await prisma.dogs.delete({
      where: { id },
    });
    res.send("Dog delete");
  } catch (error) {
    res.send("Dog not delete");
  }
}

function Age(birthdayDate: Date): number {
  const dayNow = new Date();
  let age = dayNow.getFullYear() - birthdayDate.getFullYear();

  if (
      dayNow.getMonth() < birthdayDate.getMonth() ||
      (dayNow.getMonth() === birthdayDate.getMonth() &&
          dayNow.getDate() < birthdayDate.getDate())
  ) {
      age--;
  }

  return age;
}