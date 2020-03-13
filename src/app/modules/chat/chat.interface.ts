import { Document } from 'mongoose';

export interface IChat extends Document {
  readonly author: string;
  readonly message: string;
}
