import { Document } from 'mongoose';

export interface Chat extends Document {
  readonly author: string;
  readonly message: string;
}
