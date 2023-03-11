import { Request, Response } from "express";
import { UserModel } from "../schema/schema";
import jwt from "jsonwebtoken";

export const singUp = async (req: Request, res: Response) => {
  const user = new UserModel({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  const saveUser = await user.save();
  const token = jwt.sign(saveUser._id, process.env.TOKEN_SECRET || 'token')

  res.header('token-user', token).json(saveUser);
};

export const singIn = (req: Request, res: Response) => {
  res.send("Sing IN !");
};

export const profile = (req: Request, res: Response) => {
  res.send("profile !");
};
