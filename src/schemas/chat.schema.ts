import { Schema } from 'mongoose';

export const ChatSchema = new Schema({
  author: String,
  message: String,
});
