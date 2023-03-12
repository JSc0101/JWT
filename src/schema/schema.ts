import { Schema, model, Document } from "mongoose";
import bcryptjs from "bcryptjs";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  encryptPassword(password: string): Promise<string>;
  validatePassword(password: string): Promise<boolean>;
}

const schema = new Schema({
  username: {
    type: String,
    required: true,
    lowercase: true,
    min: 4,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true, // added required flag
  },
});

schema.methods.encryptPassword = async (password: string): Promise<string> => {
  const salt = await bcryptjs.genSalt(10);
  return bcryptjs.hash(password, salt);
};

schema.methods.validatePassword = async function (
  password: string
): Promise<boolean> {
  return await bcryptjs.compare(password, this.password);
};

export const UserModel = model<IUser>("User", schema);
