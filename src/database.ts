import mongoose from "mongoose";

export const conection = async (): Promise<boolean> => {
  await mongoose.connect("mongodb://127.0.0.1:27017/auth");
  console.log("runtime database");
  return true;
};
