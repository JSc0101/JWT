import { Request, Response } from "express";


export const singUp = (req: Request, res: Response) => {
  res.send("Sing UP !");
};

export const singIn = (req: Request, res: Response) => {
  res.send("Sing IN !");
};

export const profile = (req: Request, res: Response) => {
  res.send("profile !");
};
