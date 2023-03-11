import { Request, Response } from "express";
import { UserModel } from "../schema/schema";

export const singUp = async (req: Request, res: Response) => {
  const user = new UserModel({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  const saveUser = await user.save();
  console.log(saveUser);
  res.send('save user register !')
};

export const singIn = (req: Request, res: Response) => {
  res.send("Sing IN !");
};

export const profile = (req: Request, res: Response) => {
  res.send("profile !");
};
