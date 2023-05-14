import { Schema, Document } from 'mongoose';

const UserSchema = new Schema(
  {
    username: String,
    email: String,
    fullname: String,
    password: String,
    phone_number: String,
    // created_at: { type: Date, required: true, default: Date.now },
  },
  {
    timestamps: true,
    collection: 'user',
  },
);

export { UserSchema };

export interface User extends Document {
  username: string;
  email: string;
  fullname: string;
  password: string;
  phone_number: string;
}
