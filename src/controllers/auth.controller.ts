import { Request, Response } from "express";
import { UserModel, IUser } from "../schema/schema";
import jwt from "jsonwebtoken";

export const singUp = async (req: Request, res: Response) => {
  try {
    const user: IUser = new UserModel({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    user.password = await user.encryptPassword(user.password);
    const saveUser = await user.save();
    const token: string = jwt.sign(
      { _id: saveUser._id },
      process.env.TOKEN_SECRET || "token"
    );

    res.header("token-user", token).json(saveUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const singIn = async (req: Request, res: Response) => {
  const user = await UserModel.findOne({ email: req.body.email });
  if (!user) return res.status(400).json("email or password is wrong");

  const correctPassword = await user.validatePassword(req.body.password);
  if (!correctPassword) return res.status(400).json("Invalid password");

  const token: string = jwt.sign(
    { _id: user._id },
    process.env.TOKEN_SECRET || "token",
    {
      expiresIn: 60 * 60 * 24,
    }
  );
  res.header("auth-token", token).json(`Bienvenido ${user.username}`);
};

export const profile = async (req: Request, res: Response) => {
  const user = await UserModel.findById(req.userId, { password: 0 });
  if (!user) return res.status(404).json("no user found");

  res.json(user);
};
